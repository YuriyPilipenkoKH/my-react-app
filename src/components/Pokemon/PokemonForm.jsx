import React, { Component } from 'react'
import {ImSearch} from 'react-icons/im'

export  class PokemonForm extends Component {

    state = {
        pokemonName: '',
    }

handleNameChange = (e) => {
    this.setState({pokemonName: e.currentTarget.value.toLowerCase()})
    // console.log(this.props);
}    

handleSubmit =(e) => {
    e.preventDefault()

    if(this.state.pokemonName.trim() === '') {
        alert('empty')
        return
    }
    this.props.submit(this.state.pokemonName)
    this.setState({pokemonName: ''})
} 

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
         type='text'
         name='pokemonName'
         value= {this.setState.pokemonName}
         onChange={this.handleNameChange}
        />

        <button type='submit' >Find <ImSearch/></button>
      </form>
    )
  }
}
