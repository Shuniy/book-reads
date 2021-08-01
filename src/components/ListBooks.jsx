import React from "react";
import Book from "./Book";
import { v4 as uuidv4 } from "uuid";

function ListBooks(props) {
  return (
    <div>
      {/* Currently Reading Section */}
      <section className="currently-reading">
        <div className="container">
          <div className="section-title">
            <h1>Currently Reading</h1>
          </div>
          <div className="container books">
            {props.books
              .filter((book, index) => {
                return book.shelf === "currentlyReading";
              })
              .map((book, index) => {
                return <Book key={uuidv4()} id={uuidv4()} book={book} />;
              })}
          </div>
        </div>
      </section>
      {/* Want to read Section */}
      <section className="want-to-read">
        <div className="container">
          <div className="section-title">
            <h1>Want to Read</h1>
          </div>
          <div className="container books">
            {props.books
              .filter((book) => {
                return book.shelf === "wantToRead";
              })
              .map((book) => {
                return <Book key={uuidv4()} id={uuidv4()} book={book} />;
              })}
          </div>
        </div>
      </section>
      {/* Already Read Books */}
      <section className="read">
        <div className="container">
          <div className="section-title">
            <h1>Read</h1>
          </div>
          <div className="container books">
            {props.books
              .filter((book) => {
                return book.shelf === "read";
              })
              .map((book) => {
                return <Book key={uuidv4()} id={uuidv4()} book={book} />;
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListBooks;
