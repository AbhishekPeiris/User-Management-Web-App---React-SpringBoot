import React from 'react'

function UserTable() {
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
    </div>
  )
}

export default UserTable