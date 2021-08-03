import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import BookSection from "./BookSection";

const bookShelves = [
  { shelf: "currentlyReading", name: "Currently Reading" },
  { shelf: "wantToRead", name: "Want To Read" },
  { shelf: "read", name: "Read" },
];

function ListBooks(props) {
  return (
    <div className="books">
      <Navbar
        setSearchValue={props.setSearchValue}
        searchValue={props.searchValue}
      />
      <div className="books-content">
        <div>
          {bookShelves.map((shelf, index) => (
            <BookSection
              key={index}
              bookShelf={shelf}
              books={props.books}
              moveBook={props.moveBook}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="search">
          <button>Add a Book</button>
        </Link>
      </div>
    </div>
  );
}

export default ListBooks;
