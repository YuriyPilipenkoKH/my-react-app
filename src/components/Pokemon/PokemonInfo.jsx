import React, { Component } from 'react'


export  class PokemonInfo extends Component {
  state = {
    pokemon: null,
    loading: false,
    notFound: false,
    error: null,
  }

   componentDidUpdate (prevProps, prevState) {  
    //
    const prevName = prevProps.pokemonName
    const nextName = this.props.pokemonName

    if(prevName !== nextName) {
      this.setState({
        loading: true,
        pokemon: null,
        notFound: false,
        })

      setTimeout(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
        .then(response => {
          if(response.ok) {
            return response.json()
          }
          return Promise.reject(new Error(`Could not find pokemon ${nextName}` ))
        })
        .then(pokemon => {
        
          this.setState({pokemon: pokemon})
        })
        .catch(error => {
          this.setState({
            error: error,
            notFound: true,
          })
        })
        .finally(() => this.setState({loading: false}))
      }, 1000);
    }
   
  }  

  render() { 
    const {pokemon, loading, notFound, error} = this.state
    const {pokemonName} = this.props
    return (
      <div>
      {/* {error && <h3> {error.message}</h3>}   */}
      {notFound && <h3>no such pokemon</h3>} 
      {loading && <div> . . . Loading . . . </div>}  
      {!pokemonName && <div>Enter pokemon name</div>}
      {notFound || loading || pokemon && (
      <div>
        <p>{pokemon.name}</p>
        <img 
        src = {pokemon.sprites.other['official-artwork'].front_default}
        alt="pic"
        width="180"        />
        </div>
      )}
      </div>
    )
  }
}
