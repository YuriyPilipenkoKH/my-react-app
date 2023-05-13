import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import Button from '../components/buttons/buttons';
import Notification from '../components/Notification/Notification';
import {  iconReactHook } from '../utils/svgIcons';
import ColorPicker from '../components/ColorPicker/ColorPicker';
import SignupForm from '../components/SignupForm/SignupForm';
import Counter from '../components/Counter/Counter';
import LoadingSpinner from '../components/Loader/Loader';
import Range from '../components/Range/Range';

export class App extends Component {
state = {
  isLoading: false,
  isSpinning: false,
  spinColor: '#888',
  animeTime: '3',
}

componentDidMount() {
  setTimeout(() => {
    this.setState({ isLoading: false});
  }, 4000);
}

 colorSetter =(color)=> {
 this.setState({spinColor: color})
}

spinToggler=()=> {
  this.setState(prevState => ({
    isSpinning: prevState.isSpinning ? false : true
  }));
// this.setState(prevState => {
//   if (prevState.isSpinning)
//       return ({isSpinning: false});
//     if (!prevState.isSpinning)
//       return ({isSpinning: true});
   
// });
}

timeSetter = (value) => {
  this.setState({animeTime: value})
}


render() {
  const {spinColor , isSpinning, animeTime} = this.state

  return (
   <Container>
     <SignupForm ></SignupForm>
   <Section title ="Main">
  
{/* <Button>Ripple {iconReact}</Button> */}

   <Button onClick={this.spinToggler}>React {iconReactHook}</Button>
    </Section>

    <LoadingSpinner
     isSpinning = {isSpinning} 
     color = {spinColor}
     time = {animeTime}
     ></LoadingSpinner>

     <Range onChange ={this.timeSetter}></Range>

    <ColorPicker
     setColor ={this.colorSetter}
     ></ColorPicker>

    <Notification></Notification>

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