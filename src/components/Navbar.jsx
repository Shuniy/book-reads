import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <h1 className="title-logo">Book Reads</h1>

          <ul>
            <li>
              <a href="#">Reading</a>
            </li>
            <li>
              <a href="#">Wanted</a>
            </li>
            <li>
              <a href="#">Read</a>
            </li>
          </ul>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="...search"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
