import React from "react";
import { Link } from "react-router-dom";
import img from "../../Images/images/about_img.JPG";

export default function About() {
  return (
    <>
      <div className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="about_taital_main">
                <h1 className="about_taital">About Me</h1>
                <p className="about_text">
                  I wanted to live deep and suck out the marrow of life.". I
                  want to experience all that life has to offer. I want to live
                  for the people whose lives got cut too short and those who are
                  confined to a hospital bed. I want to be wanderlust in life,
                  and love. The word wanderlust is not just a pretty word that
                  rolls off the tongue. Wanderlust is my life
                </p>
                <div className="readmore_bt">
                  <Link to="#">Read More</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 padding_right_0">
              <div>
                <img
                  src={img}
                  className="about_img"
                  style={{ borderRadius: "1rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
