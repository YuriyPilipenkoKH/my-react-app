import {Component} from 'react'
import axios from "axios";
import { Container } from '../components/container/Container';
// import { Section } from "../components/section/Section";
// import Button from '../components/buttons/buttons';
import { Searchbar } from '../components/Searchbar/Searchbar';



export class App extends Component {
  state = {
    query: '',
  } 

imgSearch =(query) => {
  console.log('this.imgSearch');
  console.log(query);

  this.setState({  query: query });
  this.fetchImages(query)
  
}

componentDidMount(prevProps, prevState) {
 
}

fetchImages =(query) => {
  const KEY = '34491623-5c4ef369d6c59f62bc483440c';
  const BASE_URL = 'https://pixabay.com/api';
  const page = 1
  const perPage = 20

  fetch(`${BASE_URL}/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
  .then(res => res.json())
  .then(console.log)

}


render() {

  return (
    <Container>
  <Searchbar onSubmit={this.imgSearch}/> 
   
    </Container>

   
    )}  
};//