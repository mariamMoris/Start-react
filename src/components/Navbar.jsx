import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [pathName, setPathName] = useState(window.location.pathname);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-4">
        <div className="container">
          <a
            href="#"
            className="navbar-brand uppercase display-6 fw-bold text-decoration-none text-white"
          >
            Start react
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathName("/home");
                  }}
                  className={
                    pathName == "/home"
                      ? "active nav-link rounded-3 me-3 fs-3"
                      : "hover nav-link me-3 fs-3 text-white"
                  }
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathName("/portfolio");
                  }}
                  className={
                    pathName == "/portfolio"
                      ? "active nav-link  rounded-3 me-3 fs-3 "
                      : "hover nav-link me-3 fs-3 text-white"
                  }
                  to="/portfolio"
                >
                  Portofolio
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathName("/about");
                  }}
                  className={
                    pathName == "/about"
                      ? "active nav-link rounded-3 me-3 fs-3 "
                      : "hover nav-link me-3 fs-3 text-white"
                  }
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => {
                    setPathName("/Contact");
                  }}
                  className={
                    pathName == "/Contact"
                      ? "active nav-link rounded-3 me-3 fs-3 "
                      : "hover nav-link me-3 fs-3 text-white"
                  }
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
