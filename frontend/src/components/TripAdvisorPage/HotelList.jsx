import axios from "axios";
import { useEffect, useState } from "react";
import Geocode from "react-geocode";

const HotelList = () => {
    const[hotels, setHotels]=useState([]);
    const[toDate, setToDate]=useState('');
    const[fromDate, setFromDate] =useState('');
    const[address, setAddress] = useState("");
    const[latitude, setLatitude] = useState("");
    const[longitude, setLongitude] = useState("");
    
  
    // const [user, token] = useAuth();

  // gethotelLocation take in an address as an input which is using the input box down below. 
  async function gethotelLocation(address){
    try{
    let response = await Geocode.fromAddress(address); // This line as the code to wait untill it pull ths cordinated for the address 
    //entered into the input box. using Geocode here instead of using http response to input the information is a quick step to providing back the cordinates. 
    let {latitude, longitude}= response.result[0].geometry.location;
    setLatitude(latitude);
    setLongitude(longitude);
  }catch(error){
    console.log("Error in  geocode add", error)
  }
  }
      
	async function fetchHotels() {
    try {
      let response = await axios.get(`https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=${latInput}&longitude=${longInput}&checkIn=${fromDate}&checkOut=${toDate}&pageNumber=1&currencyCode=USD`,
        {
					headers: {
			      'X-RapidAPI-Key':  '3209788d98msh7972559b7c7ebe3p199943jsn5a92dd09c0e7',
						'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
					},
        }
			);
      console.log("Response data:", response.data); // Check the structure of the response data
    const hotelsData = response.data.data.data; // Assuming the array of hotels is under the 'hotels' updater
    setHotels(hotelsData); // Set the hotels state to the array of hotels
  } catch (error) {
    console.log("Error in fetching hotels", error);
    console.log("Hotels before rendering", hotels);        
        }
    }

     useEffect(() => {
       fetchHotels();
     }, []);
     
     const handleFormSubmit = (event) => {
      event.preventDefault();
      fetchHotels();
    };
    const handleFromDateChange = (event) => {
      setFromDate(event.target.value);
    };
    const handleToDateChange = (event) => {
      setToDate(event.target.value);
    };
    const handleLatitudeChange = (event) => {
      setLatitude(event.target.value);
    }
    const handleLongitudeChange = (event) => {
      setLongitude(event.target.value);
    }





    return ( <div>
    <div>
    </div>

    <form onSubmit={(e) => handleFormSubmit(e)}>
    <input type="date" value ={fromDate} placeholder="Select a date" onChange={handleFromDateChange}/>
    <input type="date" value ={toDate} placeholder="Select a date" onChange={handleToDateChange}/>
    <input type="text" value ={address} Placeholder ="Enter City" onChange={(event) => setAddress(event.target.value)}/>
    
      <button type="submit">Search Hotels</button>
    </form>


			
      <div>
      <h1>Hotel List</h1>
      {/* Conditional rendering check {hotels.length > 0 ? ( hotels.map((hotel)}. 
      My page was rendering faster than my api was able to be mapped over.
      in the future if you run into an api giving the error Map is not a function run a conditional render check. */}
      {hotels.length > 0 ? (
        hotels.map((hotel) => (
          <div key={hotel.id}>
            <h2>{hotel.title}</h2>
                {hotel.provider}<br/>
            City: {hotel.secondaryInfo}
            <p>{hotel.priceForDisplay}</p>
            

          </div>
        ))
      ) : (
        <p>Loading hotels...</p>
      )}
    </div>
    </div>
  );
}
 
export default HotelList; 












