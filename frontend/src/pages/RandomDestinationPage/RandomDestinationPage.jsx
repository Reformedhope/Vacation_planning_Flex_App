import React from "react";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import axios from "axios";
import RandomDestionationForm from "../../components/RandomDestinationForm/RandomDestinationForm";
import { Link } from "react-router-dom";

const RandomDestination = (props) => {
  const [budgetDestinations, setBudgetDestinations] = useState([]);
  const [user, token] = useAuth();
  const [searchInput, setSearchInput] = useState("");
  const [destinationInput, setDestinationInput] = useState("");

  const fetchBudgetDestinations = async () => {
    try {
      
      let response = await axios.get(
        `http://127.0.0.1:8000/api/destination/budget/${searchInput}/?terrain=${destinationInput}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      
      setBudgetDestinations(response.data);
      console.log(response.data);
      
    } catch (error) {
      console.log(error.response.data);
    }
  };
  // function combineInputs = (e)


  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // setSearchInput(event.target.value);
    fetchBudgetDestinations(searchInput,destinationInput);
  };
  const handleBudgetChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleDestinationChange = (event) => {
    setDestinationInput(event.target.value);
  };

  return (
    <div>
      <div>
        Select your options for a vacation
      </div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <select
          id="budgetydropdown"
          value={searchInput}
          onChange={handleBudgetChange}
        >
          <option value="">Select an option</option>
          <option value="1">Ballin on a budget</option>
          <option value="2">Fair</option>
          <option value="3">Treat Yo Self</option>
        </select>
      </form>
      
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <select
          id="destinationdropdown"
          value={destinationInput}
          onChange={handleDestinationChange}
        >
          <option value="">Select an option</option>
          <option value="Island">Island</option>
          <option value="Beach">Beach</option>
          <option value="Desert">Desert</option>
          <option value="Mountain">Mountain</option>
        </select>
        <button type="submit">Search for a Vacation that matches your preference</button>
      </form>
    
      <div> 
        
      </div>
      <RandomDestionationForm destInput={budgetDestinations}/>
      <Link to="googlepage">Plan your route!</Link>
      
    </div>
  );

};

export default RandomDestination;
