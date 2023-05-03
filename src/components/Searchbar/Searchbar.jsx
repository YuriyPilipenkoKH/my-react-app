import React, { Component } from 'react'
import { SearchHeader } from './Searchbar.styled'

export class Searchbar extends Component {
    state= {
        query: '',
    }

    handleChange = e => {
        const  searchQuery  = e.target.value.trim();
        // console.log(e);
        console.log(searchQuery);
        this.setState({  query: searchQuery });
        

    }// this.setState(prevState => ({ query: prevState.query + 1 }));

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);

        // this.resetForm();
    }

    resetForm = () => {
        this.setState({ query: '' });
      };


  render() {
    return (
      <SearchHeader className="searchbar">
     <form
      onSubmit={this.handleSubmit} 
      className="form">
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
     name="query"
    //  value={this.state.query}
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
    />
  </form>
</SearchHeader>
    )
  }
}
