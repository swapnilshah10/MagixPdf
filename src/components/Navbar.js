import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  let style = {
    fontSize: 25,
    fontFamily: "Marck Script",
  };
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar  h-25" style={style}>
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            <img
              src="https://yt3.ggpht.com/rrwxxtM8YyD5ELzopuvnotTJH8bRF2dBzTEIyroMB9tmkTInTSRlctxhlH6snQVYYfywWPd_aT4=s176-c-k-c0x00ffffff-no-rj"
              className="d-inline-block align-top"
              alt=""
              width="40"
              height="40"
              style={{ borderRadius: 60 }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  MagixPdf
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/merge">
                  Merge
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/compress">
                  Compress
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Social Medias
                </a>
                <ul
                  className="dropdown-menu  bg-dark text-white"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a
                      className="dropdown-item bg-dark text-white "
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/ig_silentkiller_op/"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item  bg-dark text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/@silentkillerop"
                    >
                      YouTube
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item  bg-dark text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://twitter.com/silentkillerop2"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item  bg-dark text-white" href="/">
                      Nothing else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
