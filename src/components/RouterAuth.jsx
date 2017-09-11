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

const AuthRoute = () => (
  <Router>
    <div class="container h-100">
      <Route path="/" component={Login}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute />
    </div>
  </Router>
)

// const AuthButton = withRouter(({ history }) => (
//   authService.isAuthenticated ? (
//     <p>
//       <button onClick={() => {
//         authService.signout(() => history.push('/'))
//       }}>Salir</button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// ))

const PrivateRoute = () => (
  authService.isAuthenticated ? (
    <Route path="/home" component={Home}/>
  ) : (
    <Redirect to={{
      pathname: '/login'
    }}/>
  )
  // <Route  render={props => (
  //   authService.isAuthenticated ? (
  //     <Route path="/home" component={Home}/>
  //   ) : (
  //     <Redirect to={{
  //       pathname: '/login',
  //       state: { from: props.location }
  //     }}/>
  //   )
  // )}/>
)

export default AuthRoute