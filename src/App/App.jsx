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
}

componentDidMount() {
  setTimeout(() => {
    this.setState({ isLoading: false});
  }, 4000);
}


render() {
  const {isLoading} = this.state

  return (
   <Container>
     <SignupForm></SignupForm>
   <Section title ="Main">
  
{/*    
   <Button>Ripple {iconReact}</Button> */}
   <Button>React {iconReactHook}</Button>
    </Section>
    {isLoading ? (
          <LoadingSpinner size={80} color="#ff0000" />
        ) : (
          <h1>Loaded!</h1>
        )}

    <ColorPicker></ColorPicker>
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