import React from 'react'
import './RuralCard.css';

function RuralCard(props) {
  return (
    <div className='ruralcard'>
        <div className='ruralcard-img-container'>
            <img src='Images/img.png' width={'200px'}/>
        </div>
        <div className='ruralcard-text-container'>
            <h1>{props.title}</h1>
            <h1>{props.title}</h1>
            <h1>{props.title}</h1>
        </div>
    </div>
  )
}

export default RuralCard