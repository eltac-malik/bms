import {object,string} from 'yup'


export const firstStepValidation = object(
{ 
    name:string() ,
    surname:string()  ,
    age:string() ,
    id_seria:string() 
})


export const secondStepValidation = object(
{ 
    location:string()  ,
    phone:string()  ,
    extra_phone:string()  
})


export const thirdStepValidation = object(
{ 
    salary:string()  
})

