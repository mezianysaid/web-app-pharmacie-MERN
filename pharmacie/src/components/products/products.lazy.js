import React, { lazy, Suspense, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector  } from 'react-redux'
import {useParams } from 'react-router-dom'
import { GetListProducts } from '../../store/_actions/_productsActions'



const LazyProducts = lazy(() => import('./products'));

const Products = (props) => {
  const dispatch = useDispatch();
  const par = useParams();
  const [categ, setCateg] = useState('')
        setCateg(par.id)
  const myproducts = useSelector(state => state.products)
  const {products} = myproducts;
  // const listproducts = products
  // console.log(category)
  // console.log('peod',myproducts)
  // const listproducts =products.filter((prod) => {
    // if(category){
      // return (prod.category.toLocaleLowerCase() === categ.toLocaleLowerCase());
  // }
  // )
  // function getFilteredList() {
    // if (!categ) {
      // return products;
    // }
    // return products.filter((item) => item.category.toLocaleLowerCase() === categ.toLocaleLowerCase());
  // }
  // var listproducts = useMemo(products)
  // console.log(listproducts)
  useEffect(() => {
   dispatch(GetListProducts())   
  },[dispatch,categ,products])
  
  let prop = { products}
  return(
  <Suspense fallback={<div>no product ...</div>}>
    <LazyProducts {...prop} />
  </Suspense>
  )
}

export default Products;
