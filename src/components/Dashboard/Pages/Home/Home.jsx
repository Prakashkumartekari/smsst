import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import Card from "../Card/Card";
import { FiUserPlus, FiUser } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";

import "./home.css";
import { Addmember } from "../..";
import { db } from "../../../../firebase/config";



const Home = () => {
  const { url } = useRouteMatch();
  const location =useLocation()
 const [member, setMember] = useState([])
 const [news, setNews] = useState([])
  useEffect(() => {
    db.collection('members').get().then(docs=>{
          const memberlength =[]
          docs.docs.map(snap=>memberlength.push(snap.data()))
       setMember(memberlength)
        }) 
        db.collection('news').get().then(docs=>{
          const newslength =[]
          docs.docs.map(snap=>newslength.push(snap.data()))
          setNews(newslength)
        })
        
      }, [])
  
  const details = [
    { text: "Member's", no:member.length, icon: <FiUserPlus style={{color:"orange"}}/> },
    { text: "Total News", no:news.length,icon: <ImNewspaper style={{color:"tomato"}}/> },
    { no: 12214, text: "visitor", icon: <FiUser /> },
  ];
  return (
    <>
      <div className="admin_section">
        <div className="admin_home_container">
          <div className="card_container">
            {details.map((detail,i) => (
              <Card text={detail.text} no={detail.no} icon={detail.icon} key={i}/>
            ))}
          </div>
          <div className="nav_container">
            <div className="nav">
              <ul>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navlink"
                    to={`${url}/addmember`}
                  >
                    Member
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navlink"
                    to={`${url}/addnews`}
                  >
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navlink"
                    to={`${url}/addslider`}
                  >
                    Slider
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="navlink"
                    to={`${url}/addtestimonial`}
                  >
                  Testimonial
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
              
             {location.pathname === "/admin" && 
             <Addmember/>
             }

        </div>
      </div>
    </>
  );
};

export default Home;
