import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const startApp = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
    serviceWorker.unregister();
}

if(window.cordova){
    document.addEventListener('deviceready', startApp, false);
} else {
    startApp();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

