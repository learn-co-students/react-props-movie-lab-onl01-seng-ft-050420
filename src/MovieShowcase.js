import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    //debugger
    return movieData.map(({title, IMDBRating, genres, poster}) => {
      
    return <MovieCard
    title = {title} // prop names = {prop values} // it is creating a normal object with keys and vales
    IMDBRating = {IMDBRating}
    genres = {genres}
    poster = {poster}/>

  })}
  //Why did this work?

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        
      </div>
      
    )
  }
}
