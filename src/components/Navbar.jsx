import React from "react";
import { Link, Redirect } from "react-router-dom";

const Navbar = (props) => {

  function handleChange(event){
    const value = event.target.value
    props.setSearchValue(value)

  }

  function handleSubmit(event){
    event.preventDefault();
    <Redirect to='/search' />
  }

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <h1 className="title-logo">Book Reads</h1>

          <ul>
            <li>
              <Link to="/">Reading</Link>
              {/* <Link to="#currentlyReading">Reading</Link> */}
            </li>
            <li>
              <Link to="/">Wanted</Link>
              {/* <Link to="wantToRead">Wanted</Link> */}
            </li>
            <li>
              <Link to="/">Read</Link>
              {/* <Link to="read">Read</Link> */}
            </li>
          </ul>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="search"
              name="search"
              id="search"
              value={props.searchValue}
              onChange={handleChange}
              placeholder="Search..."
            />
            <button type="submit" onClick={handleSubmit}>
              <Link to="/search"></Link>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
