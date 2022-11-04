import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jammu from "../../Images/images/jammu.png";
import bengal from "../../Images/images/bengal.png";
import bihar from "../../Images/images/bihar.png";
import delhi from "../../Images/images/delhi.png";
import goa from "../../Images/images/goa.png";
import gujrat from "../../Images/images/gujrat.png";
import haryana from "../../Images/images/haryana.png";
import himachal from "../../Images/images/himachal.png";
import karnataka from "../../Images/images/karnataka.png";
import kerala from "../../Images/images/kerala.png";



export default function VisitedPlaces() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div class="client_section layout_padding">
        <div class="container">
          <h1 class="client_taital">States Covered</h1>
          <div class="client_section_2">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <Carousel
                responsive={responsive}
                arrows={false}
                showDots={false}
                autoPlay
                pauseOnHover={false}
                infinite
                autoPlaySpeed={1800}
              >
                {/* <div class="carousel-item ">
                  <div class="client_main">
                    <div class="box_left">
                      <p class="lorem_text">three</p>
                    </div>
                    <div class="box_right">
                      <div class="client_taital_left">
                        <div class="client_img">
                          <img src={img1} />
                        </div>
                        <div class="quick_icon">
                          <img src={img2} />
                        </div>
                      </div>
                      <div class="client_taital_right">
                        <h4 class="client_name">Dame</h4>
                        <p class="customer_text">Customer</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item ">
                  <div class="client_main">
                    <div class="box_left">
                      <p class="lorem_text">first</p>
                    </div>
                    <div class="box_right">
                      <div class="client_taital_left">
                        <div class="client_img">
                          <img src={img1} />
                        </div>
                        <div class="quick_icon">
                          <img src={img2} />
                        </div>
                      </div>
                      <div class="client_taital_right">
                        <h4 class="client_name">Dame</h4>
                        <p class="customer_text">Customer</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item ">
                  <div class="client_main">
                    <div class="box_left">
                      <p class="lorem_text">second</p>
                    </div>
                    <div class="box_right">
                      <div class="client_taital_left">
                        <div class="client_img">
                          <img src={img1} />
                        </div>
                        <div class="quick_icon">
                          <img src={img2} />
                        </div>
                      </div>
                      <div class="client_taital_right">
                        <h4 class="client_name">Dame</h4>
                        <p class="customer_text">Customer</p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={jammu}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div>West-Bengal</div>
                  <div>
                    <img
                      src={bengal}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={delhi}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div><div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={goa}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div><div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={gujrat}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div><div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={haryana}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div><div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={himachal}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div><div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={jammu}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div><div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={jammu}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div><div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={jammu}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div><div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={jammu}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div><div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={jammu}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div><div>
                  <div>Jammu</div>
                  <div>
                    <img
                      src={jammu}
                      style={{ width: "200px", height: "200px" }}
                      alt=""
                    />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
