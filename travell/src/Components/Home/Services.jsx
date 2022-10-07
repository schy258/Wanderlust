import React from "react";
import { Link } from "react-router-dom";
import img1 from '../../Images/images/img-1.png'
import img2 from '../../Images/images/img-2.png'
import img3 from '../../Images/images/img-3.png'


export default function Services() {
  return (
    <>
      <div className="services_section layout_padding">
        <div className="container">
          <h1 className="services_taital">Services</h1>
          <p className="services_text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>
          <div className="services_section_2">
            <div className="row">
              <div className="col-md-4">
                <div className="zoom">
                  <img src={img1} className="services_img" />
                </div>
                <div className="btn_main">
                  <Link to="#">Rafting</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="zoom">
                  <img src={img2} className="services_img" />
                </div>
                <div className="btn_main active">
                  <Link to="#">Hiking</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="zoom">
                  <img src={img3} className="services_img" />
                </div>
                <div className="btn_main">
                  <Link to="#">Camping</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
