import React from "react";
import { Link } from "react-router-dom";
import About from "../Home/About";
import Services from "../Home/Services";

export default function Extra_Header() {
  return (
    <>
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label for="menu-icon"></label>
      <nav className="nav">
        <ul className="pt-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <li>
            <Link to="#">Blogs</Link>
          </li>
          <li>
            <Link to="#">+91-8826080881</Link>
          </li>
        </ul>
      </nav>
      <div className="p-5">
        <About />
        <Services />
      </div>
    </>
  );
}
