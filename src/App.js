import React, {
    Component
}
from "react"
import * as BooksAPI from "./BooksAPI"
import {
    Link, Route
}
from "react-router-dom"
import Search from "./components/Search"
import Bookshelf from "./components/Bookshelf"
import "./App.css"

export default class BooksApp extends React.Component {
    state = {
        books: []
    }

    //fetching books from BooksAPI & updating the state
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books
            })
        })
    }

    //updating BooksAPI after choosing from dropdown list
    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(book => {
            BooksAPI.getAll().then(books => {
                this.setState({
                    books
                })
            })
        })
    }

    render() {
        return ( < div className = "app" >
            < Route path = "/search"
            render = {
                ({
                    history
                }) => ( < Search books = {
                        this.state.books
                    }
                    updateShelf = {
                        this.updateShelf
                    }
                    />
                )
            }
            /> < Route exact path = "/"
            render = {
                () => ( < div className = "list-books" >
                    < div className = "list-books-title" >
                    < h1 > MyReads < /h1> < /div> < div className = "list-books-content" >
                    < Bookshelf books = {
                        this.state.books
                    }
                    updateShelf = {
                        this.updateShelf
                    }
                    /> < /div> < div className = "open-search" >
                    < Link to = "/search" >
                    Add a book < /Link> < /div> < /div>
                )
            }
            /> < /div>
        )
    }
}
