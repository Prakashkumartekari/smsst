import React from 'react'
import "./contactDetail.css"
import {FaWhatsapp,FaMobile,FaMailBulk} from "react-icons/fa"
import Contact from './Contact'
const Card =(props)=>{
          return (
                 <div className="contactDet_cardContainer">
                         <div className="contactDet_icon">
                                   {props.icon}
                                   </div>  
                         <h3>{props.text}</h3>
                 </div>   
          )
}
const ContactDetail = () => {
          return (
                    <div className="contacDetail">
                        <div className="contactDetail_container">
                                  <Card icon={<FaMobile/>} text={"+91 7015500526"}/> 
                                  <Card icon={<FaWhatsapp/>} text="+91 7015500526"/> 
                                  <Card icon={<FaMailBulk/>} text="prakashkumartekari@gmail.com"/>
                                  </div>      
                                  <Contact text={"Send Enquiry"}/>
                    </div>
          )
}

export default ContactDetail
