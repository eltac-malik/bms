import {createSlice} from '@reduxjs/toolkit'


 const stepperSlice = createSlice(
    {
        name:"stepper",
        initialState:{
            activeStep:0,
            skipped:new Set(),
            employeeModal:false
        },
        reducers:
        {
            setActiveStep:(state,action)=>
            {
                state.activeStep = action.payload
            },
            setSkipped:(state,action)=>
            {
                state.skipped = action.payload
            },
            setEmployeeModal:(state,action)=>
            {
                state.employeeModal = action.payload
            }
        }
    }
)



export default stepperSlice.reducer
export const {setActiveStep,setSkipped,setEmployeeModal} = stepperSlice.actions