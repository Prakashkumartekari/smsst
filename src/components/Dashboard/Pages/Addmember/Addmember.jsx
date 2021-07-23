import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addmember } from '../../../../features/serverReducer/storageReducer'
import "./addmember.css"

const Addmember = () => {
    const dispatch = useDispatch()
    const  loading = useSelector((state)=>state.storageReducer.loading)

        const [formdata, setFormdata] = useState([{ 
            memberid:"",        
            name:'',
            parents:"",
            age:"",
            gender:"male",
            post:"",                
            village:"",
            district:"",
            pincode:"",
            state:""
        }]

            )
            const hadleChange = event =>{
             setFormdata({...formdata, [event.target.name] : event.target.value})

            }
           const submit = (e)=>{
               e.preventDefault()
              
             dispatch(addmember(formdata))
               setFormdata({  
               memberid:'',
               name:'',
               parents:"",
               age:"",
               post:"",                
               village:"",
               district:"",
               pincode:"",
               state:""
            })
              
           }
          console.log(formdata[0].gender)
          return (
                    <>
                          <div className="admin_container">  
                             <form onSubmit={submit} id="form">
                             <h1>Add Member</h1>
                                 <label htmlFor="id">Member Id</label>
                                 <input onChange={hadleChange} value={formdata.memberid} type="text" id="id" name="memberid" />
                                 <label htmlFor="name">Name</label>
                                 <input onChange={hadleChange} value={formdata.name} type="text" id="name" name="name" />

                                 <label htmlFor="father_Name">Parent's</label>
                                 <input onChange={hadleChange} value={formdata.parents} type="text" id="father_Name" name="parents" />

                                <div className="age_gender">
                                    <div className="age">
                                 <label htmlFor="age">Age</label>
                                 <input onChange={hadleChange} value ={formdata.age} type="text" id="age" name="age" />
                                    </div>
                                    <div className="gender">
                                        <input onChange={hadleChange}  type="radio"  name="gender" id="male" value="male" />
                                        <label htmlFor="male">Male</label>
                                        <input onChange={hadleChange} type="radio"  name="gender" id="female" value="female" />
                                        <label htmlFor="female">Female</label>
                                        <input onChange={hadleChange}  type="radio"  name="gender" id="other"  value="other" />
                                        <label htmlFor="other">Other</label>
                                    </div>
                                </div>
                                 <label htmlFor="post">Member Post</label>
                                 <input onChange={hadleChange} value={formdata.post} type="text" id="post" name="post" />
                                <div className="address_container">
                                <h1>Address</h1>
                                 <label htmlFor="vilage">Village / City</label>
                                 <input onChange={hadleChange} value={formdata.village} type="text" id="vilage" name="village" />
                                 <label htmlFor="district">District</label>
                                 <input onChange={hadleChange} value={formdata.district} type="text" id="district" name="district" />
                                 <label htmlFor="pincode">Pin Code</label>
                                 <input onChange={hadleChange} value={formdata.pincode} type="text" id="pincode" name="pincode"/>
                                 <label htmlFor="state">State</label>
                                 <input onChange={hadleChange} value={formdata.state} type="text" id="state" name="state" />
                                </div>
                                { loading &&
                                 <div className="loader"></div>
                                 }
                                <div className="btn_container">
                                <button type="submit" className="btn">Submit</button>

                                </div>
                             </form>
                     </div>
                    </>
          )
}

export default Addmember
