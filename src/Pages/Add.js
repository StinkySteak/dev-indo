import React, { useState } from 'react'
import AddForm from '../Components/AddForm'
import Button from '../Components/Button';
import './Add.css'

function Add() {

  const [hasSelectAdd, setHasSelectAdd] = useState(false);
  const [isAddActivity, setIsAddActivity] = useState(false);

  function onButtonClick() {
    setHasSelectAdd(true);
  }
  function onButtonClickActivity() {
    setHasSelectAdd(true);
    setIsAddActivity(true);
  }

  return (
    <div className='flex-center '>
      <div className='add-form-container flex-center'>
        {hasSelectAdd === false ? <div>
          <div className='add-option'><button className='add-btn' onClick={onButtonClickActivity}>Add Activity</button></div>
          <div className='add-option'><button className='add-btn' onClick={onButtonClick}>Add Rural</button></div>
        </div>
          :
          <div>
            {isAddActivity === true ? <AddForm /> : 
            
            <div>Coming Soon...</div>
            }
          </div>}
      </div>
    </div >
  )
}

export default Add