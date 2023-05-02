import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import Button from '../components/buttons/buttons';
import { PokemonForm } from '../components/Pokemon/PokemonForm';

export class App extends Component {
  state = {
    pokemonName: '',
    pokemon: null,
    loading: false,
  }

  componentDidUpdate( prevProps,prevState) {
    console.log(prevProps);
    console.log(prevState);
    console.log(this.state);
  }

//   componentDidMount (number) {
//     this.setState({loading: true})

// setTimeout(() => {
  
//   fetch(`https://pokeapi.co/api/v2/pokemon/12`)
//   .then(res => res.json())
//   .then(pokemon => this.setState({pokemon}))
//   .finally(() => this.setState({loading: false}))
// }, 2000);
 

//   }  

  // handleSubmit =(pokemonName) => {
  //   this.setState({pokemonName})
  // }

  handleFormSubmit = (pokemonName) => {
    this.setState({pokemonName})
  }

render() {

  return (
    <Container>
   <Section title ="Pokemon">
    <PokemonForm
    submit ={this.handleFormSubmit}
    ></PokemonForm>
   
   
   <Button>Ripple</Button>
    </Section>
    {this.state.loading && <h2>WAIT. . . </h2>}
    {this.state.pokemon && (
      <div> {this.state.pokemon.name}</div>
    )}
    </Container>

   
    )}  
};