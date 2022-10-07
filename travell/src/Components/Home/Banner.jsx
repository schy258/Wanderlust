import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <div className="banner_section layout_padding">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <Swiper autoplay={true}>
              <SwiperSlide>
                <div className="container">
                  <h1 className="banner_taital">Adventure</h1>
                  <p className="banner_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have sufferedThere are ma
                    available, but the majority have suffered
                  </p>
                  <div className="read_bt">
                    <Link to=" ">Get A Quote</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container">
                  <h1 className="banner_taital">horror</h1>
                  <p className="banner_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have sufferedThere are ma
                    available, but the majority have suffered
                  </p>
                  <div className="read_bt">
                    <Link to=" ">Get A Quote</Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="container">
                  <h1 className="banner_taital">trekking</h1>
                  <p className="banner_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have sufferedThere are ma
                    available, but the majority have suffered
                  </p>
                  <div className="read_bt">
                    <Link to=" ">Get A Quote</Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
