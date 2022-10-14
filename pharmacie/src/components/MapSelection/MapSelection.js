import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react'
import './MapSelection.scss';
import {GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
const MapSelection = () => {
  const { isLoaded} =useLoadScript({
    googleMapsApiKey:'AIzaSyAdnmxkYlQfGdLOhnHQ_kh_L00TZgSpmFI'
  })
  if (!isLoaded) return <div>Not Loaded</div>  
  return <Map/>;
}
function Map() {
  return <GoogleMap zoom={17} center={{lat:37.42216,lng:-122.08427}} mapContainerClassName="mapContainer"></GoogleMap>
}
MapSelection.propTypes = {};

MapSelection.defaultProps = {};

export default MapSelection;
