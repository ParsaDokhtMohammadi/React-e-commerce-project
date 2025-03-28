import React from 'react'
import { useParams } from 'react-router'
const Moviedetails = () => {
    const id = useParams()
    console.log(id)
  return (
    <div>Moviedetails
        <p>{id.id}</p>
    </div>
  )
}

export default Moviedetails