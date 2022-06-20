import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="above-footer">
        <span>Libya</span>
      </div>
      <div className="below-footer">
        <div className="left">
          <span>About</span>
          <span>Advertising</span>
          <span>Business</span>
          <span>How Search works</span>
        </div>
        <div className="right">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
