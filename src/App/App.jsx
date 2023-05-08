import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import Button from '../components/buttons/buttons';
// import Notification from '../components/Notification/Notification';
import {  iconReactHook } from '../utils/svgIcons';
import ColorPicker from '../components/ColorPicker/ColorPicker';
import SignupForm from '../components/SignupForm/SignupForm';

export class App extends Component {
render() {

  return (
   <Container>
     <SignupForm></SignupForm>
   <Section title ="Main">
  
{/*    
   <Button>Ripple {iconReact}</Button> */}
   <Button>React {iconReactHook}</Button>
    </Section>

    <ColorPicker></ColorPicker>
    {/* <Notification></Notification> */}

   </Container>

    )}  
};
//===================================
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