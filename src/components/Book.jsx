import React from "react";

function Book(props) {
  return (
    <div
      className="book"
      style={{
        backgroundImage: `url(${
          props.book.imageLinks
            ? props.book.imageLinks.thumbnail
            : "../icons/book-placeholder.svg"
        })`,
      }}
    >
      {props.book.shelf}
      {props.book.id}
      {console.log(props.book)}
    </div>
  );
}

export default Book;
