import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Row = ({base_url, base_img, movie_genre_url, movie_genre_name}) => {

  const [ movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(`${base_url}${movie_genre_url}`)
    .then(response => {
        setMovies(response.data.results)
    })
  }, [base_url, movie_genre_url])



  return (
    <Container>
      <ContainerMovieTitle>
        <h1>{movie_genre_name}</h1>
      </ContainerMovieTitle>
      <ContainerMovieImg >
        
         {
             movies.map((singleMovie, i) => (
                 <ContainerSingleMovie key={i}>
                     <img src={`${base_img}${singleMovie.backdrop_path}`} alt='movies imgs'/>
                 </ContainerSingleMovie>
             ))
         }
      </ContainerMovieImg>
    </Container>
  )
}

export default Row

const Container = styled.div`
   @media screen and (max-width: 750px){
      margin-left: -25px;
   }
`

const ContainerMovieTitle = styled.div`
   h1{
      font-family: 'Ubuntu', sans-serif;
      font-weight: 700;
   }

   @media screen and (max-width: 750px){
    font-size: 15px;
  }
`

const ContainerMovieImg = styled.div`
   width: 100%;
   display: flex;
   overflow-y: hidden;
   overflow-x: scroll;
   padding: 15px;
   margin-top: 10px;

   ::-webkit-scrollbar{
      visibility: hidden;
   }

   img{
       width: 250px;
       transition: 1s all;
       object-fit: cover;

       &:hover{
           transform: scale(1.15);
       }
   }
`

const ContainerSingleMovie = styled.div`
   padding: 5px;
`