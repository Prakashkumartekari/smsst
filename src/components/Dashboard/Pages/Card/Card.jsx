import React from 'react'
import "./card.css"

const Card = ({text,icon,no}) => {
          return (
                    <>
                         <div className="card_wrapper">
                              <div className="icon">
                               {icon}
                              </div>
                               <h1>{no}</h1>    
                               <p>{text}</p>
                     </div>     
                    </>
          )
}

export default Card
