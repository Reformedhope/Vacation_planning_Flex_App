import React from "react";
// import { useNavigate } from "react-router-dom";
import {GoogleMap, useJsApiLoader, Marker} from "@react-google-maps/api";
// import useAuth from "../../hooks/useAuth";
// import useCustomForm from "../../hooks/useCustomForm";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const GooglePage = (props) => {
  const {isLoaded} = useJsApiLoader({
    id:'google-map-script',
    googleMapsApiKey: 'AIzaSyClV0CGLERxqtIe6ull7TumyTHq23H1kS4'
  })

  const[map, setMap] = React.useState(null)

  let onLoad = React.useCallback(function callback(map){
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  },[])

  const onUnmount = React.useCallback(function callback(map){
    setMap(null)
  },[])


  return isLoaded (
    <GoogleMap
    mapContainerStyle={containerStyle}
    center = {center}
    zoom={10}
    onLoad={onLoad}
    onUnmount={onUnmount}
    ></GoogleMap>

  );
};

export default GooglePage;






