import * as React from 'react';
import {useState} from 'react'
import { useParams,useNavigate } from "react-router-dom";
import './SingleEmployee.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Profile from 'views/Employeer/EmployeerProfile';

function SingleEmployee() {
  const { id } = useParams();
  const navigate = useNavigate()
  const [click,setClick] = useState(false)
  return (
    <div className='single-employee'>
    <ButtonGroup className='goBack'>
      <Button onClick={()=> navigate(-1)} className='return'>Geri</Button>
      <p></p>
    </ButtonGroup>

    <ButtonGroup variant="contained" className='contained-button-group' aria-label="outlined primary button group">
      <Button
      onClick={()=> setClick(false)}  
      className={`single-button ${!click&&"selected-single-button"}`}>Informasiya</Button>
      <Button 
      onClick={()=> setClick(true)}
      className={`single-button ${click&&"selected-single-button"}`}>Maaş cədvəli</Button>
    </ButtonGroup>
    
    <Profile/>
    </div>
  );
}

export default SingleEmployee;
