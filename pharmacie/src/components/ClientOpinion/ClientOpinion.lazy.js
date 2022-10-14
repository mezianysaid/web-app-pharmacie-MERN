import React, { lazy, Suspense, useState ,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addOpinionAction, GetListOpinion } from '../../store/_actions'
const LazyClientOpinion = lazy(() => import('./ClientOpinion'));

const ClientOpinion = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const initFeilds = {username:'',message:''}
  const [formFeilds,setFormFeilds] = useState(initFeilds)
  const clientsOpin = useSelector(state => state.opinions)
  const {opinions} = clientsOpin

  useEffect(() => {
    dispatch(GetListOpinion())
  },[dispatch])


  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormFeilds({...formFeilds,[name]:value})
  }
  
  const handleSubmit = (e) => {
      e.preventDefault();
      if(formFeilds){
        dispatch(addOpinionAction(formFeilds))
        .then(setFormFeilds(initFeilds))
        .then(navigate('/ClientOpinion'))
        .then(dispatch(GetListOpinion()))
      }
  }

  const opinionss= [
    {username:'said meziany',
     message:'just for testing'}
  ]
  let props = {formFeilds,handleChange,handleSubmit,opinions}
  return (
    <Suspense fallback={null}>
    <LazyClientOpinion {...props} />
  </Suspense>
  )
};

export default ClientOpinion;
