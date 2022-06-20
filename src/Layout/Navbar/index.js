import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="links">
        <span>Gmail</span>
        <span>Images</span>
      </div>
      <img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_apps_48px-512.png" />
      <div className="g-circle">
        <span>D</span>
      </div>
    </div>
  );
};

export default Navbar;
