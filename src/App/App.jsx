import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import Button from '../components/buttons/buttons';
import Notification from '../components/Notification/Notification';
import { iconReact, iconReactHook } from '../utils/svgIcons';


export class App extends Component {
render() {

  return (
   <Container>
   <Section title ="Main">
   
   <Button>Ripple {iconReact}</Button>
   <Button>Ripple {iconReactHook}</Button>
    </Section>
    <Notification></Notification>

   </Container>

   
   

   
    )}  
};

// function fn(a) {
//   return function() {
//     return a + 1
//   }
// }

// const newfn = fn(10) 

// console.log(newfn());
// console.log(newfn());
// console.log(newfn());
// console.log(newfn());
// console.log(newfn());
// console.log(newfn());