import React from "react";
import { Link } from "react-router-dom";

export default function FooterPart() {
  return (
    <>
      <div className="footer_section layout_padding">
        <div className="container">
          <div className="input_btn_main">
            <input
              type="text"
              className="mail_text"
              placeholder="Enter your email"
              name="Enter your email"
            />
            <div className="subscribe_bt">
              <Link to="#">Subscribe</Link>
            </div>
          </div>
          <div className="location_main">
            <div className="call_text">
              <img src="images/call-icon.png" />
            </div>
            <div className="call_text">
              <Link to="#">Call +01 1234567890</Link>
            </div>
            <div className="call_text">
              <img src="images/mail-icon.png" />
            </div>
            <div className="call_text">
              <Link to="#">demo@gmail.com</Link>
            </div>
          </div>
          <div className="social_icon">
            <ul>
              <li>
                <Link to="#">
                  <img src="images/fb-icon.png" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="images/twitter-icon.png" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="images/linkedin-icon.png" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="images/instagram-icon.png" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
