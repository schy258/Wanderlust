import React from "react";
import { Link } from "react-router-dom";

export default function Copyrightsec() {
  return (
    <>
      <div className="copyright_section">
        <div className="container">
          <p className="copyright_text">
            made with &#10084;&#65039; by
            <Link to="https://html.design">
              <b className="text-danger"> Sourabh choudhary</b>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
