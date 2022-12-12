import * as React from 'react';
import '../Employeer.css'
import TextField from '@mui/material/TextField';
import useCustomFormik from 'hooks/useCustomFormik'
import {secondStepValidation} from 'validation'
import {secondStepField} from 'common/constantField'
import StepOperations from 'views/components/Stepper/Step'

function SecondStep({next}) {

  const secondStepValue = {location:"",phone:"",extra_phone:""}
  const formik = useCustomFormik(secondStepValue,secondStepValidation,next)
  return (
    <form onSubmit={formik.handleSubmit} className='step-content step1'>
      {secondStepField.map(e=>
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
              type={e.type&&"number"}
              variant="standard" />
              )
          })}
      <StepOperations/>
    </form>
  )
}

export default SecondStep