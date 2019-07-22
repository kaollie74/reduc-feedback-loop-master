import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


// REDUX
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';


const feedbackReducer = (state = {feeling: 0, understand: 0, support: 0, comment: ''}, action) => {
    console.log('in survey reducer, payload is: ', action.payload)
    if (action.type === 'UPDATE_FEELING') {
        return {...state, feeling: action.payload.feeling};
    }
    if (action.type === 'UPDATE_UNDERSTANDING') {
        return {...state, understand: action.payload.understand};
    }
    if (action.type === 'UPDATE_SUPPORT') {
        return {...state, support: action.payload.support};
    }
    if (action.type === 'UPDATE_COMMENT') {
        return {...state, comment: action.payload.comment};
    }
    if(action.type === 'RESET') {
        state = {};
        return state;
    }
    return state;
}





const reduxStore = createStore(
    combineReducers({
    //     
    feedbackReducer
    
      
    }),
    applyMiddleware(logger)
    
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

 