import React, { useEffect } from 'react'
import styled from 'styled-components'
import backgroundPoster from '../assets/welcomebg.jpg'
import netflixLogo from '../assets/netflixlogowelcome.png'
import { useDispatch, useSelector } from 'react-redux'
import { setWelcomeUserEmail, selectWelcomeUserEmail } from '../reducers/welcomeUserSlice'
import { useHistory } from 'react-router-dom'

const Welcome = () => {

   const dispatch = useDispatch()
   
   //History para redirigir al usuario
   const history = useHistory()

   //Email que ingresa el usuario, desde la store de redux
   const userEmail = useSelector(selectWelcomeUserEmail)

   const handleEmail = (e) => {
      dispatch(setWelcomeUserEmail(e.target.value))
   }

   const validarEmail = () => {
      const regex = /\S+@\S+\.\S+/;
      if (regex.test(userEmail)) {
         localStorage.setItem('netflix-newuser', userEmail)
         dispatch(setWelcomeUserEmail(localStorage.getItem('netflix-newuser')))
         history.push('/signup')
      } else {

      }
   }

   //Verificar el estado del localstorage element
   useEffect(() => {
      if (localStorage.getItem('netflix-newuser')){
         dispatch(setWelcomeUserEmail(localStorage.getItem('netflix-newuser')))
      }
   }, [dispatch])



   return (
    <Container>
      <ContainerFilter></ContainerFilter>
      <ContainerHeader>
         <img src={netflixLogo} alt='netflix logo'/>
         <button onClick={() => history.push('/login')}>Iniciar Sesion</button>
      </ContainerHeader>
      
      <ContainerNav>
         <ContainerNavTitle>Películas y series ilimitadas y mucho mas</ContainerNavTitle>
         <ContainerNavSubTitle>Disfruta donde quieras. Cancela cuando quieras.</ContainerNavSubTitle>
         <ContainerNavOptions>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresia de Netflix.</ContainerNavOptions>
         
         <ContainerNavSignUp>
           <ContainerNavSignUpInput 
             placeholder='Email'
             onChange={handleEmail}
           />
           <ContainerNavSignUpButton onClick={validarEmail}>Comenzar ￫</ContainerNavSignUpButton>
         </ContainerNavSignUp>
      </ContainerNav>
    </Container>
  )
}

export default Welcome;

const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   background: url(${backgroundPoster});
   background-repeat: no-repeat;
   background-size: cover;
`

const ContainerFilter = styled.div`
   width: 100%;
   position: fixed;
   height: 100%;
   min-height: 100vh;
   background: rgb(0,0,0);
   background: linear-gradient(6deg, rgba(0,0,0,0.9556197478991597) 2%, rgba(0,0,0,0.7399334733893557) 53%, rgba(0,0,0,0.5886729691876751) 100%);
`

const ContainerHeader = styled.div`
   position: relative;
   width: 100%;
   display: flex;
   height: auto;
   justify-content: space-between;
   align-items: center;
   padding: 20px 50px;

   @media screen and (max-width: 900px){
      padding: 10px 25px;
   }

   @media screen and (max-width: 600px){
      padding: 10px 25px;
   }

   img{
       width: 170px;

       @media screen and (max-width: 1400px){
          width: 125px;
       }

       @media screen and (max-width: 600px){
          width: 110px;
       }
   }

   button{
       width: 120px;
       height: 35px;
       background-color: #E53D3A;
       border: none;
       color: white;
       font-size: 16px;
       cursor: pointer;
       border-radius: 2.5px;
       font-family: 'Roboto', sans-serif;

       @media screen and (max-width: 600px){
          width: 100px;
          font-size: 15px;
       }
   }
`

const ContainerNav = styled.div`
   position: relative;
   color: white;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 40px;
   gap: 20px;

   @media screen and (max-width: 900px){
      margin-top: 0px;
   }

   @media screen and (max-width: 1400px){
      gap: 0px;
   }
`

const ContainerNavTitle = styled.h1`
   font-size: 60px;
   width: 750px;
   text-align: center;
   font-family: 'Noto Sans', sans-serif;

   @media screen and (max-width: 1400px){
      font-size: 50px;
      width: 650px;
   }
   
   @media screen and (max-width: 900px){
      width: 80%;
   }

   @media screen and (max-width: 600px){
      font-size: 30px;
   }

   
`

const ContainerNavSubTitle = styled.p`
   margin-top: 15px;
   font-size: 23px;
   font-family: 'Poppins', sans-serif;


   @media screen and (max-width: 900px){
      width: 90%;
      text-align: center;
   }

   @media screen and (max-width: 600px){
      font-size: 18px;
   }
}

`

const ContainerNavOptions = styled.p`
   margin-top: 20px;
   font-size: 17px;
   font-family: 'Poppins', sans-serif;
   text-align: center;

   @media screen and (max-width: 900px){
      width: 90%;
   }

   @media screen and (max-width: 600px){
      font-size: 15.8px;
   }
`

const ContainerNavSignUp = styled.div`
   display: flex;
   margin-top: 20px;
   width: 100%;
   justify-content: center;
   border-radius: 3px;
   font-family: 'Poppins', sans-serif;
`

const ContainerNavSignUpInput = styled.input`
   width: 60%;
   max-width: 600px;
   height: 65px;
   outline: none;
   border: none;
   padding: 10px;
   font-size: 17px;

   @media screen and (max-width: 900px){
      width: 60%;
   }

   
`

const ContainerNavSignUpButton = styled.button`
   width: 180px;
   right: 5px;
   position: relative;
   background-color: #E53D3A;
   border: none;
   color: white;
   font-size: 19px;
   cursor: pointer;

   @media screen and (max-width: 900px){
      width: 130px;
   }

   @media screen and (max-width: 600px){
      width: 110px;
   }
`