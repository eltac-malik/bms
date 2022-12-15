import React,{useState} from 'react'
import './EmployeerProfile.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function Index() {
  const [fieldOp,setFieldOp] = useState(true)
  return (
    <div className='emp-profile'>
    <ButtonGroup className='goBack'>
      <p></p>
      <Button onClick={()=> setFieldOp(!fieldOp)} className={`def-btn changes ${!fieldOp&&"save-profile"}`}>
        {fieldOp?" Düzəliş et":"Yadda saxla"}
      </Button>
    </ButtonGroup>
    <TextField
      className='profile-input'
      id="outlined-read-only-input"
      defaultValue="Hello World"
      InputProps={{readOnly: fieldOp}}
    />
    <TextField
      className='profile-input'
      id="outlined-read-only-input"
      defaultValue="Hello World"
      InputProps={{readOnly: fieldOp}}
    />
    <TextField
      className='profile-input'
      id="outlined-read-only-input"
      defaultValue="Hello World"
      InputProps={{readOnly: fieldOp}}
    />
    <TextField
      className='profile-input'
      id="outlined-read-only-input"
      defaultValue="Hello World"
      InputProps={{readOnly: fieldOp}}
    />
    <TextField
      className='profile-input'
      id="outlined-read-only-input"
      defaultValue="Hello World"
      InputProps={{readOnly: fieldOp}}
    />
    <TextField
      className='profile-input'
      id="outlined-read-only-input"
      defaultValue="Hello World"
      InputProps={{readOnly: fieldOp}}
    />
    <TextField
      className='profile-input'
      id="outlined-read-only-input"
      defaultValue="Hello World"
      InputProps={{readOnly: fieldOp}}
    />
    <TextField
      className='profile-input'
      id="outlined-read-only-input"
      defaultValue="Hello World"
      InputProps={{readOnly: fieldOp}}
    />
    </div>
  )
}

export default Index