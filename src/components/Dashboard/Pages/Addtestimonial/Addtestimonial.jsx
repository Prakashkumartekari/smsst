import React from 'react'
import "./addtestimonial.css"
const Addtestimonial = () => {
          return (
                    <>
                            <div className="addtestimonial_section">
                                      <div className="addtestimonial_container">
                                        <h1>Add Testimonial</h1>
                                        <label htmlFor="Writer">Writer Name</label>
                                        <input type="text" id="Writer" name="Writer" />
                                        <textarea name="WriterText" id="WriterText" cols="30" rows="10" placeholder="Write some Message Here"></textarea>
                                        <div className="btn_container">
                                                  <div className="btn_container">
                                                            <button type="submit" className="btn">Post</button>
                                                  </div>
                                        </div>
                                      </div>
                            </div>
                    </>
          )
}

export default Addtestimonial
