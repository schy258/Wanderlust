import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from '../../Images/images/client-img.png'
import img2 from '../../Images/images/quick-icon.png'





export default function VisitedPlaces() {
  return (
    <>

           
<div class="client_section layout_padding">
<div class="container">
  <h1 class="client_taital">Testimonial</h1>
  <div class="client_section_2">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
            <Swiper autoplay={true}>
              <SwiperSlide>
              <div class="carousel-item ">
          <div class="client_main">
            <div class="box_left">
              <p class="lorem_text">
               three
              </p>
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
              </SwiperSlide>
              <SwiperSlide>
              <div class="carousel-item ">
          <div class="client_main">
            <div class="box_left">
              <p class="lorem_text">
               first
              </p>
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
              </SwiperSlide>
              <SwiperSlide>
              <div class="carousel-item ">
          <div class="client_main">
            <div class="box_left">
              <p class="lorem_text">
              second
              </p>
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
              </SwiperSlide>
            </Swiper>
            </div>
    </div>
  </div>
</div>

    </>
  );
}

