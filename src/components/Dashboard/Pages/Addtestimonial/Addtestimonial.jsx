import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showAlert } from '../../../../features/modal/Clickevent'
import { db } from '../../../../firebase/config'
import "./addtestimonial.css"
const Addtestimonial = () => {
  const [testi, setTesti] = useState({
    Writer:"",
    WriterText:"",
  })
  const dispatch = useDispatch()
  const handleChange =(e)=>{
          setTesti({...testi,[e.target.name]:e.target.value})
  }
  const handleUpload =()=>{
    db.collection("testi").add({
      WriterName:testi.Writer,
      WriterQuote:testi.WriterText
    }).then(()=>{
      dispatch(showAlert("TestiMonial Added successfully."))
    setTesti({Writer:"",WriterText:""})}).catch(error=>console.error)
  }
          return (
                    <>
                            <div className="addtestimonial_section">
                                      <div className="addtestimonial_container">
                                        <h1>Add Testimonial</h1>
                                        <label htmlFor="Writer">Writer Name</label>
                                        <input type="text" id="Writer" name="Writer"  onChange={handleChange} value={testi.Writer}/>
                                        <textarea name="WriterText" id="WriterText" cols="30" rows="10" placeholder="Write some Message Here" onChange={handleChange} value={testi.WriterText}></textarea>
                                        <div className="btn_container">
                                                  <div className="btn_container">
                                                            <button type="submit" className="btn" onClick={handleUpload}>Post</button>
                                                  </div>
                                        </div>
                                      </div>
                            </div>
                    </>
          )
}

export default Addtestimonial
