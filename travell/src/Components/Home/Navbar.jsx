import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="header_main">
        <div className="mobile_menu">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="logo_mobile">
              <Link to="index.html">
                {/* <img src="images/logo.png" /> */}
                {/* <h3>hello sourabh</h3> */}
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="index.html">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about.html">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="services.html">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="blog.html">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="contact.html">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="container-fluid">
          <div className="logo">
            <Link to="index.html">
              {/* <img src="images/logo.png" /> */}
              <h2 className="text-danger">hello sourabh</h2>
            </Link>
          </div>
          <div className="menu_main">
            <ul>
              <li className="active">
                <Link to="index.html">Home</Link>
              </li>
              <li>
                <Link to="about.html">About</Link>
              </li>
              <li>
                <Link to="services.html">Services</Link>
              </li>
              <li>
                <Link to="blog.html">Blog</Link>
              </li>
              <li>
                <Link to="contact.html">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
