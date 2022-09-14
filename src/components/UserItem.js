import React from 'react'
import './UserItem.css'

const UserItem = (props) => {
  return (
    <li>
      <div className='user-info'>
      {props.children}
      </div>
    </li>
  )
}

export default UserItem
