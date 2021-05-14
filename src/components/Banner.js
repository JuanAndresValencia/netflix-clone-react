import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import netflixLogo from '../assets/netflixlogowelcome.png'
import avatar from '../assets/avatar1.png'
import requests from '../requestsMovies'
import { Link } from 'react-router-dom'

const Banner = ({base_url, base_img}) => {


  const [ bgMovie, setBgMovie ] = useState('')
  const [ nameMovie, setNameMovie ] = useState('')
  const [ descriptionMovie, setDescriptionMovie ] = useState('')

  useEffect(() => {
     axios.get(`${base_url}${requests.getTrendings.url}`)
     .then(response => {
         let data = response.data.results
         let random = Math.floor((Math.random() * (data.length - 1)) + 1)
         let randomMovie = data[random]
         setBgMovie(randomMovie)
         if (randomMovie.original_title){
            setNameMovie(randomMovie.original_title)
         } else {
            setNameMovie(randomMovie.original_name)
         }
         setDescriptionMovie(randomMovie.overview)
     })
     
  }, [base_url])

  const BASE_IMG = `${base_img}${bgMovie.backdrop_path}`;


  

  return (
    <Container style={{backgroundImage: `url(${BASE_IMG})`}}>
       <ContainerFilter></ContainerFilter>
       <ContainerHeader>
         <HeaderNetflixLogo src={netflixLogo} />
         <Link to='/Account'>
           <HeaderAvatarLogo src={avatar} />
         </Link>
       </ContainerHeader>
       <ContainerNav>
          <h1>{nameMovie}</h1>
          <ContainerNavButton>
            <button>Play</button>
            <button>Add playlist</button>
          </ContainerNavButton>
          <p>{descriptionMovie}</p>
       </ContainerNav>
    </Container>
  )
}

export default Banner;

const Container = styled.div`
   width: 100%;
   height: 500px;
   background-size: cover;
   background-position: top center;
`

const ContainerFilter = styled.div`
   width: 100%;
   position: absolute;
   height: 630px;
   background: rgb(0,0,0);
   background: linear-gradient(180deg, rgba(0,0,0,0.35783263305322133) 0%, rgba(0,0,0,1) 75%);

   @media screen and (max-width: 600px){
      height: 500px;
   }
`

const ContainerHeader = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   padding: 5px 35px;
   align-items: center;
   position: relative;
`

const HeaderNetflixLogo = styled.img`
   width: 120px;
`

const HeaderAvatarLogo = styled.img`
   width: 45px;
   height: 45px;
   cursor: pointer;
`

const ContainerNav = styled.div`
   color: white;
   position: relative;
   font-family: 'Ubuntu', sans-serif;
   width: 100%;
   padding-left: 50px;
   padding-top: 70px;

   @media screen and (max-width: 600px){
      padding-left: 25px;
      padding-top: 35px;
   }

   h1{
       font-size: 40px;
       @media screen and (max-width: 600px){
          font-size: 20px;
       }
   }

   p{
       margin-top: 30px;
       max-width: 550px;
       font-weight: 700;
       @media screen and (max-width: 600px){
          font-size: 14px;
       }
   }
`

const ContainerNavButton = styled.div`
   display: flex;
   margin-top: 20px;
   position: relative;
   right: 5px;

   button{
       width: 100px;
       height: 35px;
       margin: 5px;
       background-color: rgba(51,51,51,.5);
       border: none;
       color: white;
       font-size: 15px;
       border-radius: 3px;
       font-weight: 700;
       cursor: pointer;
       transition: all 1s;

       &:hover{
           background-color: white;
           color: black;
       }
   }
`