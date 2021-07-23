import React from 'react'
import { useParams } from 'react-router-dom'
import './newsdetail.css'
const NewsDetail = () => {
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
          const {id} =useParams()
          const final_id = Number(id) - 1
                  

          return (
                    <div className="newsdetail_container">
                           
                     <div className="imgWrapper">
                              <img src={news[final_id].url} alt="" srcset="" />
                    </div>
                    <div className="newsdetail_content">
                              <h3>{news[final_id].news}</h3>
                              <div className="newsByordate">
                                        <p><span id="by">&mdash;by</span><span id="name">prakash</span></p>
                                        <p id="date">{news[final_id].date}</p>
                              </div>

                              <div className="newsdetail">
                                        <p>{news[final_id].newsDescription}</p>
                              </div> 
                     </div> 
                             
                    </div>
          )
}

export default NewsDetail
