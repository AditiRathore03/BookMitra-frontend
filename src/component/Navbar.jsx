import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">
          <Link to="/">BookMitra</Link>
        </h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/">contact</Link></li>
          <li><Link to="/">Help</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
