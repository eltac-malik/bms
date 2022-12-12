import {createSlice} from '@reduxjs/toolkit'


 const stepperSlice = createSlice(
    {
        name:"stepper",
        initialState:{
            activeStep:0,
            skipped:new Set()
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
            }
        }
    }
)



export default stepperSlice.reducer
export const {setActiveStep,setSkipped} = stepperSlice.actions