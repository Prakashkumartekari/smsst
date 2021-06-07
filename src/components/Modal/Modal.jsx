import React, { useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {closeModal} from "../../features/modal/Clickevent"

import './modal.css'
function Modal() {
          const [username, setUsername] = useState('')
          const [email, setEmail] = useState('')
          const [password, setPassword] = useState('')

          const  value = useSelector((state)=>state.ClickeventReducer.value)
          const dispatch = useDispatch()
         
          const submit = ()=>{

          }
          if(!value)
          {
                    return null;
                    
          }
          return (
                    <div className="modalContainer">
                    <div className="modalContent">
                        <div className="modalHeader">
                            <h1>Register</h1>
                            <h2 onClick={()=>dispatch(closeModal())}>x</h2>
                        </div>
                        <div className="modalForm">
                            <label htmlFor="username">Username</label>
                            <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                            <label htmlFor="email">Email</label>
                            <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <label htmlFor="password">Password</label>
                            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="modalFooter">
                            <button onClick={()=>submit()}>Submit</button>
                        </div>
                    </div>
                </div>
          )
}

export default Modal
