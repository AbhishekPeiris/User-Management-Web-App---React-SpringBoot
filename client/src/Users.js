import React, { useState } from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'

function Users() {

  const [userToUpdate, setUserToUpdate] = useState(null);

  const handleEditUpdate = (updatedUser) => {
    setUserToUpdate(updatedUser);
  };

  const handleUserUpdate = () => {
    setUserToUpdate(null);
  };

  return (
    <div>
        <UserForm userToUpdate={userToUpdate} onUserUpdate={handleUserUpdate}/>
        <UserTable onEditUser={handleEditUpdate} />
    </div>
  )
}

export default Users