import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {showAlert } from "../../features/modal/Clickevent";
import { db } from "../../firebase/config";
import "./contact.css"
function Contact(props) {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    firsName:"",
    lastName:"",
    Mobile:"",
    email:"",
    message:"",
  })
  const handleChange=(e)=>{
   setData({...data, [e.target.name]:e.target.value})
  };
  const send= async ()=>{
    await db.collection("enquiry").add({
      Name:`${data.firsName} ${data.lastName}`,
      MobileNo:data.Mobile,
      Email: data.email,
      Message: data.message
    }).then(()=> dispatch(showAlert("member added succesfully"))
      
    ).catch(error=>console.log(error));
    setData({
      firsName:"",
      lastName:"",
      Mobile:"",
      email:"",
      message:"",
    })
  }
  return (
  <div className="contact_section">
      <div className="contact_container">
        <h1>{props.text}</h1>
        <form action="">
          <div className="name">
          <input onChange={handleChange} type="text" name="firsName" placeholder="First Name" value={data.firsName} />
          <input onChange={handleChange} type="text" name="lastName" placeholder="Last Name" value={data.lastName}/>
          </div>
          <input onChange={handleChange} type="text" name="Mobile"placeholder="Contact No" value={data.Mobile}/>
          <input onChange={handleChange} type="text" name="email" placeholder="Email" value={data.email}/>
         <textarea  onChange={handleChange}name="message" id="message" cols="16" rows="8" placeholder="Write Some Message......." value={data.message}></textarea>
         <div className="send_button">
           <p onClick={()=>send()}>send</p>
         </div>
        </form>
      </div>
      </div>
  );
}

export default Contact;
