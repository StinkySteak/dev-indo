import React from 'react'
import './Recent.css'

function Recent(props) {
    return (
        <div className='recent'>

            <div className='recent-img-container'>
                <img className='recent-img' src='Images/Img.jpg' width={'300px'} />
            </div>
            <div className='flex-left'> <p className='recent-rural'>{props.rural}</p>  &nbsp;&nbsp;  <i><p className='recent-date'>{props.date}</p></i> </div>
            <h1 className='recent-title title-font'>{props.title}</h1>
        </div>
    )
}

export default Recent