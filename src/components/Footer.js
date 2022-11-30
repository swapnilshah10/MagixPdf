import React from "react";
import './Footer.css'  ;

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="left-col">
            <img src="https://yt3.ggpht.com/rrwxxtM8YyD5ELzopuvnotTJH8bRF2dBzTEIyroMB9tmkTInTSRlctxhlH6snQVYYfywWPd_aT4=s88-c-k-c0x00ffffff-no-rj" alt="" className="logo" style={{height : 50 ,width:50 , borderRadius: 30}} />

            <div className="social-media">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p className="rights-text">
              © 2021 Created By <b>SilentkillerOP</b> All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
