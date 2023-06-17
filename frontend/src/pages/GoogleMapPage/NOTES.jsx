// import React, { useRef, useState, useEffect } from "react";
// import {GoogleMap, useJsApiLoader, Marker, Autocomplete, DirectionsRenderer} from "@react-google-maps/api";
// import { Link } from "react-router-dom";
// //! this is for the size of the
// const containerStyle = {
//   width: '100%',
//   height: '500px'
// };
// //!This is for the postion of the google map
// const center = {
//   lat: 41.85003,
//   lng: -87.65005,
// };

// const GooglePage = () => {
//   const [map, setMap] = useState(null);
//   const [directionsResponse, setDirectionsResponse] = useState(null);
//   const [distance, setDistance] = useState('');
//   const [duration, setDuration] = useState('');
//   const originRef = useRef(null);// hook in React is used to create a mutable reference that can persist across re-renders of a functional component.
//   const destinationRef = useRef(null);
//   const markerTitleRef = useRef(null);
//   const markerDescriptionRef = useRef(null);
//   const presetmarkers = useRef([]);

//   // The isLoaded property is provided by the useJsApiLoader hook from the @react-google-maps/api package.
//   //  It indicates if the the Google Maps JavaScript API has been loaded and is ready for use in the app.
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: 'AIzaSyClV0CGLERxqtIe6ull7TumyTHq23H1kS4',
//     libraries: ['places'],
//   });

//   const onLoad = (map) => {
//     setMap(map);
//     // initMap(); // i need to call the initmap function to initialize the markers. 
//   };

//   const onUnmount = () => {
//     setMap(null);
//   };

//   const calculateRoute = async () => {
//     if (!originRef.current.value || !destinationRef.current.value) {
//       return;
//     }

//     const directionService = new window.google.maps.DirectionsService();
//     const response = await directionService.route({
//       origin: originRef.current.value,
//       destination: destinationRef.current.value,
//       travelMode: window.google.maps.TravelMode.DRIVING,
//     });

//     setDirectionsResponse(response);
//     setDistance(response.routes[0].legs[0].distance.text);
//     setDuration(response.routes[0].legs[0].duration.text);
//   };
//   // This function clears the route replacing the inputs with empty string aka null
//   const clearRoute = () => {
//     setDirectionsResponse(null);
//     setDistance('');
//     setDuration('');
//     originRef.current.value = '';
//     destinationRef.current.value = '';
//   };

//   /////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   useEffect(() => {
//     if (isLoaded && map) {
//       map.addListener("click", handleMapClick);;
//     }
//   }, [isLoaded, map]);
//   //!including these values as dependencies, the effect will be re-run whenever any of them change. 
//   //!This ensures that the map is fetched again with the updated values whenever the user adds, views,or deleteds markers to the map.
//   //!Without specifying the dependencies, the effect would only run once when the 
//   //!component mounts and would not respond to changes in markers.
  
//   let markers =useRef([]);

//   function  initMap(){
//     if (map){
//       map.addListener("click",(event) => { 
//         addMarker(event.latLng);
//       });
//       // ⬆️This event listener will call addMarker() when the map is clicked.
//       function addMarker(position, title, description) {
//         const marker = new window.google.maps.Marker({
//           position,
//           map: map,
//         });
      
//         // Create an info object with the desired information
//        let info = {
//           title: 'Marker Title',
//           description: 'Marker Description',
//         };
      
//         // Assign the info object as a property of the marker
//         marker.info = info;
      
//         markers.current.push(marker);
      
//         // Store the marker positions in local storage
//         const markerPositions = markers.current.map((marker) => ({
//           lat: marker.getPosition().lat(),
//           lng: marker.getPosition().lng(),
//           info: marker.info, // Include the info object in the marker positions
//         }));
//         localStorage.setItem('markerPositions', JSON.stringify(markerPositions));
//       }
    
//       // adds event listeners for the buttons
//       document.getElementById("show-markers")
//       .addEventListener("click",showMarkers);
    
//       document
//       .getElementById("hide-markers")
//       .addEventListener("click", hideMarkers);
    
//       document
//       .getElementById("delete-markers")
//       .addEventListener("click",deleteMarkers);
//     }
//   }
  


//   const loadMarkersFromLocalStorage = () => {
//     let markerData = JSON.parse(localStorage.getItem("markerData"));
//     if (markerData && markerData.length > 0) {
//       markerData.forEach((data) => {
//         let { position, info } = data;
//         let { title, description } = info;
//         addMarker(position, title, description);
//       });
//     }
//   };

//   //adds a marker to the map and push to array
//   function addMarker(position) {
//     const marker = new window.google.maps.Marker({
//       position,
//       map: map,
//     });
  
//     // Create an info object/marker with information
//     const info = {
//       title: 'Marker Title',
//       description: 'Marker Description',
//     };
  
//     // Assign the info object as a property of the marker
//     marker.info = info;
  
//     markers.current.push(marker);
  
//     //trying to store the marker positions in local storage....
//     const markerPositions = markers.current.map((marker) => ({
//       lat: marker.getPosition().lat(),
//       lng: marker.getPosition().lng(),
//       info: marker.info, // Include the info object in the marker positions
//     }));
//     localStorage.setItem('markerPositions', JSON.stringify(markerPositions));
//   }

//   //set the map on all markers in the array
//   function setMapOnAll(map){
//     for (let i = 0; i< markers.current.length; i++){
//       markers.current[i].setMap(map);
//     }
//   }

//   //Removes the markers from the map
//   function hideMarkers(){
//     setMapOnAll(null);
//   }

//   //shows any markers currently  in the array
//   function showMarkers(){
//     setMapOnAll(map);
//   }
//   // Deletes all markers in the array by removing references to them.

//   function deleteMarkers() {
//   hideMarkers();
//   markers.current = [];
//   }

//   let handleDropdownChange = (event) => {
//     setSelectedOption(event.target.value);



//   let handleMarkerFormSubmit = (event) => {
//     event.preventDefault();

//     let title = markerTitleRef.current.value;
//     let description = markerDescriptionRef.current.value;

//     if (title && description && map) {
//       const position = map.getCenter();
//       addMarker(position, title, description);

//       markerTitleRef.current.value = "";
//       markerDescriptionRef.current.value = "";
//     }
//   };

  
//   // initMap  = initMap;
  
//   //TODO: get the markers to stay and also get them to hold information. 



//   return isLoaded ? (
    
//     <div>
//       <section className="SearchBoxHolder">
//         <div id="floating-pannel">
//           <Autocomplete>
//             <input type='text' placeholder="Starting Point" ref={originRef} />
//           </Autocomplete>
//           <Autocomplete>
//             <input type='text' placeholder="Destination" ref={destinationRef} />
//           </Autocomplete>
//           <button className="" type='submit' onClick={calculateRoute}> Take a look at your route!</button>
//           <button className="" type='submit' onClick={clearRoute}>Clear Route</button>
//           {/* This renders only if there is a value in the input boxes, it will not show otherwise. */}
//           {distance && <p>Distance: {distance}</p>}
//           {duration && <p> Duration: {duration}</p>}
//         </div>
//       </section>
//       <div>
//       <form onSubmit={handleMarkerFormSubmit}>
//           <input type="text" placeholder="Title" ref={markerTitleRef} />
//           <input type="text" placeholder="Description" ref={markerDescriptionRef} />
//           <button type="submit">Add Marker</button>
//         </form>
//         <select value={selectedOption} onChange={handleDropdownChange}>
//         <option value="">Select an option</option>
//         <option value="Option 1">Option 1</option>
//         <option value="Option 2">Option 2</option>
//         <option value="Option 3">Option 3</option>
//       </select>
//       </div>
//       <div>

//         {/* This shows you the actual google map */}
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={5}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//         >
//           <div position={center} />
//           {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
//         </GoogleMap>
//         {isLoaded && map && window.initMap && window.initMap()}
//         <div id="floating-panel">
//       <input id="hide-markers" type="button" value="Hide Markers" />
//       <input id="show-markers" type="button" value="Show Markers" />
//       <input id="delete-markers" type="button" value="Delete Markers" />
//     </div>

       
//         <Link to="ListPage">Create a List!</Link>
       
//       </div>
//     </div>
//   ) : null;
// };
// }
// export default GooglePage;