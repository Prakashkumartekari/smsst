import React from 'react'
import gif from "../../assets/images/checkmark.gif"
import "./Alert.css"
import {FaTimes} from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux'
import {closeAlert} from "../../features/modal/Clickevent"

const Alert = () => {
      const dispatch = useDispatch()
       const state = useSelector(state => state.ClickeventReducer.alert) 
       const text = useSelector(state => state.ClickeventReducer.text)
          return (
                    <>
               {state &&
         
                    <div className="alert_container">
                              <div className="alert_wrap">
                    <div className="alert_image_container">
                              <img src={gif} alt="gif" />
                    </div>
                    <div className="alert_content">
                              <h3>{text}</h3>
                              <button onClick={()=>dispatch(closeAlert())}>OK</button>
                    </div>
                    <div className="alert_close" onClick={()=>dispatch(closeAlert())}>
                             <FaTimes style={{color:"red",fontSize:"30px"}} />
                    </div>
                    </div>
                    </div>
         
}
</>
          )
}

export default Alert
