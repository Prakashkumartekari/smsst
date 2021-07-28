import React from "react";
import {FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa"
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo4.png";
import "./footer.css";

function Footer() {

  return (
    <div className="footer_section">
      <div className="footer_container">
        <div className="logo_container">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navItem">
          <ul>
            <li>
              <Link className="textLink" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="textLink" to="/news">
                News
              </Link>
            </li>
            <li>
              <Link className="textLink" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="textLink" to="/allmembers">
                Member
              </Link>
            </li>
          </ul>

           
        <div className="social_container">
               <div className="title">
                      <p>&mdash; Follow Us On &mdash;</p>
               </div>
               <div className="icon_container">
                      <FaFacebook className="icon_style"/>
                      <FaTwitter className="icon_style"/>
                      <FaInstagram className="icon_style"/>
               </div>
        </div>
        </div>
        <div className="map_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.66604412761!2d77.31473861459645!3d30.160962520014863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efb394fc5b521%3A0x6eae19054f1cabab!2zKHNocmkgbWFuYXYgc2V2YSBtYW1pdGkgdHJ1c3Qp4KS24KWN4KSw4KWAIOCkruCkvuCkqOCkteCkuOClh-CkteCkviDgpLjgpK7gpL_gpKTgpL8g4KSf4KWN4KSw4KS44KWN4KSf!5e0!3m2!1sen!2sin!4v1622437829504!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{border:0}}
            allowFullScreen={true}
            loading="lazy"
            title="seva map"
          ></iframe>
       
        </div>
      </div>
      <div className="copyright_container">
      <div className="copyright">
        <p>© Copyright 2021 Sri Manav Seva Samiti Trust. All rights reserved.</p>
        </div>
        <div className="designed">
               <h3>Designed By: <span>Webinfologics</span></h3>
        </div>
      
      </div>
    </div>
  );
}

export default Footer;
