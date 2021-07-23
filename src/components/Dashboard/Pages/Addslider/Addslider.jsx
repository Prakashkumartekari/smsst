import React, { useState } from 'react'
import { db, storage } from '../../../../firebase/config'
import {FaCamera} from "react-icons/fa"
import "./addslider.css"
const Addslider = () => {
     const [progress, setProgress] = useState([{
       progress1:null,
       progress2:null,
       progress3:null
     }])
    const [url1, setUrl1] = useState('')
    const [url2, setUrl2] = useState('')
    const [url3, setUrl3] = useState('')
   
      const publish=(e)=>{
              e.preventDefault()
              db.collection('slider').add({
                url1,
                url2,
                url3,
              })
              setProgress({url1:'',
            url2:'',
            url3:''})
            setUrl1('')
            setUrl2('')
            setUrl3('')

      }
      const handleupload = (data)=>{
        const uploadTask = storage.ref(`news/${data.image.name}`).put(data.image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            const time = snapshot.metadata.timeCreated
            console.log(time)
            const percentage = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
            if(data.first === "img1"){
              setProgress({progress1:percentage})
            } else if(data.first === "img2"){
              setProgress({progress2:percentage})
            }else{
              setProgress({progress3:percentage})

            }
          },
          error=>{
            console.log(error)
          },
          () =>{
            storage.ref("news").child(data.image.name).getDownloadURL().then(url=>{
              if(data.first === "img1"){

                setUrl1(url)
                setProgress({progress1:null})
              }else if (data.first === "img2"){
                setUrl2(url)
                setProgress({progress2:null})
              }else{
                setUrl3(url)
                setProgress({progress3:null})
              }
            })
          }
        )
      }
          return (
                  
             <div className="addslider_section">
             <div className="addnews_image_container">
            <div className="addnews_image">
              <h4>First Image</h4>
              {progress.progress1 &&
           <div className="progressbar" style={{width:progress.progress1+"%"}}></div>}
               {url1 !== '' &&
              <div className="uploaded_image_container">
                      <img src={url1} alt="img1" />
              </div>
            }
             
              <div className="icon_container">
                <label htmlFor="first_image">
                  <FaCamera />
                  <h5>upload</h5>
                </label>
                <input type="file" name="first_image" id="first_image"  onChange={(e)=>handleupload({first:"img1",image:e.target.files[0]})} />
              </div>
            </div>

            <div className="addnews_image">
             
              <h4>Second Image</h4>
              {progress.progress2 &&
           <div className="progressbar" style={{width:progress.progress2+"%"}}></div>}
           {url2 !== '' &&
              <div className="uploaded_image_container">
                      <img src={url2} alt="img1" />
              </div>
            }
              <div className="icon_container">
                <label htmlFor="second_image">
                  <FaCamera />
                  <h5>upload</h5>
                </label>
                <input type="file" name="second_image" id="second_image" onChange={(e)=>handleupload({first:"img2",image:e.target.files[0]})}/>
              </div>
            </div>
            <div className="addnews_image">
            
              <h4>Third Image</h4>
              {progress.progress3 &&
           <div className="progressbar" style={{width:progress.progress3+"%"}}></div>}
              {url3 !== '' &&
              <div className="uploaded_image_container">
                      <img src={url3} alt="img1" />
              </div>
            }
          
              <div className="icon_container">
                <label htmlFor="third_image">
                  <FaCamera />
                  <h5>upload</h5>
                </label>
                <input type="file" name="third_image" id="third_image" onChange={(e)=>handleupload({first:"img3",image:e.target.files[0]})}/>
              </div>
             
            </div>
          <div className="btn_container">
            <button type="submit" className="btn" onClick={(e)=>{publish(e)}}>
              Publish
            </button>
            </div>
                    </div>
          </div>
                    
          )
}

export default Addslider
