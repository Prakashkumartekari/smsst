import React from "react";
import "./contact.css"
function Contact() {
  return (
  <div className="contact_section">
      <div className="contact_container">
        <h1>Contact Us</h1>
        <form action="">
          <div className="name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Contact No" />
          <input type="text" placeholder="Email" />
         <textarea name="message" id="message" cols="16" rows="8" placeholder="Write Some Message......."></textarea>
         <div className="send_button">
           <p>send</p>
         </div>
        </form>
      </div>
      </div>
  );
}

export default Contact;
