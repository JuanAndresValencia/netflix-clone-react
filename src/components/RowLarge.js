import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const RowLarge = ({base_url, base_img, movie_genre_url, movie_genre_name}) => {

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
      <ContainerMovieImg>
        
         {
             movies.map((singleMovie, i) => (
                 <ContainerSingleMovie key={i}>
                     <img src={`${base_img}${singleMovie.poster_path}`} alt='movies imgs'/>
                 </ContainerSingleMovie>
             ))
         }
      </ContainerMovieImg>
    </Container>
  )
}

export default RowLarge;


const Container = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
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
   overflox-x: scroll;
   padding: 15px;
   margin-top: 10px;

   ::-webkit-scrollbar{
      visibility: hidden;
   }


   img{
       width: 176px;
       height: 259px;
       object-fit: cover;
       transition: all 0.7s;

       &:hover{
           transform: scale(1.1);
       }
   }
`

const ContainerSingleMovie = styled.div`
   padding: 5px;
`