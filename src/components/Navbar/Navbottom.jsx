import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../features/modal/Clickevent";
import {logout} from "../../features/serverReducer/authreducer";

import{FaHome,} from 'react-icons/fa'
import{IoIosLogIn} from 'react-icons/io'
import{IoLogOutOutline} from 'react-icons/io5'
import{HiOutlineUserGroup} from 'react-icons/hi'
import{MdContactPhone} from 'react-icons/md'
import{GiNewspaper} from 'react-icons/gi'
import{FcBusinessman} from 'react-icons/fc'

import "./navbottom.css";
// import $ from 'jquery'

function Navbottom() {
  
  const dispatch = useDispatch();
  const token = useSelector((state)=>state.authReducer.token)

  return (
    <>
      <div className="navBottomContainer">
        <div className="navBottomItem">
          <ul>
            <li>
          
              <NavLink
                exact
                activeClassName="active1"
                className="textLink"
                to="/"
              >
          
              <span><FaHome/></span>  Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active1"
                className="textLink"
                to="/news"
              >
              <span><GiNewspaper/></span>  News
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active1"
                className="textLink"
                to="/contact"
              >
               <span><MdContactPhone/></span> Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active1"
                className="textLink"
                to="/allmembers"
              >
               <span><HiOutlineUserGroup/></span> Member
              </NavLink>
            </li>
            {token !=null &&
              <li>
                <NavLink
                  exact
                  activeClassName="active1"
                  className="textLink"
                  to="/admin"
                >
                <span><FcBusinessman/></span>  Admin
                </NavLink>
              </li>
}
             
          
            {token === null? (
              <li className="textLink1" onClick={() => dispatch(showModal("login"))}>
               <span><IoIosLogIn/></span> LogIn
              </li>
            ) : (
              <li className="textLink1" onClick={()=>dispatch(logout())}><span><IoLogOutOutline/></span>LogOut
              </li>
            )}

            {/* <li className="textLink" onClick={()=>dispatch(showModal())} > Register</li>
                                                  <li className="textLink">LogIn</li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbottom;
