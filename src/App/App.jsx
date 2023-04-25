import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import { ContactForm } from '../components/ContactForm/ContactForm';



export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

render() {

  return (
    <Container>
   <Section title = "Phonebook"> 
   <ContactForm/>
   
   </Section>

   <Section title = "Contacts"> 
   
   </Section>

    </Container>


       )}  
};