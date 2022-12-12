import * as React from "react";
import "./Stepper.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { findStep } from "views/Employeer/EmployeerStep/findStep";
import StepOperations from "./Step";
import { useSelector, useDispatch } from "react-redux";
import { setActiveStep, setSkipped } from "redux/stepperSlice";
import { steps } from "common/constantField";

export default function HorizontalLinearStepper() {
  const activeStep = useSelector((state) => state.stepper.activeStep);
  const skipped = useSelector((state) => state.stepper.skipped);
  const dispatch = useDispatch();

  const isStepOptional = (step) => {
    return step === 1};

  const isStepSkipped = (step) => {
    return skipped.has(step)};

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    dispatch(setActiveStep(activeStep + 1));
    dispatch(setSkipped(newSkipped));
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {throw new Error("You can't skip a step that isn't optional.")}

    dispatch(setActiveStep(activeStep + 1));
    dispatch(
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      })
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper className="stepper" activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} style={{ color: "red" }}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={() => dispatch(setActiveStep(0))}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="central-step">{findStep(activeStep, handleNext)}</div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {/* <StepOperations /> */}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
