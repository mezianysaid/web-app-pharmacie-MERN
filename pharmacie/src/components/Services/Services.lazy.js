import React, { lazy, Suspense } from 'react';
import elkenz from '../../assets/elkenz.jpeg'
import doc1 from '../../assets/doc1.jfif'
import dc1 from '../../assets/dc1.png'
const LazyServices = lazy(() => import('./Services'));

const Services = ()=> {
  const ListServices =[ 
    { 
      service:'Medical Consultation',
      description:'you can ask for every consultation,we will help you, in any thing .',
      img:<img src={doc1} height={300} width='100%'/>
    },
    { 
      service:'Selling Medicines',
      description:'We are selling the medicines .',
      img:<img src={elkenz} height={300} width='100%' />
    },
    { 
      service:'Social Assistance',
      description:'La description de service ',
      img:<img src={dc1} height={300} width='100%'/>
    }
  ]
  let props ={ListServices}
  return (
    <Suspense fallback={null}>
    <LazyServices {...props} />
  </Suspense>
  )
};

export default Services;
