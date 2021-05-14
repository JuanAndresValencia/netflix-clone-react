import React, { useEffect } from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import netflixLogo from '../assets/netflixlogowelcome.png'
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSesionActive, resetSesionActive } from '../reducers/SesionSlice'

const BrowseProfiles = () => {

  const history = useHistory()

  const dispatch = useDispatch()

  useEffect(() => {
   firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
       // User is signed in.
       dispatch(setSesionActive(user.email))
     } else {
       // No user is signed in.
       dispatch(resetSesionActive())
       history.push('Login')
      }
     });
   }, [dispatch, history])



  return (
    <Container>
      <ContainerHeader>
        <img src={netflixLogo} alt='Netflix Logo'/>
      </ContainerHeader>

      <ContainerProfiles>
        <ContainerProfilesTitle>
          <ProfilesTitle>¿Quién está viendo ahora?</ProfilesTitle>
        </ContainerProfilesTitle>

        <ContainerProfilesUsers>
          <Profile1>
            <img src={Avatar1} alt='Avatar 1 Imagen' onClick={() => history.push('/Browse')}/>
            <p>Perfil 1</p>
          </Profile1>
          <Profile2>
            <img src={Avatar2} alt='Avatar 2 Imagen' onClick={() => history.push('/Browse')}/>
            <p>Perfil 2</p>
          </Profile2>
          <Profile3>
            <img src={Avatar3} alt='Avatar 3 Imagen' onClick={() => history.push('/Browse')}/>
            <p>Perfil 3</p>
          </Profile3>
          <Profile4>
            <img src={Avatar4} alt='Avatar 4 Imagen' onClick={() => history.push('/Browse')}/>
            <p>Perfil 4</p>
          </Profile4>
        </ContainerProfilesUsers>
      </ContainerProfiles>
    </Container>
  )
}

export default BrowseProfiles;


const Container = styled.div`
   width: 100%;
   height: 100%;
   min-height: 100vh;
   background-color: #141414;
`

const ContainerHeader = styled.div`
   width: 100%;
   padding: 20px 40px;
   height: auto;

   img{
       width: 120px;
   }
`

const ContainerProfiles = styled.div`
   width: 100%;
   height: 100%;
   min-height: 70vh;
   color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 760px){
      justify-content: flex-start;
      margin-top: 50px;
   }

   @media screen and (max-width: 600px){
      margin-top: 0px;
      bottom: 15px;
      position: relative;
   }
`

const ContainerProfilesTitle = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   justify-content: center;
`

const ProfilesTitle = styled.h1`
   font-family: 'Noto Sans', sans-serif;
   font-size: 40px;

   @media screen and (max-width: 760px){
       font-size: 25px;
   }
`

const ContainerProfilesUsers = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;

   @media screen and (max-width: 600px){
      flex-direction: column;
   }

   
`

const Profile1 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;
   cursor: pointer;

   @media screen and (max-width: 600px){
      padding: 5px;
   }
   

   img {
       width: 240px;
       height: 240px;
       outline: none;

       &:hover{
         outline: 5px solid white;
       }

       @media screen and (max-width: 1100px){
          width: 150px;
          height: 150px;
       }

       @media screen and (max-width: 760px){
          width: 110px;
          height: 110px;
       }
   }

   p{
       margin-top: 5px;
       font-size: 18px;
       font-family: 'Poppins', sans-serif;
       color: gray;

       @media screen and (max-width: 760px){
          font-size: 15px;
       }
   }
`

const Profile2 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;
   cursor: pointer;

   @media screen and (max-width: 600px){
      padding: 5px;
   }

   img {
      width: 240px;
      height: 240px;
      outline: none;

      &:hover{
         outline: 5px solid white;
      }

      @media screen and (max-width: 1100px){
        width: 150px;
        height: 150px;
      }

      @media screen and (max-width: 760px){
          width: 110px;
          height: 110px;
      }
   }

   p{
      margin-top: 5px;
      font-size: 18px;
      font-family: 'Poppins', sans-serif;
      color: gray;

      @media screen and (max-width: 760px){
        font-size: 15px;
      }
   }

`

const Profile3 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;
   cursor: pointer;

   @media screen and (max-width: 600px){
      padding: 5px;
   }

      img {
         width: 240px;
         height: 240px;
         outline: none;

         &:hover{
            outline: 5px solid white;
         }

          @media screen and (max-width: 1100px){
            width: 150px;
            height: 150px;
          }

          @media screen and (max-width: 760px){
            width: 110px;
            height: 110px;
          }
      }

      p{
        margin-top: 5px;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        color: gray;

        @media screen and (max-width: 760px){
            font-size: 15px;
        }
      }
`

const Profile4 = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 20px;
   cursor: pointer;

   @media screen and (max-width: 600px){
      padding: 5px;
   }

      img {
        width: 240px;
        height: 240px;
        outline: none;

        &:hover{
          outline: 5px solid white;
        }

        @media screen and (max-width: 1100px){
            width: 150px;
            height: 150px;
        }

        @media screen and (max-width: 760px){
            width: 110px;
            height: 110px;
        }
     }

     p{
        margin-top: 5px;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        color: gray;

        @media screen and (max-width: 760px){
         font-size: 15px;
       }
      }

      
`
