import React from 'react'

function UserForm() {
  return (
    <div className='container'>
        <form>
            <label>User ID:</label>&nbsp;
            <input type='text' placeholder='Enter User ID' className='input' /><br/><br/>

            <label>User Name:</label>&nbsp;
            <input type='text' placeholder='Enter User Name' className='input'/><br/><br/>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default UserForm