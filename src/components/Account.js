import React, { useEffect } from 'react'
import styled from 'styled-components'
import netflixLogo from '../assets/netflixlogowelcome.png'
import firebase from 'firebase'
import avatar from '../assets/avatar1.png'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSesionActive, resetSesionActive, selectUserActive } from '../reducers/SesionSlice'

const Account = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const activeUser = useSelector(selectUserActive)

  const userLogout = () => {
    //Cerrar sesion
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      console.log('Sesion Cerrada')
      dispatch(resetSesionActive())
      history.push('/Login')
    }).catch((error) => {
      // An error happened.
      console.log('error al iniciar sesion')
    });
    
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        dispatch(setSesionActive(user.email))
      } else {
        // No user is signed in.
        dispatch(resetSesionActive())
        history.push('/Login')
      }
    });
  }, [dispatch, history])

  console.log(activeUser)



  return (
    <Container>
       <ContainerHeader>
         <Link to='/Browse'>
           <HeaderNetflixLogo src={netflixLogo} />
         </Link>
         <HeaderAvatarLogo src={avatar} />
       </ContainerHeader>

       <ContainerNav>
         <ContainerProfile>
           <h1>Profile</h1>
           <hr />
         </ContainerProfile>
         <ContainerUserSesion>
           <img src={avatar}  alt='Avatar user'/>
           <ContainerUserText>
             <h1>{activeUser}</h1>
             <button onClick={userLogout}>Logout</button>
           </ContainerUserText>
         </ContainerUserSesion>
       </ContainerNav>
    </Container>
  )
}

export default Account


const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   background-color: #111111;
`

const ContainerHeader = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: auto;
   padding: 15px 30px;
`

const HeaderNetflixLogo = styled.img`
   width: 120px;
`

const HeaderAvatarLogo = styled.img`
   width: 40px;
   height: 40px;
`

const ContainerNav = styled.div`
   width: 600px;
   margin: 0 auto;

   @media screen and (max-width: 700px){
     width: 80%;
   }
`

const ContainerProfile = styled.div`
   color: white;
   font-family: 'Ubuntu', sans-serif;
   font-weight: 700;

   hr{
     opacity: 0.2;
   }

   h1{
     font-size: 45px;
     letter-spacing: 1px;

     @media screen and (max-width: 700px){
       font-size: 30px;
     }
   }
  
`

const ContainerUserSesion = styled.div`
   display: flex;
   width: 100%;
   margin-top: 20px;

   @media screen and (max-width: 700px){
     flex-direction: column;
     align-items: center;
   }

   img{
     width: 110px;

     @media screen and (max-width: 700px){
       width: 80px;
     }

   }

   
`

const ContainerUserText = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-left: 20px;
   gap: 10px;

   h1{
    color: white;
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    background-color: gray;
    height: 50px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding-left: 10px;

    

    @media screen and (max-width: 700px){
      margin-top: 10px;
      width: 95%;
      padding: 0px;
      padding-left: 10px;
      margin-left: 0px;
      font-size: 17px;
      align-items: center;
      display: flex;
    }
  }

  button{
    color: white;
    background-color: #E53D3A;
    height: 50px;
    font-family: 'Noto Sans', sans-serif;
    border: none;
    font-size: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 700px){
      margin-top: 10px;
      width: 95%;
      padding: 0px;
      padding-left: 10px;
      margin-left: 0px;
      font-size: 17px;
      align-items: center;
      display: flex;
    }
  }
`