import React, {
    Component
}
from "react";
import {
    update
}
from "../BooksAPI"
import PropTypes from "prop-types"

export default class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {
        const {
            book, books, updateShelf
        } = this.props;

        let bookId = book.id,
            bookShelfValue,
            // checking if a book has an assigned shelf
            hasId = books.find(book => book.id === bookId);

        if (hasId) {
            bookShelfValue = hasId.shelf;
        } else {
            bookShelfValue = "none";
        };


        return ( < div className = "book" >
            < div className = "book-top" >
            < div className = "book-cover"
            style = {
                {
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                }
            } >
            < /div> < div className = "book-shelf-changer" >
            < select

            onChange = {
                (e) => updateShelf(book, e.target.value)
            }
          
            value = {
                bookShelfValue
            } >
            < option value = "move"
            disabled > Move to... < /option> < option value = "currentlyReading" > Now Reading < /option> < option value = "wantToRead" > Want to Read < /option> < option value = "read" > Already Read < /option> < option value = "none" > None < /option> < /select> < /div> < /div> < div className = "book-title" > {
                book.title
            } < /div> < div className = "book-authors" > {
                book.authors
            } < /div> < /div>
        )
    }
}
