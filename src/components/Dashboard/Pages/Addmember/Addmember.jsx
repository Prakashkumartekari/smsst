import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "../../../../features/modal/Clickevent";
import { addmember } from "../../../../features/serverReducer/storageReducer";
import { storage } from "../../../../firebase/config";
import "./addmember.css";

const Addmember = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.storageReducer.loading);
  const [error, setError] = useState(false)
  const [progress, setProgress] = useState(null)
  const [url, setUrl] = useState('')
  const [formdata, setFormdata] = useState([
    {
      memberid: "",
      name: "",
      parents: "",
      age: "",
      gender: "male",
      post: "",
      village: "",
      district: "",
      pincode: "",
      state: "",
     
    },
  ]);
  const handleupload = (data)=>{
  const type = ["image/jpeg","image/jpg","image/png"]
    console.log(data.file.size,data.file.type)
    if(type.includes(data.file.type) && data.file.size <=2000000){
    setError(false)
    const uploadTask = storage.ref(`member/${data.file.name}`).put(data.file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const percentage = Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(percentage)
      },
      error=>{
        console.log(error)
      },
      () =>{
        storage.ref("member").child(data.file.name).getDownloadURL().then(url=>{
          console.log(url)
          setUrl(url)
          setProgress(null)
        })
      }
    )
  }else{
    setError(true)
  }
  }
  const hadleChange = (event) => {

    setFormdata({ ...formdata, [event.target.name]: event.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    if(url !== ''){
      dispatch(addmember({formdata,url}))
      dispatch(showAlert("Member Added Successfully"))
      setUrl('')
      setFormdata({
        memberid: "",
        name: "",
        parents: "",
        age: "",
        post: "",
        village: "",
        district: "",
        pincode: "",
        state: "",
      });
    }else{
      console.log("data not sent")
    }
    
  };
  return (
    <>
      <div className="admin_container">
        <form onSubmit={submit} id="form">
          <h1>Add Member</h1>
          <div className="backBox">
          <label htmlFor="id">Member Id</label>
          <input
            onChange={hadleChange}
            value={formdata.memberid}
            type="text"
            id="id"
            name="memberid"
          />
             <label htmlFor="post">Member Post</label>
          <input
            onChange={hadleChange}
            value={formdata.post}
            type="text"
            id="post"
            name="post"
          />
          </div>
          <div className="backBox">
          
          <label htmlFor="name">Name</label>
          <input
            onChange={hadleChange}
            value={formdata.name}
            type="text"
            id="name"
            name="name"
          />

          <label htmlFor="father_Name">Parent's</label>
          <input
            onChange={hadleChange}
            value={formdata.parents}
            type="text"
            id="father_Name"
            name="parents"
          />

          <div className="age_gender">
            <div className="age">
              <label htmlFor="age">Age</label>
              <input
                onChange={hadleChange}
                value={formdata.age}
                type="text"
                id="age"
                name="age"
              />
            </div>
            <div className="gender">
              <input
                onChange={hadleChange}
                type="radio"
                name="gender"
                id="male"
                value="male"
              />
              <label htmlFor="male">Male</label>
              <input
                onChange={hadleChange}
                type="radio"
                name="gender"
                id="female"
                value="female"
              />
              <label htmlFor="female">Female</label>
              <input
                onChange={hadleChange}
                type="radio"
                name="gender"
                id="other"
                value="other"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
         
          </div>
          <div className="backBox">
          <div className="address_container">
            <h1>Address</h1>
            <label htmlFor="vilage">Village / City</label>
            <input
              onChange={hadleChange}
              value={formdata.village}
              type="text"
              id="vilage"
              name="village"
            />
            <label htmlFor="district">District</label>
            <input
              onChange={hadleChange}
              value={formdata.district}
              type="text"
              id="district"
              name="district"
            />
            <label htmlFor="pincode">Pin Code</label>
            <input
              onChange={hadleChange}
              value={formdata.pincode}
              type="text"
              id="pincode"
              name="pincode"
            />
            <label htmlFor="state">State</label>
            <input
              onChange={hadleChange}
              value={formdata.state}
              type="text"
              id="state"
              name="state"
            />
          </div>
          </div>



          
          <div className="addmember_image_container">
            <div className="addmember_image">
              <h4>Image</h4>
              {error && <div style={{color:"red",padding:"10px 0"}}>File Must be JPEG/JPG/PNG or size less than 2 MB </div>}
          {progress &&
           <div className="progressbar" style={{width:`${progress}+"%"`}}></div>}
           {url !== '' &&
              <div className="uploadedmember_image_container">
                      <img src={url} alt="img1" />
              </div>
              }

              <div className="member_icon_container">
                <label htmlFor="first_image">
                  <FaCamera />
                  <h5>upload</h5>
                </label>
                <input type="file" name="first_image" id="first_image"  onChange={(e)=>{
                  const data ={index:"first",file:e.target.files[0]}
                  handleupload(data) }} />
              </div>
            </div>
            </div>
          {loading && <div className="loader"></div>}
          <div className="btn_container">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Addmember;
