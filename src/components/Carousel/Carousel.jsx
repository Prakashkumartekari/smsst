import React, { useEffect } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "./carousel.css";
import image1 from "../../assets/images/1.jpeg"
import image2 from "../../assets/images/2.jpeg"
import image3 from "../../assets/images/3.jpeg"

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
            "type": "progressbar"
          }}
          navigation={true}
          className="mySwiper"
          
        >
          <SwiperSlide><img src={image1} alt="image1" /></SwiperSlide>
          <SwiperSlide><img src={image2} alt="image2" /></SwiperSlide>
          <SwiperSlide><img src={image3} alt="image3" /></SwiperSlide>
          
        </Swiper>
        </div>
 
 </>
  );
}

export default Carousel;
// http://www.smsstjagadhri.in/images/3.jpeg
// http://www.smsstjagadhri.in/images/3.jpeg
