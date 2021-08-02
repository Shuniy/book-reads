import React, { useState } from "react";

const BookShelfChanger = (props) => {
  
  const [value, setValue] = useState(props.shelf)

  function handleChange(event){
    const value = event.target.value
    setValue({value})
    props.moveBook(props.book, value)

  }
  
  return (
    <div className="book-shelf-changer">
        <select value={value} onChange={handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">Delete</option>
        </select>
      </div>
  )
}

export default BookShelfChanger