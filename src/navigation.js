import React, { useContext } from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Publications from './pages/publications'
import ShareThoughtsPage from './pages/share-thoughts'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'
import ProfilePage from './pages/profile'
import ErrorPage from './pages/error'
import UserContext from './Context'

const Navigation = () => {
  const context = useContext(UserContext)
  const loggedIn = context.user && context.user.loggedIn

  return (
    <Switch>
      <Route path="/" exact component={Publications} />
      <Route path="/share"> 
        {loggedIn ? (<ShareThoughtsPage />): (<Redirect to="/login" />)}
      </Route>
      <Route path="/register">
        {loggedIn ? (<Redirect to="/" />) : (<RegisterPage />)}
      </Route>
      <Route path="/login">
        {loggedIn ? (<Redirect to="/" />) : (<LoginPage />)}
      </Route>
      <Route path="/profile/:userid">
        {loggedIn ? (<ProfilePage />): (<Redirect to="/login" />)}
      </Route>
      <Route component={ErrorPage} />
    </Switch>
  )
}

export default Navigation