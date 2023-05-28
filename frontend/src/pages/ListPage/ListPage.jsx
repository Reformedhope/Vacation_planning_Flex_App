import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const ListPage = (props) => {
    const [user, token] = useAuth();
    const [items, setItems] = useState([]);
    const [itemsNeeded, setItemsNeeded] = useState(0); 
    console.log(user)
    console.log(token)

   
        useEffect(() => {
            const fetchItems = async () => {
              try {
                let response = await axios.get("http://127.0.0.1:8000/api/vacation/lists/list/", {
                  headers: {
                    Authorization: "Bearer " + token,
                  },
                });
                setItems(response.data);
              } catch (error) {
                console.log(error.response.data);
              }
            };
            fetchItems();
          }, [token]);

    
    return ( 
        <ol>
            {items && items.map((item) => (
          <p key={item.id}>
            <li>{item.items} {item.items_needed}</li>
          </p>
        ))}
        </ol>




    );
}
 
export default ListPage;