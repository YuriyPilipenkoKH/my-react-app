import React, { useState } from "react";
import { NListItem } from "./newList.styled";


const MyList = () => {
    const [items, setItems] = useState([
      { id: 1, text: "Item 1" },
      { id: 2, text: "Item 2" },
      { id: 3, text: "Item 3" }
    ]);
  
    const handleDelete = id => {
        setItems(items =>
          items.map(item => {
            if (item.id === id) {
              return { ...item, deleted: true };
            }
            return item;
          })
        );
        setTimeout(() => {
          setItems(items => items.filter(item => item.id !== id));
        }, 300); // adjust the delay as needed to match the transition duration
      };

    // const handleDelete = id => {
    //     setItems(items => items.filter(item => item.id !== id));
    //   };
  
    return (
      <ul>
        {items.map(item => (
          <NListItem
            key={item.id}
            className={item.deleted ? "deleted" : ""}
          >
            {item.text}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </NListItem>
        ))}
      </ul>
    );
  };
  
  export default MyList;