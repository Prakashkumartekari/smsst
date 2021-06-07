import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showModal } from "../../features/modal/Clickevent";
import image1 from "../../assets/images/logo4.png";
// import $ from 'jquery'

function Navbar() {
  const [auth, setAuth] = useState(false);
  const [isadmin, setIsadmin] = useState(true);
  const dispatch = useDispatch();

  return (
    <>
      <div className="navContainer">
        <div className="left_side">
          <div className="logo_container">
            <img src={image1} alt="image1" />
          </div>
          <div className="brandName">
            <h3> श्री मानव सेवा समिति ट्रस्ट</h3>
          </div>
        </div>
        <div className="navItem">
          <ul>
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="textLink"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="textLink"
                to="/news"
              >
                News
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="textLink"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="active"
                className="textLink"
                to="/allmembers"
              >
                Member
              </NavLink>
            </li>
            {isadmin ? (
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  className="textLink"
                  to="/admin"
                >
                  Admin
                </NavLink>
              </li>
            ) : (
              <li className="textLink1" onClick={() => dispatch(showModal())}>
                Register
              </li>
            )}
            {auth? (
              <li className="textLink1" onClick={() => dispatch(showModal())}>
                LogIn
              </li>
            ) : (
              <li className="textLink1">LogOut</li>
            )}

            {/* <li className="textLink" onClick={()=>dispatch(showModal())} > Register</li>
                                                  <li className="textLink">LogIn</li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
