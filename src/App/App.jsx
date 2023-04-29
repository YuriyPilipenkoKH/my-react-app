import {Component} from 'react'
import { Container } from '../components/container/Container.styled';
import { Section } from "../components/section/Section";
import Button from '../components/buttons/buttons';
import { FormOne } from '../components/FormOne/FormOne';

import ComplexForm from '../components/complexForm/complexForm';


export class App extends Component {
render() {

  return (
    <Container>
   <Section title ="Main">

    {/* <FormOne></FormOne> */}
   <ComplexForm></ComplexForm>
   <Button>Ripple</Button>
   {/* <Button>Ripple</Button> */}
    </Section>
   
    </Container>

   
    )}  
};