import React from 'react'
import { useParams } from 'react-router-dom'

//this componet will be in the url means for example if we write on the url /user9877  the page content will be user : user9877

function User_id() {

    const {information} = useParams()
  return (
    <div>
      user : {information}   {/* the page will show this */ }
    </div>
  )
}

export default User_id
