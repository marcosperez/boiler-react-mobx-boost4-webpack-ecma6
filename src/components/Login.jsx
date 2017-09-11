import React, { Component } from 'react';
import { observer } from 'mobx-react';
import authService from '../services/auth.js'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom'

// @observer
export default class Login extends React.Component {

  render() {
    if(!authService.isAuthenticated){
        return (
            <div class="row h-100 justify-content-center align-items-center login-container">            
                <form class="login-form">
                    <div class="form-group">
                    <label for="usernameInput">Usuario</label>
                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon"><i class="fa fa-user" aria-hidden="true"></i></div>
                        <input type="text" class="form-control" id="usernameInput" placeholder="Usuario" />
                    </div>
                    </div>
                    <div class="form-group">
                    <label for="passwordInput">Passoword</label>
                    <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                        <div class="input-group-addon"><i class="fa fa-key" aria-hidden="true"></i></div>
                        <input type="password" class="form-control" id="passwordInput" placeholder="Contraseña" />
                    </div>
                    </div>
                    <div class="row justify-content-center">
                    <button onClick={() => authService.login('user','pass')}  type="button" class="btn btn-primary">
                    <i class="fa fa-sign-in" aria-hidden="true"></i> Ingresar 
                    </button>
                    </div>
                </form>
            </div>
        );
    } 
    else {
        return (
            <Redirect to='/home'/>
          )
    }
  }
}

