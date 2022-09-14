import './App.css';
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';


function App() {

  let [usersArray, setUsersArray] = useState([
    {
      name: 'Aubrey',
      age: 35,
      id: 7
    },
    {
      name: 'James',
      age: 26,
      id: 8
    }
  ])


  function addNewPerson(enteredInfo) {
    setUsersArray(prevUsers => { 
      let arr = [...prevUsers];
      arr.unshift({...enteredInfo, id:Math.random().toString()})
      return arr
  })
  }



  let content = "Nothing Here Yet.."


  console.log(usersArray.length);
  if (usersArray.length > 0) {
    content = (<UserList people={usersArray} />)
  }

  return (
    <div className='App'>

      <UserForm onSavePersonInfo={addNewPerson} />

      {/* <div className='users'> */}

        {content}

      {/* </div> */}

    </div>
  )
}
export default App;
