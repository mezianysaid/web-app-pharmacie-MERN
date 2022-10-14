import React, { lazy, Suspense } from 'react';
import c1 from '../../assets/c1.jfif'
import ac1 from '../../assets/ac1.jfif'
import b1 from '../../assets/b1.jfif'
import ch1 from '../../assets/ch1.jfif'
import cm1 from '../../assets/cm1.jfif'
import d1 from '../../assets/d1.jfif'
import hy1 from '../../assets/hy1.jfif'
import l1 from '../../assets/l1.jpeg'
import m1 from '../../assets/m1.jfif'
import ph1 from '../../assets/ph1.jfif'
import v1 from '../../assets/v1.jfif'


const LazyCategories = lazy(() => import('./categories'));

const Categories = () => {
  const categories =[ 
    {
      title:'Corps',
      img: <img src={c1} alt="elkenz" width='100%' height='100%'/>
    },
    {
      title:'Dentaire',
      img: <img src={d1} alt="elkenz"  width='100%' height='100%'/>
    },
    {
      title:'Cheveux',
      img: <img src={ch1} alt="elkenz"  width='100%' height='100%'/>
    },
    {
      title:'Visage',
      img: <img src={v1} alt="elkenz"  width='100%' height='100%'/>
    },
    {
      title:'Minceur',
      img: <img src={m1} alt="elkenz"  width='100%' height='100%'/>
    },
    {
      title:'Complements Alimentaires',
      img: <img src={cm1} alt="elkenz"  width='100%' height='100%'/>
    },
    {
      title:'hygiene',
      img: <img src={hy1} alt="elkenz"  width='100%' height='100%'/>
    },
    {
      title:'bebe maman',
      img: <img src={b1} alt="elkenz"  width='100%' height='100%'/>
    },
    {
      title:'aromatherapie',
      img: <img src={ac1} alt="elkenz"  width='100%' height='100%'/>
    },

  ]
let props = {categories}
  return (
    <Suspense fallback={null}>
    <LazyCategories {...props} />
    </Suspense>
  )
}
export default Categories;
