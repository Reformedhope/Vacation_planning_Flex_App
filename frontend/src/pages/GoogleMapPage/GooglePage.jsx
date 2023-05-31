import React from "react";
// import { useNavigate } from "react-router-dom";
import {GoogleMap, useJsApiLoader, Marker} from "@react-google-maps/api";
// import useAuth from "../../hooks/useAuth";
// import useCustomForm from "../../hooks/useCustomForm";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



// This is the size of the map
const containerStyle = {
  width: '600px',
  height: '400px'
};


// This is where you are centering the map for the starter place when the map loads
const center = {
  lat: 41.85003,
  lng: -87.65005,
};

const GooglePage = (props) => {
  
  const[map, setMap] = React.useState(null)
  
  const {isLoaded} = useJsApiLoader({
    id:'google-map-script',
    googleMapsApiKey: 'AIzaSyClV0CGLERxqtIe6ull7TumyTHq23H1kS4'
  })


 

  // let onLoad = React.useCallback(function callback(map){
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map)
  // },[])

  const onUnmount = React.useCallback(function callback(map){
    setMap(null)
  },[])


  return isLoaded ? (
    
    <div>
      <box p = {4}
      borderRadius = 'large'
      m={4}
      backgroundcolor ='white'
      shadow = 'base'
      minwith = 'container.md'
      >
      <HStack spacing = {4}>
        <input type = 'text' placeholder="Starting Point"/>
        <input type = 'text' placeholder="Starting Point"/>
        <buttonGroup>
          <button colorScheme  ='pink' type= 'submit'></button>
          <IconButton
          aria-label ='center back'
          icon = {<FaTimes/>}
          onclick = {()=> alert(123)}>

          </IconButton>
        </buttonGroup>
      </HStack>

      </box>
      <marker>

      </marker>

 
    <div>
    <GoogleMap
    mapContainerStyle={containerStyle}
    center = {center}
    zoom={5}
    // onLoad={onLoad}
    onUnmount={onUnmount}
    onLoad = {(map) => setMap(map)}
    ></GoogleMap>
    <Link to  ="ListPage"> Create a List!</Link>

   </div>
   </div>
  ):<></>
};

export default GooglePage;








