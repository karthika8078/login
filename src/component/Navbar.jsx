import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Open Library Logo" className="logo" />
        <span className="brand-name">Library</span>
      </div>
      <div className="navbar-center">
        <a href="#mybooks" className="nav-link">My Books</a>
        <div className="dropdown">
          <button className="dropdown-btn">Browse ▼</button>
          <div className="dropdown-content">
            <a href="#all">All</a>
            <a href="#fiction">Fiction</a>
            <a href="#nonfiction">Non-fiction</a>
          </div>
        </div>
        <div className="search-container">
          <select className="search-category">
            <option value="all">All</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="navbar-right">
        <Link to="/login" className="login-btn">Log In</Link>
        <Link to="/signup" className="signup-btn">Sign UP</Link>
        <div className="menu-icon">
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
