import React from 'react'
import "./addslider.css"
const Addslider = () => {
          return (
                    <>
                    <div className="addslider_section">
                              <div className="addslider_container">
                                    <h1>Add Slider</h1>
                              <div className="addnews_image_container">
                                    
                                    <div className="addnews_image_first_image">
                                    
                                    <label htmlFor="first_image">First Image</label>
                                    <input type="file" name="first_image" id="first_image" />
                                    </div>
                     
                                    <div className="addnews_image_second_image">
                                    <hr/>
                                    <label htmlFor="second_image">Second Image</label>
                                    <input type="file" name="second_image" id="second_image" />
                                    </div>
                                    <div className="addnews_image_third_image">
                                    <hr/>
                                    <label htmlFor="third_image">Third Image</label>
                                    <input type="file" name="third_image" id="third_image" />
                                    <hr/>
                                    </div>
                                    
                            </div>
                            <div className="btn_container">

                                    <button type="submit" className="btn">Publish</button>
                                    </div>
                              </div>
                    </div>
                    </>
          )
}

export default Addslider
