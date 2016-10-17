import React, { PropTypes } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import todoApp from './reducers'
import App from './components/App'

const initialState = {};

// In Development...
window.store = createStore(todoApp, initialState);

// let store = createStore(todoApp, initialState);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/(:filter)" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);