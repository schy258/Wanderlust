import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../Images/images/play-icon.png";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";

export default function Video() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="blog_section layout_padding">
        <div className="container">
          <h1 className="blog_taital neon">See MY Video</h1>
          <p className="blog_text">
            many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour,
            or randomised words which
          </p>
          <div className="play_icon_main">
            <div className="play_icon">
              <Link to="#" onClick={handleShow}>
                <img src={img} />
              </Link>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <ReactPlayer url="https://www.instagram.com/reel/CkTSVLMje7J/?utm_source=ig_web_copy_link" />
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
