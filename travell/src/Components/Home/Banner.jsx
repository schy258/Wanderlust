import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

export default function Banner() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="banner_section layout_padding">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <Carousel
              responsive={responsive}
              infinite={true}
              arrows={false}
              autoPlay
            pauseOnHover={false}
              autoPlaySpeed={3500}
              
            >
              <div className="container text-dark" style={{ width: "800px",float:"left" }}>
                <h1 className="banner_taital ">HIKING</h1>
                <p className="banner_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have sufferedThere are ma
                  available, but the majority have suffered There are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have sufferedThere are ma available, but the majority
                  have sufferedThere are many variations of passages of Lorem
                  Ipsum available, but the majority have sufferedThere are ma
                  available, but the majority have sufferedThere are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have sufferedThere are ma available, but the majority
                  have suffered
                </p>
                <div className="read_bt">
                  <Link to=" ">Get A Quote</Link>
                </div>
              </div>

              <div className="container" style={{ width: "800px",float:"left"  }}>
                <h1 className="banner_taital ">CAMPING</h1>
                <p className="banner_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have sufferedThere are ma
                  available, but the majority have suffered There are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have sufferedThere are ma available, but the majority
                  have sufferedThere are many variations of passages of Lorem
                  Ipsum available, but the majority have sufferedThere are ma
                  available, but the majority have sufferedThere are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have sufferedThere are ma available, but the majority
                  have suffered
                </p>
                <div className="read_bt">
                  <Link to=" ">Get A Quote</Link>
                </div>
              </div>

              <div className="container" style={{ width: "800px",float:"left"  }}>
                <h1 className="banner_taital ">RAFTING</h1>
                <p className="banner_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have sufferedThere are ma
                  available, but the majority have suffered There are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have sufferedThere are ma available, but the majority
                  have sufferedThere are many variations of passages of Lorem
                  Ipsum available, but the majority have sufferedThere are ma
                  available, but the majority have sufferedThere are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have sufferedThere are ma available, but the majority
                  have suffered
                </p>
                <div className="read_bt">
                  <Link to=" ">Get A Quote</Link>
                </div>
              </div>
              <div className="container" style={{ width: "800px",float:"left"  }}>
                <h1 className="banner_taital ">SAFARI</h1>
                <p className="banner_text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have sufferedThere are ma
                  available, but the majority have suffered There are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have sufferedThere are ma available, but the majority
                  have sufferedThere are many variations of passages of Lorem
                  Ipsum available, but the majority have sufferedThere are ma
                  available, but the majority have sufferedThere are many
                  variations of passages of Lorem Ipsum available, but the
                  majority have sufferedThere are ma available, but the majority
                  have suffered
                </p>
                <div className="read_bt">
                  <Link to=" ">Get A Quote</Link>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
