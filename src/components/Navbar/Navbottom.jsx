import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal } from "../../features/modal/Clickevent";

import{FaHome,} from 'react-icons/fa'
import{IoIosLogIn} from 'react-icons/io'
import{IoLogOutOutline} from 'react-icons/io5'
import{HiOutlineUserGroup,HiUserAdd} from 'react-icons/hi'
import{MdContactPhone} from 'react-icons/md'
import{GiNewspaper} from 'react-icons/gi'
import{FcBusinessman} from 'react-icons/fc'

import "./navbottom.css";
// import $ from 'jquery'

function Navbottom() {
  const [auth, setAuth] = useState(false);
  const [isadmin, setIsadmin] = useState(true);
  const dispatch = useDispatch();

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
            {isadmin ? (
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
            ) : (
              <li className="textLink1" onClick={() => dispatch(showModal())}>
               <span><HiUserAdd/></span> Register
              </li>
            )}
            {auth? (
              <li className="textLink1" onClick={() => dispatch(showModal())}>
               <span><IoIosLogIn/></span> LogIn
              </li>
            ) : (
              <li className="textLink1"><span><IoLogOutOutline/></span>LogOut
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
