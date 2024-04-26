import React from 'react'

import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()

  return (
    <div>
       <div className='bg-gray-800 p-5 text-white'> User Id: {userId}</div>
    </div>
  )
}

export default User
