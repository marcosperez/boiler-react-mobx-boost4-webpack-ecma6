import _ from 'lodash';
import 'tether';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/styles.css';
import './static/css/font-awesome.min.css';
import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from './components/App.jsx';
import 'react-hot-loader/patch';
import UserStore from './stores/UserStore.jsx'

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

var element = document.createElement('div');
element.classList.add('container-fluid');
document.body.appendChild(element);
element.id = "root";
var renderApp = function() {
	render(
		<AppContainer>
			  <App />
		</AppContainer>,
		document.getElementById('root')
	);
};

renderApp();

if (module.hot) {
	module.hot.accept(() => renderApp());
}