import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import todoApp from './reducers'
import App from './components/App'

var initialState = {};

// router
switch (location.pathname) {
    case '/about':
    case '/about/':
        initialState.content = 'about';
        initialState.contentStatus = 'content';
        break;
    case '/skills':
    case '/skills/':
        initialState.content = 'skills';
        initialState.contentStatus = 'content';
        break;
    case '/portfolio':
    case '/portfolio/':
        initialState.content = 'portfolio';
        initialState.contentStatus = 'content';
        break;
    case '/contact':
    case '/contact/':
        initialState.content = 'contact';
        initialState.contentStatus = 'content';
        break;
    default:
}

// In Development...
// window.store = createStore(todoApp, initialState || {});

let store = createStore(todoApp, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-85911523-1', 'auto');
ga('send', 'pageview');