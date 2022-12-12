import {configureStore} from '@reduxjs/toolkit'
import stepperSlice from './stepperSlice'



export const store = configureStore(
    {
        reducer:{
            stepper:stepperSlice
        }
    }
)