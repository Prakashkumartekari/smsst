import React from 'react'
// import { NavLink } from 'react-router-dom'
import "./addmember.css"
const Addmember = () => {
          return (
                    <>
                          <div className="admin_container">  
                             <form >
                             <h1>Add Member</h1>
                                 <label htmlFor="name">Name</label>
                                 <input type="text" id="name" name="member_name" />

                                 <label htmlFor="father_Name">Parent's</label>
                                 <input type="text" id="father_Name" name="member_father_name" />

                                <div className="age_gender">
                                    <div className="age">
                                 <label htmlFor="age">Age</label>
                                 <input type="text" id="age" name="member_age" />
                                    </div>
                                    <div className="gender">
                                        <input type="radio" name="gender" id="male" value="Male" />
                                        <label htmlFor="male">Male</label>
                                        <input type="radio" name="gender" id="female" value="Female" />
                                        <label htmlFor="femalte">Female</label>
                                        <input type="radio" name="gender" id="other" value="Other" />
                                        <label htmlFor="other">Other</label>
                                    </div>
                                </div>
                                 <label htmlFor="post">Post</label>
                                 <input type="text" id="post" name="member_post" />
                                <div className="address_container">
                                <h1>Address</h1>
                                 <label htmlFor="vilage">Village / City / Ward</label>
                                 <input type="text" id="vilage" name="vilage_name" />
                                 <label htmlFor="district">District</label>
                                 <input type="text" id="district" name="member_district" />
                                 <label htmlFor="pincode">Pin Code</label>
                                 <input type="text" id="pincode" name="member_pinconde"/>
                                 <label htmlFor="state">State</label>
                                 <input type="text" id="state" name="member_state" />
                                </div>
                                <div className="btn_container">
                                <button type="submit" className="btn">Submit</button>

                                </div>
                             </form>
                     </div>
                    </>
          )
}

export default Addmember
