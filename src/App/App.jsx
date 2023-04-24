import {Component} from 'react'

import { Section } from "../components/section/Section";
import { LoginForm } from "../components/LoginForm/LoginForm";


export class App extends Component {
render() {

  return (
    <Section title ="Formik" >
        <LoginForm/>
    </Section>  
    );}  };