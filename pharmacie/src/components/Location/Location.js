import React from 'react';
import PropTypes from 'prop-types';
import {Box,Card,Typography,Grid} from '@mui/material'
import './Location.scss';
import { useMemo,useState } from "react";
import { GoogleMap,useJsApiLoader,Marker } from "@react-google-maps/api";
import im1 from '../../assets/im1.jpeg'
import im2 from '../../assets/im2.jfif'
import im3 from '../../assets/im3.jfif'


const center = {
  lat:34.0155915333043,
  lng: -4.985857972213668
};
const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyADvIlt2FD5y6YMfr21i8lTSE0AVfZOBto",
    key:"AIzaSyADvIlt2FD5y6YMfr21i8lTSE0AVfZOBto"
  })

  return (
  <Card className="location">
    
       <Typography paragraph variant="h5" className="display-h5 title">
       COME VISIT US IN OUR COMPUS:
       </Typography>  
      <Box>
        <Typography paragraph variant="h6" className="display-h6 position">
          Pharmacie Mont Fleuri, Avenue Al-Karama, Fès
        </Typography>
        <a  href="https://www.google.com/maps/place/Pharmacie+Mont+Fleuri/@34.0154048,-4.9881325,17z/data=!3m1!4b1!4m5!3m4!1s0xd9f8b7a68d113b7:0xb9625a9562d8a31a!8m2!3d34.0154048!4d-4.9859437" >
          visit on google maps
          </a>
        </Box>
    <Box className='medleclass'>
       <Grid container className='mt-2'>
         <Grid md={4} sm={6} xs ={12} className='card card grid '>
          <img src={im1} alt="elkenz" width='100%' height={400}/>
         </Grid>
         <Grid md={4} sm={6} xs ={12} className='card card grid '><img src={im2} alt="elkenz" width='100%' height={400}/></Grid>
         <Grid md={4} sm={6} xs ={12} className='card card grid '><img src={im3} alt="elkenz" width='100%' height={400}/></Grid>
       </Grid>
    </Box>
    <Box className='mapBox'>
    <Card className="map card card">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width:'100%', height:'100%'}}
            center={center}
            zoom={15}      
          >  
          <Marker position={center} 
          options={{
            label:{
              text:'Pharmacie Mont Fleuri, Avenue Al-Karama, Fès',
              className:'map-marker'
            }
          }}
          ></Marker>
          </GoogleMap>
                ) : (<></>)
      }
      </Card>
      </Box>
      
  </Card>
  );
};

Location.propTypes = {  
};

Location.defaultProps = {};

export default Location;
