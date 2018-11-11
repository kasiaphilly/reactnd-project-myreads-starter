import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Switch, Route} from "react-router-dom"
import SearchPage from './components/SearchPage'
import Homepage from './components/Homepage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

//fetching books from BooksAPI & updating the state
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

//updating BooksAPI after choosing from dropdown list
updateShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then(book => {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  })
}


  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path={"/"} component={Homepage}/>
        <Route exact path={"/search"} component={SearchPage}/>
      </Switch>
      </div>
    )
  }
}

export default BooksApp
