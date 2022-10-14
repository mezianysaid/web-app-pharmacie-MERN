import React, { lazy, Suspense, useState } from 'react';

const LazySignIn = lazy(() => import('./signIn'));

const SignIn = props => {
  const formFeilds ={username:'',Email:'',password:'',confirmPassword:''}
  const [formValues,setFormValues] = useState(formFeilds)
  const [errors, setErrors] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault()
    ValidateFields(formValues)
  }
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value});
  }
  const onCancel = (e) => {
    e.preventDefault();
    setFormValues(formFeilds);
  }
  const ValidateFields= (values) => {
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username || values.username.length <=3){
      // sethide(true)
      setErrors('username is mandatory and  must be atleast 3 characters !')
    }
    if(values.password.length<=3 && values.confirmPassword.length<=3){
      setErrors('password must be atleast 3 characters')
    }
    if(values.password !== values.confirmPassword){
      setErrors('Passwords does not match !')
    }
    if(!regex.test(values.Email)){
      setErrors('this is not a valid email format')
    }  

}
  var props = {formValues, handleChange,handleSubmit,onCancel,errors}
  return (
  
    <Suspense fallback={null}>
    <LazySignIn {...props} />
  </Suspense>
  )
}

export default SignIn;
