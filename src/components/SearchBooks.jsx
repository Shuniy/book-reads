import React from "react";
import SearchBooksInput from "./SearchBooksInput";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";

function SearchBooks(props) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search" onClick={props.resetSearch}></button>
        </Link>
        <SearchBooksInput
          onSearch={props.onSearch}
          searchValue={props.searchValue}
          setSearchValue={props.setSearchValue}
        />
      </div>
      <SearchResults
        searchBooks={props.searchBooks}
        myBooks={props.myBooks}
        moveBook={props.moveBook}
      />
    </div>
  );
}

export default SearchBooks;
