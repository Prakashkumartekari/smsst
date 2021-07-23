import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {closeModal} from "../../features/modal/Clickevent"
import {signupUser} from "../../features/serverReducer/authreducer"
import './modal.css'
function Modal() {
          const [email, setEmail] = useState('')
          const [password, setPassword] = useState('')
          const  value = useSelector((state)=>state.ClickeventReducer.value)
          const  loading = useSelector((state)=>state.authReducer.loading)
          const  invalid = useSelector((state)=>state.authReducer.invalid)
          const  type = useSelector((state)=>state.ClickeventReducer.type)
          const dispatch = useDispatch()
          const userdata = {type,email,password}   
           
          if(!value)
          {
                    return null;
                    
          }
          return (
                    <div className="modalContainer">
                    <div className="modalContent">
                        <div className="modalHeader">
                            <h1>{type}</h1>
                            <h2 onClick={()=>dispatch(closeModal())}>x</h2>
                        </div>
                        <div className="modalForm">
                            {invalid &&
                            <div className="invalid">Email or Password May be wrong</div>
                            }
                                {loading &&
                            <div className="loader"></div>
                            }
                            <label htmlFor="email">Email</label>
                            <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label htmlFor="password">Password</label>
                            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="modalFooter">
                            <button
                             onClick={()=>dispatch(signupUser(userdata))}>{type}</button>
                        </div>
                       
                    </div>
                </div>
          )
}

export default Modal
