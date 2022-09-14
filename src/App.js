import './App.css';
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import UserItem from './components/UserItem';


function App() {

  let [usersArray, setUsersArray] = useState([

  ])


  function addNewPerson(enteredInfo) {
    
  }



  let content = "Nothing Here Yet.."


  console.log(usersArray.length);
  if (usersArray. length > 0) {
    content = (<UserItem people={usersArray } />)
  }

  return (
    <div className='App'>
      <UserForm onSavePersonInfo={addNewPerson}/>      
      {content}
    </div>
  )
}
export default App;
