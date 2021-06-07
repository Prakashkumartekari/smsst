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
          <div className="img_container">
            <img src={member.image} alt="memimage"  />
          </div>
          <div className="content">
            <div className="member_name">
              <h3>{member.name}</h3>
              <p>{member.post}</p>
              <p>{member.home}</p>
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
