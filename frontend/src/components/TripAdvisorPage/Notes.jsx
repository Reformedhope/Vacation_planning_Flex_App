// Object destructuring 

//! object:
//? let House = {
// ?    bedrooms: 5,
//?    bathrooms: 2,
//?     backyardTerrain: "grassy",
//?     location: "chicago"
//? }



//!object destructuring
//?let {bedrooms, bathrooms, backyardTerrain, location} = house

//?console.log(bedrooms);       5
//?console.log(bathrooms);       2 
//?console.log(backyeardTerrain);   "grassy"
//?console.log(location);           "chicago"

//! Another Example
//? When you pull things onto the screen after mapping over them to display the information you are destruction the 
//?object to pull back what properties you want from the object.
{/* <div>
      <h1>Hotel List</h1> */}
      {/* Conditional rendering check {hotels.length > 0 ? ( hotels.map((hotel)}. 
      My page was rendering faster than my api was able to be mapped over.
      in the future if you run into an api giving the error Map is not a function run a conditional render check. */}
    //!   {hotels.length > 0 ? (
    //!     hotels.map((hotel) => (
    //!       <div key={hotel.id}>
    //!         <h2>{hotel.title}</h2>
    //!             {hotel.provider}<br/>
    //!         City: {hotel.secondaryInfo}
    //!         <p>{hotel.priceForDisplay}</p>
    //!       </div>
    