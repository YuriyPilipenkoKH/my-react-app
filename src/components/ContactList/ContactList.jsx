import { PropTypes } from 'prop-types';
import { List, ListItem,ItemCard, ContactListBox } from './ContactList.styled';
import { BtnDelete } from './ContactList.styled';


export const ContactList = ({ options, onDeleteContact }) => {
  return (
    <ContactListBox>
      <List>
        {options.map(contact => {
          return (
            <ListItem key={contact.id}>
                <ItemCard
                className='cardSpan'
                > {contact.name}: {contact.number}</ItemCard>
             
              <BtnDelete 
              type="button" 
              onClick={() => onDeleteContact(contact.id)}>
                Delete
              </BtnDelete>
            </ListItem>
          );
        })}
      </List>
    </ContactListBox>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
