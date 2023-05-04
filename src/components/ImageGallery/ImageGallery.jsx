import React, { Component } from 'react'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export  class ImageGallery extends Component {
  state = {
    images: [],
  }

  componentDidUpdate(prevProps, prevState) {
    
    const KEY = '34491623-5c4ef369d6c59f62bc483440c';
    const BASE_URL = 'https://pixabay.com/api';
    const page = 1
    const perPage = 20
    const query = this.props.searchQuery

   if(prevProps.searchQuery !== this.props.searchQuery) {
    
    fetch(`${BASE_URL}/?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.hits);
      this.setState({  images: data.hits })
    })
   }
  }
  



  render() {
    this.state.images.map(image =>  {
      // const { id, largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
     })
    return (
      <ul className="gallery">

      
      </ul>
    )
  }
}

