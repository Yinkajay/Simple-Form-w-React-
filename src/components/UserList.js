import React from 'react'
import UserItem from './UserItem'
import './UserList.css'

const UserList = (props) => {
  return (
    <div className='users'>
      <ul>
        {props.people.map(person => (
          <UserItem
            key={person.id}
            onDelete={person.onDelete}
          >{person.name} - {`${person.age} (years old)`}
          </UserItem>
        ))}
      </ul>
    </div>
  )
}

export default UserList
