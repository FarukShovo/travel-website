import React from "react";
import "./Header.css";
import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, handleLogout } = useFirebase();
  return (
    <header>
      <div id="menu-bar" className="fas fa-bars">
        <FaBars></FaBars>
      </div>

      <Link to="/" className="logo">
        <span>T</span>ravelogue
      </Link>

      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/placeOrder">PlaceOrder</Link>
        <Link to="/manageServices">Manage Services</Link>
        <Link to="/addService">Add Service</Link>

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
