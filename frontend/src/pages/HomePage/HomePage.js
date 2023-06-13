import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './HomePage.css';


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);
  return (
    <div className="container">
      <h1>Welcome {user.username}!</h1>
      <h2>Thank you for signing in. This website is designed to help you select a vacation.<br/>
       You will need to input a few details so we can find the best vacation for you.</h2>
       <hr/>
       <h3> Please click the button below to start the process of finding a random vacation spot.</h3>
       
     <p>
      <div className="button">
      <Link to  ="RandomDestinationPage">Vacation Finder</Link>
      <p>Hello</p>
      </div>
      </p>
     

      {cars && cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
    </div>
  );
};




export default HomePage;
