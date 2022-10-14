import React, { lazy, Suspense,useState } from 'react';
import { useDispatch} from 'react-redux'
import { addUserAction } from '../../store/_actions/_userActions'
const LazySignUp = lazy(() => import('./signUp'));

const SignUp = () => {
  const formFeilds ={username:'',Email:'',password:'',confirmPassword:''}
  const [formValues,setFormValues] = useState(formFeilds)
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if(formValues){
      // console.log(formValues)
      (ValidateFields(formValues));
      const data = new FormData();
      data.append('username',formValues.username)
      data.append('email',formValues.Email)
      data.append('password',formValues.password)

      dispatch(addUserAction(data))
        .then(setFormValues(formFeilds))      
    }
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
  let props = {formValues, handleChange,handleSubmit,onCancel,errors}
  return (
<Suspense fallback={null}>
    <LazySignUp {...props} />
  </Suspense>

  )
}
  
export default SignUp;

