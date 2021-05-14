import React, { useState } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import { db } from '../firebase'
import netflixLogo from '../assets/netflixlogowelcome.png'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setWelcomeUserEmail, selectWelcomeUserEmail } from '../reducers/welcomeUserSlice'
import { setRegisterData, selectRegisterName, selectRegisterEmail, selectRegisterPassword } from '../reducers/RegisterSlice'


const Register = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  //email welcome component
  const welcomeUserEmail = useSelector(selectWelcomeUserEmail)
  
  //Register Data
  let userRegisterName = useSelector(selectRegisterName)
  let userRegisterEmail = useSelector(selectRegisterEmail)
  let userRegisterPassword = useSelector(selectRegisterPassword)

  //Temp register Data
  const [ tempName, setTempName ] = useState('')
  const [ tempPassword, setTempPassword ] = useState('') 


  const userRegister = () => {
     dispatch(setRegisterData(
        userRegisterName = tempName,
        userRegisterEmail = welcomeUserEmail,
        userRegisterPassword = tempPassword
     ))

     if (userRegisterName && userRegisterEmail && userRegisterPassword){
         firebase.auth().createUserWithEmailAndPassword(userRegisterEmail, userRegisterPassword)
            .then((userCredential) => {
            // Signed in
              //Agregar a la base de datos, el nombre y email del user
              db.collection("usersNames").add({
                 nombre: userRegisterName,
                 email: userRegisterEmail
                })
                .then((data) => {
                 alert('registro exisoto')
                 history.push('/login')
                })
              })
              
            .catch((error) => {
            history.push('/signup')
            alert('El usuario ya existe, o la contraseña no tiene mas de 8 caracteres')
            
         });
         
     }
  }
  
  


  return (
    <div>
      <Container>
        
        <ContainerHeader>
           <img src={netflixLogo} alt='Netflix Logo' onClick={() => history.push('/')}/>
           <p onClick={() => history.push('/login')}>Iniciar sesión</p>
        </ContainerHeader>

        <ContainerForm>
          <LoginName>Comienza tu membresia</LoginName>
          <NameInput 
            placeholder='Nombre Completo'
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
          />
          <EmailInput 
            placeholder='Email'
            type='email'
            value={welcomeUserEmail}
            onChange={(e) => {
               dispatch(setWelcomeUserEmail(e.target.value))
            }}
          />
          <PasswordInput 
            placeholder="Contraseña"
            type='password'
            value={tempPassword}
            onChange={(e) => setTempPassword(e.target.value)}
          />
          <AdvicePassword>Use a strong password</AdvicePassword>
          <LoginButton onClick={userRegister}>Registrarme</LoginButton>
        </ContainerForm>

      </Container>        
    </div>
  )
}

export default Register;


const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   background-color: #FFFFFF;
`

const ContainerHeader = styled.div`
   position: relative;
   padding: 10px 25px;
   height: auto;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;

   img{
       width: 150px;
       cursor: pointer;
   }

   p{
      color: #333333;
      font-size: 17px;
      font-family: 'Noto Sans', sans-serif;
      cursor: pointer;

      &:hover{
         text-decoration: underline;
      }
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
   font-size: 25px;
   font-family: 'Noto Sans', sans-serif;
   display: flex;

   @media screen and (max-width: 570px){
       font-size: 24px;
       margin-left: 50px;
   }
`

const NameInput = styled.input`
   width: 80%;
   height: 50px;
   font-family: 'Poppins', sans-serif;
   border: 1px solid black;
   outline: none;
   padding: 15px;
   margin-top: 30px;
   border-radius: 3px;

@media screen and (max-width: 570px){
   width: 80%;
   height: 40px;
}
`

const EmailInput = styled.input`
   width: 80%;
   height: 50px;
   font-family: 'Poppins', sans-serif;
   border: 1px solid black;
   outline: none;
   padding: 15px;
   margin-top: 20px;
   border-radius: 3px;

   @media screen and (max-width: 570px){
      width: 80%;
      height: 40px;
   }
`

const PasswordInput = styled.input`
   width: 80%;
   height: 50px;
   font-family: 'Poppins', sans-serif;
   border: 1px solid black;
   outline: none;
   padding: 15px;
   margin-top: 20px;
   border-radius: 3px;

   @media screen and (max-width: 570px){
     width: 80%;
     height: 40px;
   }
`

const AdvicePassword = styled.p`
   color: red;
   display: flex;
   justify-self: flex-start;
   width: 100%;
   margin: 3px 0px 0px 90px;
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   font-weight: 700;
`

const LoginButton = styled.button`
   width: 80%;
   height: 50px;
   background-color: #E53D3A;
   border: none;
   color: white;
   font-size: 16px;
   font-family: 'Poppins', sans-serif;
   margin-top: 20px;
   cursor: pointer;
   border-radius: 3px;
   font-weight: 700;

   @media screen and (max-width: 570px){
      width: 80%;
      height: 40px;
   }
`
