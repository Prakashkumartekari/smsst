import React from "react";
import image from "../../assets/images/prakash.jpeg"
import "./allmember.css"
const members = [
  { id: 1, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 2, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 3, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 4, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 5, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 6, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 7, name: "prakash", image, post: "member", home: "jagadhri" },
  { id: 8, name: "prakash", image, post: "member", home: "jagadhri" },
];
function AllMembers() {
  return (
    <>
    
      <div className="member_wrapper ">
          <div className="member_container">
      {members.map(member =>
        <div className="member_card" key={member.id}>
          <div className="imgcontainer">
            <img src={member.image} alt="memimage"  />
          </div>
          <div className="content">
            
              <h3>{member.post}</h3> 
              <p className="id"><span>Id </span><span id="id">{member.id}</span></p>
             <hr />
             <div className="personal_info">
             {/* <p className="info_heading">Personal Info</p> */}
             <div className="single_line">
               <p>Name:</p>
               <p className="name">Prakash Kumar</p>
             </div> <div className="single_line">
               <p>Parent's:</p>
               <p>Ramesh Rawat</p>
             </div>
              <div className="single_line">
               <p>D.O.B:</p>
               <p>16-01-1997</p>
             </div> 
             <hr style={{marginTop:"5px"}}/>
             <div className="address_info">
               {/* <p className="info_heading">Address</p> */}
             <div className="single_line">
               <p>Village/City:</p>
               <p>Jagadhri</p>
             </div>
              <div className="single_line">
               <p>Dist:</p>
               <p>Yamuna Nagar</p>
             </div> <div className="single_line">
               <p>State:</p>
               <p>Haryana</p>
             </div>

          
             </div>
            
            </div>
          </div>
        </div>
      )}
      </div>
      </div>
    </>
  );
}

export default AllMembers;
