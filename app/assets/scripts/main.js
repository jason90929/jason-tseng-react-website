// const jQuery = require('jquery');
// const $ = jQuery;
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

const initialState = {};

window.store = createStore(todoApp, initialState);
// let store = createStore(todoApp, initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);