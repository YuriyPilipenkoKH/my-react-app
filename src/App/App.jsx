import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
// import Button from '../components/buttons/buttons';
// import { FormOne } from '../components/FormOne/FormOne';
// import ComplexForm from '../components/complexForm/complexForm';
import { FormikLib } from '../components/Formik/Formik';
import { ContactList } from '../components/ContactList/ContactList';
import { nanoid } from "nanoid";
import Notiflix from 'notiflix';

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

  deleteContact = (contactId, contactName) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
   
    Notiflix.Notify.warning(`${contactName} deleted`);
  };


render() {
  const { contacts} = this.state;
  return (
    <Container>
   <Section title ="Main">

    {/* <FormOne></FormOne> */}
    {/* <ComplexForm onSubmit={values => console.log(values)} /> */}
    <FormikLib></FormikLib>

   {/* <Button>Ripple</Button> */}
    </Section>
    <ContactList 
    options ={contacts}
    onDeleteContact={this.deleteContact}
    />
   
    </Container>

   
    )}  
};