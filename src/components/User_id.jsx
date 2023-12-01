import React from 'react'
import { useParams } from 'react-router-dom'


function User_id() {

    const {information} = useParams()
  return (
    <div>
      user : {information}
    </div>
  )
}

export default User_id
