import {useFormik} from 'formik'


const useCustomFormik = (initialValues,validationSchema,next)=>
{
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit:(values)=>{
          console.log(values);
          next()
        }
      });

      return formik;
}


export default useCustomFormik