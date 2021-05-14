import React, { useState } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import backgroundPoster from '../assets/loginbg.jpg'
import netflixLogo from '../assets/netflixlogowelcome.png'
import netflixSound from '../assets/netflix-sound.mp3'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginData, selectLoginEmail, selectLoginPassword } from '../reducers/LoginSlice'

const Login = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  //Login Data
  let userLoginEmail = useSelector(selectLoginEmail)
  let userLoginPassword = useSelector(selectLoginPassword)

  //temp Data Login
  const [ tempEmail, setTempEmail] = useState('')
  const [ tempPass, setTempPass] = useState('')


  
  const userLogin = () => {
     dispatch(setLoginData(
        userLoginEmail = tempEmail,
        userLoginPassword = tempPass
     ))
     
     if (userLoginEmail && userLoginPassword) {
        firebase.auth().signInWithEmailAndPassword(userLoginEmail, userLoginPassword)
        .then(() => {
          // Signed in
          
          console.log('Login Exitoso')
          let sound = document.getElementById('netflix-sound')
          sound.play()
          setTimeout(() => {
            history.push('/Browser')
          }, 3000)
          

          // ...
        })
        .catch((error) => {
          var errorMessage = error.message;
          alert(errorMessage)
          
          const regex = /\S+@\S+\.\S+/;

          if (regex.test(tempEmail)){
            let elementInputPassword = document.getElementById('password-input')
            elementInputPassword.style.border = '2px solid red'
          } else {
            let elementInputEmail = document.getElementById('email-input')
            elementInputEmail.style.border = '2px solid red'
            let elementInputPassword = document.getElementById('password-input')
            elementInputPassword.style.border = '2px solid red'
          }
          
          
      });
     }

     
  }



  return (
      <Container>
        
        <ContainerFilter></ContainerFilter>
        
        <ContainerHeader>
           <img src={netflixLogo} alt='Netflix Logo'/>
           <audio src={netflixSound} id='netflix-sound'>audio</audio>
        </ContainerHeader>

        <ContainerForm>
          <LoginName>Inicia sesión</LoginName>
          <EmailInput
            id='email-input' 
            placeholder='Email'
            type='email'
            value={tempEmail}
            onChange={(e) => setTempEmail(e.target.value)}
          />
          <PasswordInput
            id='password-input' 
            placeholder="Contraseña"
            type='password'
            value={tempPass}
            onChange={(e) => setTempPass(e.target.value)}
          />
         <LoginButton onClick={userLogin}>Iniciar sesión</LoginButton>
         <Link to='/' style={{ textDecoration: 'none'}}>
            <RegistroRedirectText style={{color: 'white'}}><span>¿Primera vez en Netflix?</span> Suscribete ya.</RegistroRedirectText>
          </Link>
        </ContainerForm>

      </Container>   
  )
}

export default Login;


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
   background: linear-gradient(3deg, rgba(0,0,0,0.6278886554621849) 2%, rgba(0,0,0,0.5214460784313726) 53%, rgba(0,0,0,0.5886729691876751) 100%);
`

const ContainerHeader = styled.div`
   position: relative;
   padding: 10px 25px;
   height: auto;

   img{
       width: 150px;
   }

   @media screen and (max-width: 570px){
       img{
           width: 120px;
       }
   }
`

const ContainerForm = styled.div`
   margin: 0 auto;
   position: relative;
   height: 600px;
   width: 80%;
   max-width: 450px;
   background-color: rgba(0,0,0,.75);
   color: white;
   display: flex;
   align-items: center;
   flex-direction: column;
   padding-top: 60px;
   bottom: 20px;
   border-radius: 3px;

   @media screen and (max-width: 570px){
       width: 85%;
   }
`

const LoginName = styled.h1`
   font-size: 30px;
   font-family: 'Noto Sans', sans-serif;
   display: flex;
   align-self: flex-start;
   margin-left: 75px;

   @media screen and (max-width: 570px){
       font-size: 24px;
       margin-left: 50px;
   }
`

const EmailInput = styled.input`
   width: 68%;
   height: 50px;
   font-family: 'Poppins', sans-serif;
   background-color: #333333;
   border: none;
   outline: none;
   color: white;
   padding: 15px;
   margin-top: 30px;
   border-radius: 3px;

   @media screen and (max-width: 570px){
      width: 80%;
      height: 40px;
   }
`

const PasswordInput = styled.input`
   width: 68%;
   height: 50px;
   font-family: 'Poppins', sans-serif;
   background-color: #333333;
   border: none;
   outline: none;
   color: white;
   padding: 15px;
   margin-top: 20px;
   border-radius: 3px;

   @media screen and (max-width: 570px){
     width: 80%;
     height: 40px;
   }
`

const LoginButton = styled.button`
   width: 68%;
   height: 50px;
   background-color: #E53D3A;
   border: none;
   color: white;
   font-size: 16px;
   font-family: 'Poppins', sans-serif;
   margin-top: 50px;
   cursor: pointer;
   border-radius: 3px;
   font-weight: 700;

   @media screen and (max-width: 570px){
      width: 80%;
      height: 40px;
   }
`

const RegistroRedirectText = styled.p`
   font-size: 15px;
   font-family: 'Poppins', sans-serif;
   margin-top: 30px;
   text-decoration: none;
   
   span{
       color: gray;
   }
`