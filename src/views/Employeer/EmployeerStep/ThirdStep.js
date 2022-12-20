import * as React from 'react';
import '../Employeer.css'
import TextField from '@mui/material/TextField';
import useCustomFormik from 'hooks/useCustomFormik'
import {thirdStepValidation} from 'validation'
import {thirdStepField,categories} from 'common/constantField'
import StepOperations from 'views/components/Stepper/Step'
import Dropdown from 'views/components/Dropdown'

function ThirdStep({next}) {
  const thirdStepValue = {salary:""}
  const formik = useCustomFormik(thirdStepValue,thirdStepValidation,next)
  return (
    <form onSubmit={formik.handleSubmit} className='step-content step1'>
      {thirdStepField.map(e=>
          {
            return(
              <>
              <TextField 
              color='warning' 
              name={e.name} 
              value={formik.values[`${e.name}`]} 
              onChange={formik.handleChange} 
              className='custom-field salary-field' 
              id="standard-basic" 
              label={e.label} 
              type={e.type&&"number"}
              variant="standard"
              />
              <Dropdown data={categories}/>
              </>
              )
          })}
      <StepOperations/>
    </form>
  )
}

export default ThirdStep