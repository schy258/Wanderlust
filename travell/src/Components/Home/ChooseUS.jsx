import React from "react";
import { Link } from "react-router-dom";

export default function ChooseUS() {
  return (
    <>
      <div className="choose_section layout_padding">
        <div className="container">
          <h1 className="choose_taital">Why Choose Us</h1>
          <p className="choose_text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <div className="read_bt_1">
            <Link to="#">Read More</Link>
          </div>
          <div className="newsletter_box">
            <h1 className="let_text">Let Start Talk with Us</h1>
            <div className="getquote_bt">
              <button className="btn btn-outline-danger text-dark">Get A Quote</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
