import React, { useState } from 'react'
import './UserForm.css'

const UserForm = (props) => {
  let [userName, setUserName] = useState('');
  let [userAge, setUserAge] = useState('')


  function nameChangeHandler(e) {
    let typedName = (e.target.value);
    setUserName(typedName)
    console.log(typedName);
  }

  function ageChangeHandler(e) {
    let typedAge = (e.target.value);
    setUserAge(typedAge)
    console.log(typedAge);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const personInfo = {
      name: userName,
      age: userAge
    }
    console.log(userName + " IS THE NAME");

    props.onSavePersonInfo(personInfo)
    setUserName('')
    setUserAge('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='input-form'>
        <label >Username</label>
        <input value={userName} type="text" onChange={nameChangeHandler} />
        <label >Age(Years)</label>
        <input value={userAge} type="number" onChange={ageChangeHandler} />
        <button type='submit'>Add New User</button>
      </div>
    </form>

  )
}

export default UserForm
