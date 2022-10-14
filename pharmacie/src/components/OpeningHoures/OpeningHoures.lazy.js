import React, { lazy, Suspense } from 'react';

const LazyOpeningHoures = lazy(() => import('./OpeningHoures'));

const OpeningHoures = () => {
const ListDays = [ 
  { 
    day:'Lundi',
    time:'08:00 ===> 18:00',
    open:'Open'
  },
  { 
    day:'Mardi',
    time:'08:00 ===> 18:00',
    open:'Open'
  },
  { 
    day:'Mercredi',
    time:'08:00 ===> 18:00',
    open:'Open'
  },
  { 
    day:'Jeudi',
    time:'08:00 ===> 18:00',
    open:'Open'
  },
  { 
    day:'Vendredi',
    time:'08:00 ===> 18:00',
    open:'Open'
  },
  { 
    day:'Samedi',
    time:'08:00 ===> 18:00',
    open:'Open'
  },
  { 
    day:'Dimmanche',
    time:'Closing All Day',
    open:'Close'
  },
]
let props={ListDays}
  return(
    <Suspense fallback={null}>
    <LazyOpeningHoures {...props} />
    </Suspense>
  )
};

export default OpeningHoures;
