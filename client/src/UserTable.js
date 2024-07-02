import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserForm from './UserForm';

function UserTable({onEditUser}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function getUsers(){

            try {
                const response = await axios.get("http://localhost:9090/api/v1/getusers")
                setUsers(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers();

    },[])

    async function deleteUser(id) {
        try {
            await axios.delete(`http://localhost:9090/api/v1/deleteuser?id=${id}`);
            alert("User deleted successfully");
            setUsers(users.filter(user => user.id !== id));  // Update the state to reflect the deletion
        } catch (error) {
            console.log(error);
        }
    }
    
    async function PassUser(user){
        onEditUser(user);
    }

  return (
    <div className='container'>
        <div className='row tablerow'>
            <div className='col-md-3 border tablecolmain'>
                <strong><p>User ID</p></strong>
            </div>
            <div className='col-md-3 border tablecolmain'>
                <strong><p>User Name</p></strong>
            </div>
            <div className='col-md-3 border tablecolmain'>
                <strong><p>Action</p></strong>
            </div>
        </div>
        {users.map((user) => (
            <div className='row tablerow' key={user.id}>
                <div className='col-md-3 border tablecol'>{user.id}</div>
                <div className='col-md-3 border tablecol'>{user.name}</div>
                <div className='col-md-3 border tablecol'>
                    <button className='btn btn-success' onClick={()=> {PassUser(user)}}>Update</button>&nbsp;&nbsp;
                    <button className='btn btn-danger' onClick={()=> {deleteUser(user.id)}}>Delete</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default UserTable