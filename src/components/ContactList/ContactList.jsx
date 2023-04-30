import { Butt } from "../buttons/buttons.styled"
import { Btns } from "./ContactList.styled"
import { LItem, List } from "./ContactList.styled"



export const ContactList = ({ options, onDeleteContact }) => {
    

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
                onClick={() => onDeleteContact(contact.id, contact.name)}
                >Delete</Btns>
            </LItem>
                   
           )
        })}
    </List>
)
}