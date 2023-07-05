import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="left-col">
          <img
            src="/pdf.png"
            alt=""
            className="logo"
          />
          <p className="rights-text">
            © 2022 Created By <b>SilentkillerOP</b> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
