import {Component} from 'react'
import { Container } from '../components/container/Container.styled';
import { Section } from "../components/section/Section";
import Button from '../components/buttons';



export class App extends Component {
render() {

  return (
    <Container>
   <Section title ="Main">
   
   <Button>Ripple</Button>
    </Section>
   
    </Container>


   
    )}  
};