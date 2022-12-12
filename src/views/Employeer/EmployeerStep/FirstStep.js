import * as React from 'react';
import '../Employeer.css'
import TextField from '@mui/material/TextField';
import useCustomFormik from 'hooks/useCustomFormik'
import {firstStepValidation} from 'validation'
import {firstStepField} from 'common/constantField'
import StepOperations from 'views/components/Stepper/Step'

export default function BasicTextFields({next}) {
  const firstStepValue = {name:"",surname:"",age:"",id_seria:""}
  const formik = useCustomFormik(firstStepValue,firstStepValidation,next)

  return (
    <form onSubmit={formik.handleSubmit} className='step-content step1'>
      {firstStepField.map(e=>
          {
            return(
              <TextField 
              color='warning' 
              name={e.name} 
              value={formik.values[`${e.name}`]} 
              onChange={formik.handleChange} 
              className='custom-field' 
              id="standard-basic" 
              label={e.label} 
              variant="standard" />
              )
          })}
      <StepOperations/>
    </form>
  );
}