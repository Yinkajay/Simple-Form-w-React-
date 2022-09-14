import React from 'react'
import './UserForm.css'

const UserForm = () => {
  return (
    <div className='input-form'>
      <label >Username</label>
      <input type="text" />
      <label >Age(Years)</label>
      <input type="number" />
    </div>
  )
}

export default UserForm
