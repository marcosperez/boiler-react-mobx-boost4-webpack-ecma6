import DevTools from 'mobx-react-devtools';
import React, { Component } from 'react';

export default class MyApp extends React.Component {
  render() {
    return (
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <form class="login-form">
              <div class="form-group">
                <label for="usernameInput">Usuario</label>
                <input type="text" class="form-control" id="usernameInput" placeholder="Usuario" />
              </div>
              <div class="form-group">
                <label for="passwordInput">Passoword</label>
                <input type="text" class="form-control" id="passwordInput" placeholder="Contraseña" />
              </div>
            </form>   
          </div>
          <DevTools />
        </div> 
    );
  }
}

