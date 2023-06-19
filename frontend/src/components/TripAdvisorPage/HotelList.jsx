import axios from "axios";
import { useEffect, useState } from "react";
import Geocode from "react-geocode";
import "./HotelList.css";
import hotel1 from "../../assets/hotl.jpg";
import hotel2 from "../../assets/Hotel3.jpg";
import hotel3 from "../../assets/hotel.jpg"



const HotelList = () => {
    const[hotels, setHotels]=useState([]);
    const[toDate, setToDate]=useState('');
    const[fromDate, setFromDate] =useState('');
    const[address, setAddress] = useState("");
    const[lat, setLat] = useState("");
    const[lng, setLng] = useState("");
    
    // const [user, token] = useAuth();
    Geocode.setApiKey("AIzaSyDtdf0GQW4QRWvnh2AMXwXCvBTbGyyG58g");
  // gethotelLocation take in an address as an input which is using the input box down below. // Get latitude & longitude from address
  async function gethotelLocation(address){
    try{
    let response = await Geocode.fromAddress(address); // This line as the code to wait untill it pull ths cordinated for the address 
    //entered into the input box. using Geocode here instead of using http response to input the information is a quick step to providing back the cordinates. 
    if (response && response.results && response.results.length > 0) {
      let {lat, lng}= response.results[0].geometry.location; //
    setLat(lat);
    setLng(lng);
    console.log("No results found for the address:", address);
  }
} catch (error) {
  console.log("Error in geocode address", error);
}
}
	async function fetchHotels() {
    try {
      let response = await axios.get(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=${lat}&longitude=${lng}&checkIn=${fromDate}&checkOut=${toDate}&pageNumber=1&currencyCode=USD`,
        {
					headers: {
			      'X-RapidAPI-Key':  'ebca4246cbmshfdb935bd9e33d2bp16cdacjsn55f3c899903a',
						'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
					},
        }
			);
      console.log("Response data:", response.data); // Check the structure of the response data
    const hotelsData = response.data.data.data; // Assuming the array of hotels is under the 'hotels' updater, and it is nested in th array far enough this is needed.
    setHotels(hotelsData); // Set the hotels state to the array of hotels
  } catch (error) {
    console.log("Error in fetching hotels", error);
    console.log("Hotels before rendering", hotels);        
        }
    }
     useEffect(() => {
       fetchHotels();
     }, [lat, lng, fromDate, toDate]);//!including these values as dependencies, the effect will be re-run whenever any of them change. 
     //!This ensures that the hotels are fetched again with the updated values whenever the user selects a new date or enters a new address.
     //!Without specifying the dependencies, the effect would only run once when the 
     //!component mounts and would not respond to changes in latitude, longitude, fromDate, or toDate.
     
     const handleFormSubmit = (event) => {
      event.preventDefault();
      gethotelLocation(address);
      fetchHotels();
    };
    const handleFromDateChange = (event) => {
      setFromDate(event.target.value);
    };
    const handleToDateChange = (event) => {
      setToDate(event.target.value);
    };
    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    };





    return ( <div className="hotelpage">
      <main>
      
    
    <div>
    <div class="container py-3">
  <div class="row">
    <div class="col ">
      <div className="hotelpics">
      <img src={hotel1} alt="Hotel"/>
      </div>
    </div>
    <div class="col">
      <form onSubmit={(e) => handleFormSubmit(e)}>
      
      <div className="inputdates">
      <h2>Check in date</h2>
    <input type="date" value ={fromDate} placeholder="Select a date" onChange={handleFromDateChange}/>
   
    <h2>Check out date</h2>
    <input type="date" value ={toDate} placeholder="Select a date" onChange={handleToDateChange}/>
    <br/>
    <br/>
    <h3>Location of hotel</h3>
    <p>Enter city and state<br/>Example: Atlanta, GA </p>
    <p></p>
      <input type="text" value ={address} placeholder ="Enter City" onChange={handleAddressChange}/>
      <button type="submit" class="btn btn-secondary">Search Hotels</button>
      </div>
    </form>
    </div>
    <div class="row">
      <div>
      <h1>Hotel List</h1>
      {/* Conditional rendering check {hotels.length > 0 ? ( hotels.map((hotel)}. 
      My page was rendering faster than my api was able to be mapped over.
      in the future if you run into an api giving the error Map is not a function run a conditional render check. */}
      {hotels.length > 0 ? (
        hotels.map((hotel) => (
          <div key={hotel.id}>
            {/* <h1>{hotel.cardPhotos}</h1> */}
            <h2>Name:{hotel.title}</h2>
              Website: {hotel.provider}<br/>
            City: {hotel.secondaryInfo}
            <p>Price:{hotel.priceForDisplay}</p>
            

          </div>
        ))
      ) : (
        <p>Loading hotels...</p>
      )}
    </div>
    </div>
    
  </div>
</div>
    
    
    </div>


			
      
    </main>
    </div>
  );
}


 
export default HotelList; 













