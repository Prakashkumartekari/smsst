import React, { useState } from "react";
import "./addnews.css";
import { FaCamera } from "react-icons/fa";
import { db, storage } from "../../../../firebase/config";
const Addnews = () => {
       const dt = new Date()
        const [progress, setProgress] = useState(null)
        const [news_heading, setNews_heading] = useState('')
        const [news, setNews] = useState('')
        const [url, setUrl] = useState('')
        const publish= async (e)=>{ 
              await db.collection('news').add({
                addedDate:`${dt.getDate()}-${dt.getMonth()}-${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}`,
                 news_heading,
                 news,
                 url
               })
              setNews('')
              setNews_heading('')
        }
        const handleupload = (data)=>{
          const uploadTask = storage.ref(`news/${data.file.name}`).put(data.file);
          uploadTask.on(
            "state_changed",
            snapshot => {
              const percentage = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
              setProgress(percentage)
            },
            error=>{
              console.log(error)
            },
            () =>{
              storage.ref("news").child(data.file.name).getDownloadURL().then(url=>{
                setUrl(url)
                setProgress(null)
              })
            }
          )
        }
       
      
    
         
      
  return (
    <>
      <div className="addnews_section">
        <div className="addnews_container">
          <h1>Publish News</h1>

          <div className="newsbackbox">
          <div className="addnews_heading">
            <label htmlFor="addnews_heading">News Heading</label>
            <input
              type="text"
              id="addnews_heading"
              name="addnews_heading"
              placeholder="News Heading"
              value={news_heading}
              onChange={(e) =>setNews_heading(e.target.value)}
            />
          </div>
          </div>

          <div className="newsbackbox">
        <div className="addnews">
        <label htmlFor="textarea">News</label>
        <textarea 
        name="textarea" 
        id="textarea" 
        placeholder="Write News" 
        cols="30" rows="10"
        value={news}
        onChange={(e)=>{setNews(e.target.value)}}
        ></textarea>
        </div>
        </div>
      
          <div className="newsbackbox">
          <div className="addnews_image_container">
            <div className="addnews_image">
              <h4>Image</h4>
          {progress &&
           <div className="progressbar" style={{width:progress+"%"}}></div>}
           {url !== '' &&
              <div className="uploaded_image_container">
                      <img src={url} alt="img1" />
              </div>
              }

              <div className="news_icon_container">
                <label htmlFor="first_image">
                  <FaCamera />
                  <h5>upload</h5>
                </label>
                <input type="file" name="first_image" id="first_image"  onChange={(e)=>{
                  const data ={index:"first",file:e.target.files[0]}
                  handleupload(data) }} />
              </div>
            </div>
            </div>
          </div>
          
           <div className="btn_container">
            <button type="submit" className="btn" onClick={(e)=>{publish(e)}}>
              Publish
            </button>
          </div>
        </div>
        </div>
     
     
    </>
  );
};

export default Addnews;
