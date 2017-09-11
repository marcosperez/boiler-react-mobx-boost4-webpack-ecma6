import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

import Login from './Login.jsx'
import Home from './Home.jsx'
import authService from '../services/auth.js'

class AuthRoute extends React.Component {
  render() {
    return ( 
      <Router>
        <div class="container h-100">
          <Route path='/login' component={Login}/>
          <Route path='/home' component={Home}/>
          <PrivateRoute />
        </div>
      </Router>
    )
  }
}

class PrivateRoute extends React.Component {
  render() {
    return authService.isAuthenticated ? (
          <Redirect to={{
            pathname: '/home'
          }}/>
        ) : (
          <Redirect to={{
            pathname: '/login'
          }}/>
        )
    }
}


export default AuthRoute