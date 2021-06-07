import React from "react";
import {FaQuoteRight,FaQuoteLeft} from "react-icons/fa"

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
// import "swiper/components/scrollbar/scrollbar.scss";
import "./testimonial.css"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const members = [
  {
    id: 1,
    quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus modi corporis consequuntur officia delectus aliquam ad magnam quasi saepe. Ipsam ipsum rerum magnam! Consequuntur blanditiis soluta in nam modi?",
    name:"prakash"
  }, {
    id:2,
    quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus modi corporis consequuntur officia delectus aliquam ad magnam quasi saepe. Ipsam ipsum rerum magnam! Consequuntur blanditiis soluta in nam modi?",
    name:"prakash"
  }, {
    id: 3,
    quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus modi corporis consequuntur officia delectus aliquam ad magnam quasi saepe. Ipsam ipsum rerum magnam! Consequuntur blanditiis soluta in nam modi?",
    name:"prakash"
  }, {
    id:4,
    quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus modi corporis consequuntur officia delectus aliquam ad magnam quasi saepe. Ipsam ipsum rerum magnam! Consequuntur blanditiis soluta in nam modi?",
    name:"prakash"
  }, {
    id: 5,
    quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus modi corporis consequuntur officia delectus aliquam ad magnam quasi saepe. Ipsam ipsum rerum magnam! Consequuntur blanditiis soluta in nam modi?",
    name:"prakash"
  }, {
    id: 6,
    quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus modi corporis consequuntur officia delectus aliquam ad magnam quasi saepe. Ipsam ipsum rerum magnam! Consequuntur blanditiis soluta in nam modi?",
    name:"prakash"
  }, {
    id:7,
    quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus modi corporis consequuntur officia delectus aliquam ad magnam quasi saepe. Ipsam ipsum rerum magnam! Consequuntur blanditiis soluta in nam modi?",
    name:"prakash"
  }, {
    id: 8,
    quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus modi corporis consequuntur officia delectus aliquam ad magnam quasi saepe. Ipsam ipsum rerum magnam! Consequuntur blanditiis soluta in nam modi?",
    name:"prakash"
  }, {
    id: 9,
    quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus modi corporis consequuntur officia delectus aliquam ad magnam quasi saepe. Ipsam ipsum rerum magnam! Consequuntur blanditiis soluta in nam modi?",
    name:"prakash"
  }, {
    id: 10,
    quote:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis temporibus modi corporis consequuntur officia delectus aliquam ad magnam quasi saepe. Ipsam ipsum rerum magnam! Consequuntur blanditiis soluta in nam modi?",
    name:"prakash"
  },
  
];
function Testimonials() {

  return (
    <>
    <div className="testi_section">
      <div className="testi_container">
        <h1>Testimonials</h1>
          <Swiper
       breakpoints={{
        "400": {
          "slidesPerView": 1,
          "spaceBetween": 20
        },
        "600": {
          "slidesPerView": 1,
          "spaceBetween": 20
         
        },
        "800": {
          "slidesPerView": 3,
          "spaceBetween": 30
        },
        "1000": {
          "slidesPerView": 4,
          "spaceBetween": 40
        }
      }}
        // centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
      {members.map(member=>
     <SwiperSlide className="myslide" key={member.id}>
       <div className="quote_container">
        <p><FaQuoteLeft className="quote_icon_left"/>{member.quote}<FaQuoteRight className="quote_icon_right"/></p>
        <p className="quote_name"> &mdash; {member.name}</p>
       </div>
   
     </SwiperSlide>
     )}
       
      </Swiper>
     </div>
     </div>
    </>
  );
}

export default Testimonials;
