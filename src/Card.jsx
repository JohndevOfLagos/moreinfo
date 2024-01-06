import React from 'react'
import "./Card.scss"



export default function Card (props) {
    
    let badge;
    if(props.item.status === 0){
      badge = "Ofline"
    }else if(props.item.status > 0) {
      badge = "Online"
    }


  return (
    <div className='Card'>
     {badge && <div className="badge" style={{backgroundColor: props.item.status === 0 ? "red" : "green"}}>{badge}</div>}
       <img src={`${props.item.coverimg}`} alt="" />
      <div className="card--body">
         <h4>{props.item.name}</h4>
         <span>
            {props.item.job}
         </span>
         <p>{props.item.about}</p>
      </div>
    </div>
  )
}
