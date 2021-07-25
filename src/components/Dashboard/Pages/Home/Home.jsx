import React from "react";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";
import Card from "../Card/Card";
import { FiUserPlus, FiUser } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";

import "./home.css";
import { Addmember } from "../..";



const Home = () => {
  const { url } = useRouteMatch();
  const location =useLocation()
  console.log(location)
  const details = [
    { text: "member", no: 1224, icon: <FiUserPlus /> },
    { no: 12214, text: "visitor", icon: <FiUser /> },
    { text: "Total News", no: 12214, icon: <ImNewspaper /> },
  ];
  return (
    <>
      <div className="admin_section">
        <div className="admin_home_container">
          <div className="card_container">
            {details.map((detail) => (
              <Card text={detail.text} no={detail.no} icon={detail.icon} />
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
