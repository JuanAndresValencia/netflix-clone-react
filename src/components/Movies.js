import React from 'react'
import styled from 'styled-components'
import Row from './Row'
import RowLarge from './RowLarge'
import requests from '../requestsMovies'

const Movies = () => {

  const BASE_URL = 'https://api.themoviedb.org/3/'
  const BASE_IMG = 'https://image.tmdb.org/t/p/original/'

  return (
    <Container>
      <RowLarge base_url={BASE_URL} base_img={BASE_IMG} movie_genre_url={requests.getTrendings.url} movie_genre_name={requests.getTrendings.name}/>
      <Row base_url={BASE_URL} base_img={BASE_IMG} movie_genre_url={requests.getActionMovies.url} movie_genre_name={requests.getActionMovies.name}/>
      <Row base_url={BASE_URL} base_img={BASE_IMG} movie_genre_url={requests.getAnimationMovies.url} movie_genre_name={requests.getAnimationMovies.name}/>
      <Row base_url={BASE_URL} base_img={BASE_IMG} movie_genre_url={requests.getTvShows.url} movie_genre_name={requests.getTvShows.name}/>
      <Row base_url={BASE_URL} base_img={BASE_IMG} movie_genre_url={requests.getRomanceMovies.url} movie_genre_name={requests.getRomanceMovies.name}/>
      <RowLarge base_url={BASE_URL} base_img={BASE_IMG} movie_genre_url={requests.getHorrorMovies.url} movie_genre_name={requests.getHorrorMovies.name}/>
    </Container>
  )
}

export default Movies;


const Container = styled.div`
   width: 100%;
   position: relative;
   color: white;
   background-color: black;
   height: auto;
   padding: 20px 30px 10px 40px;
   
   @media screen and (max-width: 600px){
    margin-top: -90px;
    padding: 20px 0px 10px 30px;
   }
   
`