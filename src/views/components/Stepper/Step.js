import React from "react";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import {setActiveStep,setSkipped,setEmployeeModal} from 'redux/stepperSlice'
import {steps} from 'common/constantField'

function Step() {
  const dispatch = useDispatch()
  const activeStep = useSelector((state) => state.stepper.activeStep);
    const skipped = useSelector((state)=> state.stepper.skipped)
  
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleSubmit = ()=>
  {
    dispatch(setEmployeeModal(false))
    dispatch(setActiveStep(0))
  }
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    dispatch(setActiveStep(activeStep + 1))
    dispatch(setSkipped(newSkipped))
  };
  return (
    <div className="steps-btns">
      <Button
        color="inherit"
        disabled={activeStep === 0}
        onClick={()=>dispatch(setActiveStep(activeStep - 1))}
        sx={{ mr: 1 }}
      >
        Geri
      </Button>

      <Button type="submit" onClick={()=> activeStep === steps.length - 1 && handleSubmit()}>
        {activeStep === steps.length - 1 ? "Tamamla" : "İrəli"}
      </Button>
    </div>
  );
}
export default Step;