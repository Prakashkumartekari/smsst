import React, { useEffect, useState } from "react";
// import image from "../../assets/images/prakash.jpeg";
import "./allnews.css";
import {Link} from 'react-router-dom'
import { db } from "../../firebase/config";
import Alert from "../Modal/Alert";
function Allnews() {
  const [news, setNews] = useState(null)
  useEffect(() => {
    db.collection('news').get().then(snapshot=>{
      const docarray =[]
      snapshot.docs.map(doc=>docarray.push(doc))
      setNews(docarray)
    })
  
  }, [])
   console.log(news)
  //  news.map(doc=>console.log(doc.data()))

  return (
    <>
 
     {news?(
      <div className="news_wrapper ">
        <div className="news_container">
          {news.map((single_news) => (
            <div className="news_card" key={single_news.id}>
              <div className="img_container">
                 <img src={single_news.data().url} alt="memimage" /> 
              </div>
              <div className="content">
                  <h3>{single_news.data().news_heading}</h3>
                  <div className="byOrdate">
                   <p><span id="by">&mdash;by</span><span id="writer">Prakash Kumar</span></p>
                  <p className="time">{single_news.data().addedDate.substr(0,9)}</p>
                  </div>
                  <div className="main_news">
                  <p>{
                  single_news.data().news.substr(0,220)
                  }<span ><Link exact to={`/newsdetail/${single_news.id}`} className="morenews">See More....</Link></span></p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        ):(
          <div className="loader_container">
          <div className="loader_wrap">
          <div className="loader"></div>
          <div>
            <h3>Loading Members.Please Wait...</h3>
          </div>
          </div>
        </div>
          )} 
    </>
  );
}

export default Allnews;
