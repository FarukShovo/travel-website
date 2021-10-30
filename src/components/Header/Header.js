import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, handleLogout } = useFirebase();
  return (
    <header>
      <div id="menu-bar" className="fas fa-bars"></div>

      <Link to="/" className="logo">
        <span>T</span>ravel
      </Link>

      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/review">Review</Link>

        {user.email ? (
          <button onClick={handleLogout} className="btn btn-primary">
            Log out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <p style={{ color: "white" }}>{user.displayName}</p>
      </nav>
    </header>
  );
};

export default Header;
