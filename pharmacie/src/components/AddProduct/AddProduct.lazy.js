import React, { lazy, Suspense,useState } from 'react';
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { addProductAction} from '../../store/_actions'
const LazyAddProduct = lazy(() => import('./AddProduct'));

const AddProduct = () => {
  const formFeilds ={name:'',category:''}
  const [formValues,setFormValues] = useState(formFeilds)
  const [errors, setErrors] = useState(null);
  const [file, setFile] = useState(null) ;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    var Data = new FormData();
    Data.append('name',formValues.name)
    Data.append('category',formValues.category)
    Data.append('image',file)

    dispatch(addProductAction(Data))
    .then(setFormValues(formFeilds))
    .then(setFile())
    .then(navigate('/'))

  }
  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value});
  }
  const onCancel = (e) => {
    e.preventDefault();
    setFormValues(formFeilds);
  }
  const listOptions =['Corps','Dentaire','Cheveux','Visage','Minceur','Complements Alimentaires','hygiene','bebe maman','aromatherapie'];
  let props = {formValues,handleChange,handleSubmit, onCancel,file, setFile,listOptions}
  return (
    <Suspense fallback={null}>
    <LazyAddProduct {...props} />
    </Suspense>
  )
}

export default AddProduct;
