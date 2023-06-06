import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";



const AddAitem = (props) => {
     const[user, token]= useAuth();
     const[item, setItem]= useState([]);
     const[itemsNeeeded, setItemsNeeded] =useState(0);
    
    
    
    
    function handleSubmit(event){    
        // event.preventDefault();
        let newItem = {
            items: item,
            items_needed:itemsNeeeded,
        };
        createAItem(newItem)
    }

    async function createAItem(newItem){
        try{
        let response = await axios.post ('http://127.0.0.1:8000/api/vacation/lists/list/',newItem, {
            headers:{
                Authorization:'Bearer ' + token
              }

        })
    }catch(error){
        console.log(error.message)
    }

    }
    
    
    
    return (
    
        <div>
         
        <form onSubmit={handleSubmit}>
            <input type='text' value={item} onChange={(event) => setItem(event.target.value)}/>
            <input type='number' value={itemsNeeeded} onChange={(event) => setItemsNeeded(event.target.value)}/>
            <button type='submit'>Add Another Item</button>
        </form>
        </div>
           












     );
}
 
export default AddAitem;