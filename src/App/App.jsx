import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";



export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

render() {

  return (
    <Container>
   <Section title = "Phonebook"> 
   
   </Section>

   <Section title = "Contacts"> 
   
   </Section>

    </Container>


       )}  
};