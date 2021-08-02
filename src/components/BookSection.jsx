import React from 'react';
import { v4 as uuidv4 } from "uuid";
import Book from "./Book";

const BookSection = (props) => {
  const booksOnThisShelf = props.books.filter(book => book.shelf === props.bookShelf.shelf);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-name">{props.bookShelf.name}</h2>
      <div className="bookshelf-books">
        <ul className="books-grid">
          {booksOnThisShelf.map(book => (
            <Book key={uuidv4()} book={book} shelf={props.bookShelf.shelf} moveBook={props.moveBook} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookSection;