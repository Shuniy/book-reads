import React from "react";
import BookShelfChanger from "./BookShelfChanger";

function Book(props) {
  const coverImage = `url(${
    props.book.imageLinks
      ? props.book.imageLinks.thumbnail
      : "../icons/book-placeholder.svg"
  })`;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              backgroundImage: coverImage,
            }}
          />
          <BookShelfChanger
            book={props.book}
            shelf={props.shelf}
            moveBook={props.moveBook}
          />
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">
          {props.book.authors
            ? props.book.authors.join(", ")
            : "Unknown Author"}
        </div>
      </div>
    </li>
  );
}

export default Book;
