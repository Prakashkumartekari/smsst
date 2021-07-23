import React from "react";
// import image from "../../assets/images/prakash.jpeg";
import "./allnews.css";
import {Link} from 'react-router-dom'
const news = [
  {
    id: 1,
    url: "http://www.smsstjagadhri.in/images/1.jpeg",
    alt: "imgage1",
    news: "First News",
    newsDescription:
      "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date: "21/04/2021",
  },
  {
    id: 2,
    url: "http://www.smsstjagadhri.in/images/2.jpeg",
    alt: "imgage2",
    news: "Second News",
    newsDescription:
      "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date: "21/04/2021",
  },
  {
    id: 3,
    url: "http://www.smsstjagadhri.in/images/3.jpeg",
    alt: "imgage3",
    news: "Third News News",
    newsDescription:
      "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date: "21/04/2021",
  },
  {
    id: 4,
    url: "http://www.smsstjagadhri.in/images/3.jpeg",
    alt: "imgage4",
    news: "Fourth News News",
    newsDescription:
      "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date: "21/04/2021",
  },
  {
    id: 5,
    url: "http://www.smsstjagadhri.in/images/3.jpeg",
    alt: "imgage4",
    news: "Fourth News News",
    newsDescription:
      "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date: "21/04/2021",
  },
  {
    id: 6,
    url: "http://www.smsstjagadhri.in/images/3.jpeg",
    alt: "imgage4",
    news: "Fourth News News",
    newsDescription:
      "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date: "21/04/2021",
  },
  {
    id: 7,
    url: "http://www.smsstjagadhri.in/images/3.jpeg",
    alt: "imgage4",
    news: "Fourth News News",
    newsDescription:
      "hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar hlo this is news from Prkash kumar",
    date: "21/04/2021",
  },
];
function Allnews() {
 
  return (
    <>
      <div className="news_wrapper ">
        <div className="news_container">
          {news.map((single_news) => (
            <div className="news_card" key={single_news.id}>
              <div className="img_container">
                <img src={single_news.url} alt="memimage" />
              </div>
              <div className="content">
                  <h3>{single_news.news}</h3>
                  <div className="byOrdate">
                   <p><span id="by">&mdash;by</span><span id="writer">Prakash Kumar</span></p>
                  <p className="time">{single_news.date}</p>
                  </div>
                  <div className="main_news">
                  <p>{single_news.newsDescription}<span ><Link exact to={`/newsdetail/${single_news.id}`} className="morenews">See More....</Link></span></p>
                  </div>
             
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Allnews;
