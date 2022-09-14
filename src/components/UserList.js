import React from 'react'
import UserItem from './UserItem'

const UserList = (props) => {
  return (
    <ul>
      {props.people.map(person => (
        <UserItem
        key={person.id}
        onDelete={person.onDelete}
        />
      ))}
    </ul>
  )
}

export default UserList
