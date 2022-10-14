import React, { lazy, Suspense,useRef,useState } from 'react';
// import {Maps,GoogleApiWrapper } from 'google-maps-react';

const LazyLocation = lazy(() => import('./Location'));

const Location = () => {




  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  } 







  let props = {location}
  return(
    <Suspense fallback={null}>
    <LazyLocation {...props} />
  </Suspense>  
  )
}
  

export default Location;
