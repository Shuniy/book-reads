import React, { Component } from "react";
import Navbar from "./components/Navbar";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";

class App extends Component {
  state = {
    myBooks: [],
    searchBooks: [],
    error: false,
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

  render() {
    return (
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Sections */}
        <ListBooks books={this.state.myBooks} className="listBooks" />

        {/* Search Books */}
        <SearchBooks />
      </div>
    );
  }
}

export default App;
