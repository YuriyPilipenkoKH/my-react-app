import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import Button from '../components/buttons/buttons';
import Notification from '../components/Notification/Notification';


export class App extends Component {
render() {

  return (
   <Container>
   <Section title ="Main">
   
   <Button>Ripple</Button>
   <Button>Ripple</Button>
    </Section>
    <Notification></Notification>

   </Container>

   
   

   
    )}  
};