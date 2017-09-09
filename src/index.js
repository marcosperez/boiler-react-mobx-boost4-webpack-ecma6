import _ from 'lodash';
import 'tether';
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

// function component() {
//   var element = document.createElement('div');
//   var btn = document.createElement('button');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;  // onclick event is bind to the original printMe function

//   element.appendChild(btn);
//   element.classList.add('alert-danger');
//   return element;
// }

// let element = component();
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     document.body.removeChild(element);
//     element = component(); // Re-render the "component" to update the click handler
//     document.body.appendChild(element);
//   })
// }

import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from './components/App.jsx';
import 'react-hot-loader/patch';

// import TodoList from "./components/TodoList";
// import TodoListModel from "./models/TodoListModel";
// import TodoModel from "./models/TodoModel";

// const store = new TodoListModel();
var element = document.createElement('div');
element.classList.add('container-fluid');
document.body.appendChild(element);
element.id = "root";
// render(
//   <div>
//     <DevTools />
//     {/* <TodoList store={store} /> */}
//   </div>,
//   element
// );
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

// if (module.hot) {
//   module.hot.accept('./containers/rootContainer.js', () => {
//     const NextRootContainer = require('./containers/rootContainer.js').default;
//     render(<NextRootContainer />, document.getElementById('react-root'));
//   }
// }

// store.addTodo("Get Coffee");
// store.addTodo("Write simpler code");
// store.todos[0].finished = true;

// setTimeout(() => {
//   store.addTodo("Get a cookie as well");
// }, 2000);

// // playing around in the console
// window.store = store;