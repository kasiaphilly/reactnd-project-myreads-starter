import React, {Component} from "react";
import Bookshelf from './Bookshelf'
import Search from './Search'
import {getAll} from "../BooksAPI"

export default class Homepage extends Component {
  render(){
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf title="Reading Now" books={this.props.currentlyReading}/>
          <Bookshelf title="Want To Read" books={this.props.wantToRead}/>
          <Bookshelf title="Already Read" books={this.props.read}/>
        </div>
        <Search/>
      </div>
    )
  }
}
