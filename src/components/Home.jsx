import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Home extends React.Component {

  render() {
    const store = this.props.store;
    return (
        <div> HOME </div>
    );
  }
}

