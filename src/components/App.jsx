import DevTools from 'mobx-react-devtools';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import authService from '../services/auth.js'
import RouterAuth from './RouterAuth.jsx'


@observer
export default class MyApp extends React.Component {

  render() {
    const store = this.props.store;
    authService.store = store;
    return (
        <div class="container h-100">
            <div class="status-connection" >{store.reportStatus}</div>
            <RouterAuth />
          <DevTools />
        </div> 
    );
  }
}

