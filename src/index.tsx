import React from 'react';
import ReactDOM from 'react-dom';
import './declarations'
import App from './App';
import * as serviceWorker from './serviceWorker';
import LogIn from './components/Login/Login';

const container = document.createElement('div')
document.body.appendChild(container);
ReactDOM.render(<App/>, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
