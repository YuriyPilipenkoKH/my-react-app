import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import Notiflix from 'notiflix';
import { nanoid } from "nanoid";
// import '../utils/checkForEmptyList'


export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${newContact.name} is alredy in contacts.`);
      return;
    } else if (
      this.state.contacts.find(
        contact => contact.number.toString() === newContact.number
      )
    ) {
      Notiflix.Notify.failure(`${newContact.number} is alredy in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    Notiflix.Notify.success(`Contact added`);
    // console.log(newContact);
    // console.log(this.state.contacts);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
    Notiflix.Notify.warning(`Contact deleted`);
  };

  // checkForEmptyList =() => {
  //   const field = document.querySelector('.filter__field')
  //   console.log(field);

  //   if(this.state.contacts.length === 0) {
  //     field.disabled = true;
  //   }

  // }

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

render() {
  const { contacts, filter } = this.state;
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toString().includes(filter)
  );

  return (
    <Container>
   <Section title = "Phonebook"> 
   <ContactForm onSubmit={this.addContact} />
   
   </Section>

   <Section title = "Contacts"> 
   <Filter value={filter} onFilterChange={this.filterChange} />
   {this.state.contacts.length > 0  &&
        <ContactList
        options={filteredContacts}
        onDeleteContact={this.deleteContact}
      />
   }
   </Section>
    </Container>

       )}   
};

// const myApp = new App()
// myApp.checkForEmptyList()