import {Component} from 'react'
import { Container } from '../components/container/Container.styled';
import { Section } from "../components/section/Section";
import Button from '../components/buttons/buttons';
// import { FormOne } from '../components/FormOne/FormOne';
// import ComplexForm from '../components/complexForm/complexForm';
import { FormikLib } from '../components/Formik/Formik';

export class App extends Component {
render() {

  return (
    <Container>
   <Section title ="Main">

    {/* <FormOne></FormOne> */}
    {/* <ComplexForm onSubmit={values => console.log(values)} /> */}
    <FormikLib></FormikLib>

   {/* <Button>Ripple</Button> */}
    </Section>
   
    </Container>

   
    )}  
};