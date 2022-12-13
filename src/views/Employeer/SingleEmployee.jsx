import React from 'react'
import {useParams} from 'react-router-dom'

function SingleEmployee() {
  const {id} = useParams()
  return (
    <div>SingleEmployee {id}</div>
  )
}

export default SingleEmployee