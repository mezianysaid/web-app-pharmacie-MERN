import React, { lazy, Suspense,useState,useEffect } from 'react';
import { sendEmailAction } from '../../store/_actions/_emailActions'
import { useDispatch } from 'react-redux'

const LazyContactUs = lazy(() => import('./ContactUs'));

const ContactUs = () => {
  const dispatch = useDispatch()
  const initFeilds = {username:'',gmail:'',message:''}
  const [formFeilds,setFormFeilds] = useState(initFeilds)
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormFeilds({...formFeilds,[name]:value})
  }
 
  const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData();
      if(formFeilds){
      data.append('username',formFeilds.username)
      data.append('email',formFeilds.gmail)
      data.append('message',formFeilds.message)

      dispatch(sendEmailAction(data))
        .then(setFormFeilds(initFeilds))      
  }}
  let props = {formFeilds,handleChange,handleSubmit}
  return (
    <Suspense fallback={null}>
     <LazyContactUs {...props} />
    </Suspense>
  )
};

export default ContactUs;
