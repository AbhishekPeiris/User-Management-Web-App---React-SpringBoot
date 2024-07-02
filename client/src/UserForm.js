import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserForm({userToUpdate, onUserUpdate}) {

  const [id, setId] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {

    if(userToUpdate){
      setId(userToUpdate.id)
      setName(userToUpdate.name)
    }

  },[userToUpdate])

  const handleSubmit = async(e) => {

    e.preventDefault();
    
    const newUser = {
      id:id,
      name:name
    }

    try {
      await axios.post("http://localhost:9090/api/v1/adduser", newUser)
      alert("User added successfully")
      window.location.reload();
      setId('')
      setName('')
    } catch (error) {
      console.log(error)
    }

    
  }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <label>User ID:</label>&nbsp;
            <input type='text' placeholder='Enter User ID' className='input' value={id} 
              onChange={(e) => {
                setId(e.target.value);
              }}
            /><br/><br/>

            <label>User Name:</label>&nbsp;
            <input type='text' placeholder='Enter User Name' className='input' value={name} 
              onChange={(e) => {
                setName(e.target.value);
              }}
            /><br/><br/>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default UserForm