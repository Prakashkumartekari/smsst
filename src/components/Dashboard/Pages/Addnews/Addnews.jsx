import React from 'react'
import "./addnews.css"
const Addnews = () => {
          return (
                    <>
                    <div className="addnews_section">
                            <div className="addnews_container">
                                    <h1>Publish News</h1>
                                    <div className="addnews_heading">
                                            <label htmlFor="addnews_heading">News Heading</label>
                                            <input type="text" id="addnews_heading" name="addnews_heading" placeholder="News Heading"/>
                                    </div>
                                 
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

export default Addnews
