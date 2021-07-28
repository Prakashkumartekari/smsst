import React, { useEffect,useState } from "react";
import {db} from "../../firebase/config"
import "./allmember.css"

function AllMembers() {
    const [members, setMembers] = useState([])
    const [member, setMember] = useState(false)
    const [loading,setLoading] = useState(true)
  useEffect(  () => {
   const get =  db.collection("members").get()
    get.then(snapshot =>{
      if(snapshot.empty){
        setLoading(false)
        setMember(true)
      }
      if(!snapshot.empty) setLoading(false)
     setMembers(snapshot.docs.map(doc =>doc.data()))
    })
    },
   [])
  return (
    <>
    {members.length > 0 &&
      <div className="member_wrapper ">
          <div className="member_container">
      {members.map(member =>
        <div className="member_card" key={member.memberid}>
          <div className="imgcontainer">
            <img src={member.imageurl} alt="memimage"  />
          </div>
          <div className="content">
            
              <h3>{member.post}</h3> 
              <p className="id"><span>Id </span><span id="id">{member.memberid}</span></p>
             <hr />
             <div className="personal_info">
             {/* <p className="info_heading">Personal Info</p> */}
             <div className="single_line">
               <p>Name:</p>
               <p className="name">{member.name}</p>
             </div> <div className="single_line">
               <p>Parent's:</p>
               <p>{member.parents}</p>
             </div>
              <div className="single_line">
               <p>Age:</p>
               <p>{member.age}</p>
             </div> 
             <hr style={{marginTop:"5px"}}/>
             <div className="address_info">
               {/* <p className="info_heading">Address</p> */}
             <div className="single_line">
               <p>Village/City:</p>
               <p>{member.village}</p>
             </div>
              <div className="single_line">
               <p>Dist:</p>
               <p>{member.disrict}</p>
             </div>
              <div className="single_line">
               <p>State:</p>
               <p>{member.state}</p>
             </div>
             </div>
            
            </div>
          </div>
        </div>
      )}
      </div>
      </div>
}
{member &&
  <div className="loader_container">
  <div className="loader_wrap">
  <div>
    <div style={{fontSize:"50px",fontWeight:700,margin:"0 auto 20px auto",textAlign:"center",color:'tomato'}}>Oops..</div>
    <h3>Members not found in Database.</h3>
  </div>
  </div>
</div>
}
{loading &&
      <div className="loader_container">
          <div className="loader_wrap">
          <div className="loader"></div>
          <div>
            <h3>Loading Members.Please Wait...</h3>
          </div>
          </div>
      </div>
      }
    </>
      )
    
  
}

export default AllMembers;
