import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


// REDUX
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';


const feedback = [{feeling: 0, understanding: 0, support: 0, comments: 'blah'}]

const feedbackReducer = (state= feedback, action) => {

    return state;
}


const reduxStore = createStore(
    combineReducers({
       feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
