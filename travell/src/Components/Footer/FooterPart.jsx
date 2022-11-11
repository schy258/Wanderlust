import React from "react";
import { Link } from "react-router-dom";
import insta from '../../Images/images/instagram-icon.png'
import mail from '../../Images/images/mail-icon.png'



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
              <Link to="#">Join Us</Link>
            </div>
          </div>
          <div className="location_main">
            {/* <div className="call_text">
              <img src={call} />
            </div>
            <div className="call_text">
              <Link to="#">Call +91-8826 080 881</Link>
            </div> */}
            <div className="call_text">
              <img src={insta} />
            </div>
            <div className="call_text">
              <Link to="#">small_travelling_bag</Link>
            </div>
            <div className="call_text">
              <img src={mail} />
            </div>
            <div className="call_text">
              <Link to="#">query.smalltravellingbag@gmail.com</Link>
            </div>
            
          </div>
          {/* <div className="social_icon">
            <ul>
              <li>
                <Link to="#">
                  <img src="images/fb-icon.png" />
                </Link>
              </li>
              <li>
                <Link to="#" >
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
          </div> */}
        </div>
      </div>
    </>
  );
}
