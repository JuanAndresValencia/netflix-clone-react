import React, { useEffect } from 'react'
import styled from 'styled-components'
import Banner from './Banner'
import Movies from './Movies'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { setSesionActive, resetSesionActive } from '../reducers/SesionSlice'
import { useHistory } from 'react-router'

const Browse = () => {

  const BASE_URL = 'https://api.themoviedb.org/3/'
  const BASE_IMG = 'https://image.tmdb.org/t/p/original/'

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
        history.push('/Login')
      }
    });
  }, [dispatch, history])

  return (
    <Container>
       <Banner base_url={BASE_URL} base_img={BASE_IMG}/>
       <Movies />
    </Container>
  )
}

export default Browse;

const Container = styled.div`

`
