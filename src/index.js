import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


// REDUX
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';


const feedback = [{feeling: 0, understanding: 9 , support: 0, comments: ''}]

const feelingReducer = (state= feedback, action) => {
       
        
    if(action.type === 'UPDATE_FEELING'){
        return [action.payload];
    }
    return state;
}

const understandingReducer = (state= feedback, action) => {
    if(action.type === 'UPDATE_UNDERSTANDING' ){
        return [action.payload]
    }
    return state;
}

const supportReducer = (state = feedback, action ) => {
    if(action.type === 'UPDATE_SUPPORT'){
        return [action.payload]
    }
    return state;
}

const commentReducer = (state = feedback, action) => {
    if (action.type === 'UPDATE_COMMENT') {
        return [action.payload]
    }
    return state;
}




const reduxStore = createStore(
    combineReducers({
       feelingReducer,
       understandingReducer,
       supportReducer,
       commentReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

 