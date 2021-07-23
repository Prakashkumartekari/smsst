import React from "react";
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
import "swiper/components/scrollbar/scrollbar.scss";
import "./member.css";
import image from "../../assets/images/prakash.jpeg"


const members = [
  { id: 1, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 2, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 3, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 4, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 5, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 6, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 7, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 8, name: "prakash", image, post: "member", home: "jagadhri" },
];
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Member() {
  return (
    
    <div className="memberSlider__section">
      <h1 className="header">Our Member's</h1>
      <Swiper
      breakpoints={{
        "400": {
          "slidesPerView": 1,
          "spaceBetween": 20
        },
        "600": {
          "slidesPerView": 2,
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
     <SwiperSlide key={member.id}>
        <div className="memberSlider_card" key={member.id}>
          <div className="imgcontainerSlider">
            <img src={member.image} alt="memimage"  className="imgSlider"/>
          </div>

          <div className="contentSlider">
            
              <h3>{member.post}</h3> 
              <p className="id"><span>Id </span><span id="id">{member.id}</span></p>
             <hr />
             <div className="personal_info">
            
             <div className="single_line">
               <p>Name:</p>
               <p className="name">Prakash Kumar</p>
             </div> <div className="single_line">
               <p>Parent's:</p>
               <p>Ramesh Rawat</p>
             </div>
              <div className="single_line">
               <p>D.O.B:</p>
               <p>16-01-1997</p>
             </div> 
             <hr style={{marginTop:"5px"}}/>
             <div className="address_info">
              
             <div className="single_line">
               <p>Village/City:</p>
               <p>Jagadhri</p>
             </div>
              <div className="single_line">
               <p>Dist:</p>
               <p>Yamuna Nagar</p>
             </div> <div className="single_line">
               <p>State:</p>
               <p>Haryana</p>
             </div>

          
             </div>
            
            </div>
          </div>
        </div>
  
     </SwiperSlide>
     )}   
      </Swiper>
    
    </div>
  );
}

export default Member;
