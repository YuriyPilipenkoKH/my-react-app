import {Component} from 'react'
import { Container } from '../components/container/Container';
import { Section } from "../components/section/Section";
import Button from '../components/buttons/buttons';
// import { Pokemon } from '../components/Pokemon';

export class App extends Component {
  state = {
    pokemon: null,
  }

  componentDidMount (number) {
    fetch(`https://pokeapi.co/api/v2/pokemon/12`)
        .then(res => res.json())
        .then(console.log)
  }  

  handleSubmit =(pokemonName) => {
    this.setState({pokemonName})
  }

render() {

  return (
    <Container>
   <Section title ="Pokemon">
    
   
   
   <Button>Ripple</Button>
    </Section>
    {this.state.pokemon && (
      <div> place for pokemons</div>
    )}
    </Container>

   
    )}  
};