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
import "./news.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
const images = [
  {
    id: 1,
    url: "http://www.smsstjagadhri.in/images/1.jpeg",
    alt: "imgage1",
    news: "First News",
    newsDescription: "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date:"21/04/2021"
  },
  {
    id: 2,
    url: "http://www.smsstjagadhri.in/images/2.jpeg",
    alt: "imgage2",
    news: "Second News",
    newsDescription: "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date:"21/04/2021"
  },
  {
    id: 3,
    url: "http://www.smsstjagadhri.in/images/3.jpeg",
    alt: "imgage3",
    news: "Third News News",
    newsDescription: "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date:"21/04/2021"
  },{
    id: 4,
    url: "http://www.smsstjagadhri.in/images/3.jpeg",
    alt: "imgage4",
    news: "Fourth News News",
    newsDescription: "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date:"21/04/2021"
  },{
    id: 5,
    url: "http://www.smsstjagadhri.in/images/3.jpeg",
    alt: "imgage4",
    news: "Fourth News News",
    newsDescription: "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date:"21/04/2021"
  },{
    id: 6,
    url: "http://www.smsstjagadhri.in/images/3.jpeg",
    alt: "imgage4",
    news: "Fourth News News",
    newsDescription: "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date:"21/04/2021"
  },{
    id: 7,
    url: "http://www.smsstjagadhri.in/images/3.jpeg",
    alt: "imgage4",
    news: "Fourth News News",
    newsDescription: "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date:"21/04/2021"
  },
];
function News() {
  return (
    
    <div className="news__section">
      <h1 className="header">Recent News</h1>
      <Swiper
        breakpoints={{
          "400": {
            "slidesPerView": 1,
            "spaceBetween": 40
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
     {images.map(image=>
     <SwiperSlide className="myslide" key={image.id}>
       <div className="img_container_news" >
         <img src={image.url} alt="img"   />
       </div>
       <div className="content_container">
     <div className="news_header">
       <div className="title">
       <p>{image.news}</p>
       </div>
       <div className="time">
       <p>{image.date}</p>
       </div>
    </div>
    <div className="description">
      <p>{image.newsDescription}</p>
    </div>
       </div>
     </SwiperSlide>
     )}

    
      </Swiper>
    
    </div>
  );
}

export default News;
