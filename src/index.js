import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


// REDUX
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';


const feedback = [
    {feeling: 0, understanding: 0 , support: 0, comments: ''}
]

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


const feedbackSubmit = [ {feeling: '', understanding: '', support: '', comment: ''}]


const feedbackReducer = (state = feedbackSubmit, action) => {
 
    if (action.type === 'UPDATE_FEELING'){
        console.log('in update feeling', action.payload)
       return [...state.newSubmit, action.payload]
    } else if (action.type === 'UPDATE_UNDERSTANDING'){
       return [...state , action.payload]
    }else if(action.type === 'UPDATE_SUPPORT'){
      return [...state, action.payload]
    }else if (action.type === 'UPDATE_COMMENT'){
       return [...state, action.payload]
    }
    console.log('In feedback reducer', state);
    
    return state;
}





const reduxStore = createStore(
    combineReducers({
       feelingReducer,
       understandingReducer,
       supportReducer,
       commentReducer,
    feedbackReducer
    
      
    }),
    applyMiddleware(logger)
    
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

 