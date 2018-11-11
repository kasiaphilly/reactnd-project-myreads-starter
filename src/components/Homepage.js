import React, {Component} from "react";
import Bookshelf from './Bookshelf'
import Search from './Search'

export default class Homepage extends Component {
  render(){
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf/>
        </div>
        <Search/>
      </div>
    )
  }
}
