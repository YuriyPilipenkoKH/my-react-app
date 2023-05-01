import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import { Button1 } from '../components/buttons/buttons';
import Button from '../components/GPT/Button';
// import { FormOne } from '../components/FormOne/FormOne';
// import ComplexForm from '../components/complexForm/complexForm';
import { FormikLib } from '../components/Formik/Formik';
import { ContactList } from '../components/ContactList/ContactList';
import { nanoid } from "nanoid";
import Notiflix from 'notiflix';
import MyList from '../components/newList/newList';
import Modal from '../components/Modal/Modal';



export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    showModal:false,
  };

  toggleModal =() =>  {

    this.setState(({showModal}) => ({
      showModal: !showModal,
    }) )
  }

  deleteContact = (contactId, contactName) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
   
    Notiflix.Notify.warning(`${contactName} deleted`);
  };


render() {
  const { contacts, showModal} = this.state;
  return (
    <Container>
   <Section title ="Main">

    {/* <FormOne></FormOne> */}
    {/* <ComplexForm onSubmit={values => console.log(values)} /> */}
    <FormikLib></FormikLib>

   <Button1 
   onClick={this.toggleModal}
   >Ripple</Button1>

   <Button>Click me!</Button>
    </Section> 
    <ContactList 
    options ={contacts}
    onDeleteContact={this.deleteContact}
    />
    {showModal && <Modal onClose = {this.toggleModal}>
      <h2>Main Modal</h2>
      <button 
      type='button'
      onClick={this.toggleModal}
      >shut</button>
      </Modal>}
    

    <MyList></MyList>
   
    </Container>

   
    )}  
};