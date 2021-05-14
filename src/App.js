import React, { useEffect } from 'react';
import Welcome from './components/Welcome'
import Login from './components/Login'
import Register from './components/Register'
import BrowseProfiles from './components/BrowseProfiles'
import firebase from 'firebase'
import Browse from './components/Browse'
import Account from './components/Account'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectWelcomeUserEmail } from './reducers/welcomeUserSlice'
import { setSesionActive, resetSesionActive, selectUserActive } from './reducers/SesionSlice'

function App() {

  const userWelcomeEmail = useSelector(selectWelcomeUserEmail)
  const dispatch = useDispatch()

  const activeUser = useSelector(selectUserActive)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        dispatch(setSesionActive(user.email))
          
      } else {
        // No user is signed in.
        dispatch(resetSesionActive())
      }
    });
  }, [dispatch])



  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {!activeUser ? <Welcome /> : <Redirect to='Browse' />}
        </Route>

        <Route path='/signup'>
          {userWelcomeEmail ? <Register /> : <Redirect to='/' />}
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route exact path='/Browse'>
          <Browse />
        </Route>

        <Route path='/Browser'>
          <BrowseProfiles />
        </Route>

        <Route path='/Account'>
          <Account />
        </Route>

        
      </Switch>
    </Router>
  );
}

export default App;
