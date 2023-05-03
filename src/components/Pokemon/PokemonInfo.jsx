import React, { Component } from 'react'


export  class PokemonInfo extends Component {
   componentDidMount (name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
        .then(res => res.json())
        .then(console.log())
  }  

  render() { 
    return (
      <div>
        <h1>PokemonInfo</h1>
        <p> {this.props.pokemonInfo}</p>
      </div>
    )
  }
}
