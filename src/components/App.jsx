import DevTools from 'mobx-react-devtools';
import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class MyApp extends React.Component {

  login (event) {
      console.log("Implementar... re route")
  }

  render() {
    const store = this.props.store;
    return (
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
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
              <button onClick={this.login} type="submit" class="btn btn-primary"><i class="fa fa-sign-in" aria-hidden="true"></i> 
              Ingresar </button>
              </div>
            </form>   
          </div>
          <DevTools />
        </div> 
    );
  }
}

