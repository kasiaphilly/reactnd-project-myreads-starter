import React, {
    Component
}
from "react";
import PropTypes from "prop-types"
import {
    Link
}
from "react-router-dom"
import Book from "./Book"
import * as BooksAPI from "../BooksAPI"

export default class Search extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    state = {
        searchedBooks: [],
        query: ""
    }

    // Update query as user starts typing

    updateQuery = (query) => {
        this.setState({
            query: query
        })
        if (query !== "") {
            this.searchQuery(query);
        } else {
            this.setState({
                searchedBooks: []
            });
        }
    }

    //return the search result (if any)

    searchQuery(query) {
        BooksAPI.search(query).then(searchResult => {
            if (searchResult) {
                this.setState({
                    searchedBooks: searchResult
                })
            } else {
                this.setState({
                    searchedBooks: []
                })
            }
        })
    }

    render() {
        const {
            books, updateShelf
        } = this.props;
        const {
            query, searchedBooks
        } = this.state;

        return ( < div className = "search-books" >
            < div className = "search-books-bar" >
            < Link to = "/"
            className = "close-search" > Close < /Link> < div className = "search-books-input-wrapper" >

            < input type = "text"
            placeholder = "Search by title or author"
            value = {
                query
            }
            onChange = {
                (e) => this.updateQuery(e.target.value)
            }
            /> < /div> < /div>

            < div className = "search-books-results" > {
                query && ( < div className = "showing-contacts" >
                    < span > Search
                    for "{query}"
                    shows {
                        searchedBooks.length > 0 ? searchedBooks.length : "0"
                    }
                    results < /span> < /div>
                )
            }

            < ol className = "books-grid" > {
                searchedBooks.length > 0 && searchedBooks.map((book) => ( < li key = {
                        book.id
                    } >
                    < Book book = {
                        book
                    }
                    books = {
                        books
                    }
                    updateShelf = {
                        updateShelf
                    }
                    /> < /li>
                ))
            } < /ol> < /div> < /div>
        )
    }
}
