import React from "react";
import { Link } from "react-router-dom";
import "./donation.css"

function Donation() {
  return (
    <>
      <div className="donation_container">
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tempora <br/>
          iste odio quasi eveniet? Eius voluptatibus deserunt dolore eos<br/>
          repellendus.
        </p>
        <Link to="/donationdetail" className="donate_link">Donate Now!!!!!</Link>
      </div>
      </div>

    </>
  );
}

export default Donation;
