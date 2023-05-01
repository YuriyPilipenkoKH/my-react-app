// import { Butt } from "../buttons/buttons.styled"
import { Btns } from "./ContactList.styled"
import { LItem, List } from "./ContactList.styled"
import React, { useState } from "react";


export const ContactList = ({ options, onDeleteContact }) => {

    const [items, setItems] = useState(
        []
    )

    const handleDelete = id => {
        setItems(items =>
          items.map(item => {
            if (item.id === id) {
              return { ...item, deleted: true };
            }
            return item;
          })
        );
      };

return (
    
    <List key = {options.id}>
        {options.map(contact => {
   
           return(
            <LItem key = {contact.id}
     
          
            >
                <span className="cardSpan"

                >{contact.name}: {contact.number} </span>
                <Btns
                type = 'button'
                onClick={() => handleDelete(contact.id, contact.name)}
                >Delete</Btns>
            </LItem>
                   
           )
        })}
    </List>
)
}