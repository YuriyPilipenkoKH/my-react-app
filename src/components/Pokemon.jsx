import React, { Component } from 'react'
import { ToastContainer} from 'react-toastify';

export  class Pokemon extends Component {
   componentDidMount (name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
        .then(res => res.json())
        .then(console.log())
  }  

  render() {
    return (
      <div style= {{maxWidth: 1220}}>
        <ToastContainer></ToastContainer>       
       </div>
    )
  }
}
