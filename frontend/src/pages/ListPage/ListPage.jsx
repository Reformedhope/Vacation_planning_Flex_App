import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import AddAitem from "../../components/AddAItem/AddAItem";

const ListPage = (props) => {
  const [user, token] = useAuth();
  const [items, setItems] = useState([]);
  console.log(user);
  console.log(token);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/vacation/lists/list/",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setItems(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchItems();
  }, [token]);
 

  return (
    <div>
      <h2>{user.username}</h2>
              <h1>Packing List</h1>
      <AddAitem fetchItems={items} />
      <ol style={{listStyleType: "none"}}>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <input type="checkbox" />
              {item.items} {item.items_needed}
            </li>
          ))}
      </ol>
      {/* <ol>
      <li>Phone Charger</li>
      <input type="checkbox"/>
    <li> Extra Shoes</li>
              <li>Comfy Slipper or socks</li>
              <li>Pillow</li>
              <li>Loofa or Washcloth</li>
      </ol> */}


    </div>
  );
};



export default ListPage;
