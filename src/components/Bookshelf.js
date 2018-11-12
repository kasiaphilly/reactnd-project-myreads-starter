import React, {
    Component
}
from "react";
import BooksGrid from "./BooksGrid";
import PropTypes from 'prop-types'

export default class Bookshelf extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    state = {
        shelves: [ //array with shelf names
            {
                value: 'currentlyReading',
                name: 'Now Reading'
            }, {
                value: 'wantToRead',
                name: 'Want to Read'
            }, {
                value: 'read',
                name: 'Already Read'
            }
        ]
    }

    render() {
        const {
            books, updateShelf
        } = this.props
        const {
            shelves
        } = this.state

        return ( < div > {
            shelves.map((shelf, idx) => (
                //use shelves state current array index as individual key
                < div key = {
                    idx
                }
                className = "bookshelf" >
                < h2 className = "bookshelf-title" > {
                    shelf.name
                } < /h2> < div className = "bookshelf-books" >
                < BooksGrid
                //filter the books state by matching shelf with current shelves state array
                shelfBooks = {
                    books.filter(book => book.shelf === shelf.value)
                }
                books = {
                    books
                }
                updateShelf = {
                    updateShelf
                }
                /> < /div> < /div>
            ))
        } < /div>)
    }
}
