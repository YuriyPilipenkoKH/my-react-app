import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import Button from '../components/buttons/buttons';
// import Notification from '../components/Notification/Notification';
import {  iconReactHook } from '../utils/svgIcons';
import ColorPicker from '../components/ColorPicker/ColorPicker';
import SignupForm from '../components/SignupForm/SignupForm';
import Counter from '../components/Counter/Counter';
import LoadingSpinner from '../components/ColorPicker/Loader/Loader';

export class App extends Component {
state = {
  isLoading: false,
  spinColor: '#888',
}

componentDidMount() {
  setTimeout(() => {
    this.setState({ isLoading: true});
  }, 4000);
}

 colorSetter =(color)=> {
 this.setState({spinColor: color})
}

toggler() {
  
}


render() {
  const {spinColor} = this.state

  return (
   <Container>
     <SignupForm ></SignupForm>
   <Section title ="Main">
  
{/*    
   <Button>Ripple {iconReact}</Button> */}
   <Button onClick={this.toggler}>React {iconReactHook}</Button>
    </Section>
    <LoadingSpinner color = {spinColor}></LoadingSpinner>

    <ColorPicker setColor ={this.colorSetter}></ColorPicker>
    {/* <Notification></Notification> */}

    <Counter></Counter>

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