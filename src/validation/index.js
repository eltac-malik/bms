import {object,string} from 'yup'


export const firstStepValidation = object(
{ 
    name:string().required().min(3),
    surname:string().required().min(3),
    age:string().required(),
    id_seria:string().required()
})


export const secondStepValidation = object(
{ 
    location:string().required().min(3),
    phone:string().required().min(3),
    extra_phone:string().required().min(3)
})


export const thirdStepValidation = object(
{ 
    salary:string().required().min(3)
})

