import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    myBooks: [],
    searchBooks: [],
    error: false,
    searchValue:''
  };

  // Loading Books as the Component Mounting
  componentDidMount = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ myBooks: books });
        // console.log(books);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: true });
      });
  };

  setSearchValue = (value) => {
    this.setState({searchValue : value})
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((err) => {
      console.log(err);
      this.setState({ error: true });
    });
    if (shelf === "none") {
      this.setState((prevState) => ({
        myBooks: prevState.myBooks.filter((b) => b.id !== book.id),
      }));
    } else {
      book.shelf = shelf;
      this.setState((prevState) => ({
        myBooks: prevState.myBooks.filter((b) => b.id !== book.id).concat(book),
      }));
    }
  };

  searchForBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  };

  resetSearch = () => {
    this.setState({ searchBooks: [], searchValue : '' });
  };

  render() {
    if (this.state.error) {
      return <div>No Books Found, Sorry!</div>;
    }
    return (
      <div className="App">
        <ListBooks moveBook={this.moveBook} books={this.state.myBooks} setSearchValue = {this.setSearchValue}
              searchValue = {this.state.searchValue} />
        <Route
          exact
          path="/"
          render={() => {
            <ListBooks moveBook={this.moveBook} books={this.state.myBooks} setSearchValue = {this.setSearchValue}
              searchValue = {this.state.searchValue} />;
          }}
        />

        <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchBooks={this.state.searchBooks}
              myBooks={this.state.myBooks}
              onSearch={this.searchForBooks}
              moveBook={this.moveBook}
              resetSearch={this.resetSearch}
              setSearchValue = {this.setSearchValue}
              searchValue = {this.state.searchValue}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
