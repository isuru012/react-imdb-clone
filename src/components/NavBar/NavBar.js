import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" alt="IMDb logo" />
        </Link>
        <ul className="nav-links">
          <li><Link to="/about">Movies</Link></li>
          <li><Link to="/tv-shows">TV Shows</Link></li>
          <li><Link to="/celebs">Celebs</Link></li>
          <li><Link to="/watchlist">Watchlist</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/community">Community</Link></li>
          <li><Link to="/more">More</Link></li>
          <li><Link to="/login">Sign In</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
