import React, { useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./carousel.css";
import $ from "jquery"
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

function Carousel() {
  useEffect(() => {
   
     
    
  }, [])
   return (<>
      <div className="carousel">
        <Swiper
         
          spaceBetween={30}
          centeredSlides={true}
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
          <SwiperSlide><img src="http://www.smsstjagadhri.in/images/1.jpeg" alt="image1" /></SwiperSlide>
          <SwiperSlide><img src="http://www.smsstjagadhri.in/images/2.jpeg" alt="image2" /></SwiperSlide>
          <SwiperSlide><img src="http://www.smsstjagadhri.in/images/3.jpeg" alt="image3" /></SwiperSlide>
          
        </Swiper>
        </div>
 
 </>
  );
}

export default Carousel;
// http://www.smsstjagadhri.in/images/3.jpeg
// http://www.smsstjagadhri.in/images/3.jpeg
