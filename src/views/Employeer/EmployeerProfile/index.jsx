import React from 'react'
import './EmployeerProfile.css'
import TextField from '@mui/material/TextField';

function index() {
  return (
    <div>
    <TextField
      id="outlined-read-only-input"
      label="Read Only"
      defaultValue="Hello World"
      InputProps={{
        readOnly: true ,
      }}
    />
    </div>
  )
}

export default index