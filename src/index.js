import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';


// REDUX
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';


// const feedback = [
//     {feeling: 0, understanding: 0 , support: 0, comments: ''}
// ]

// const feelingReducer = (state= {}, action) => {
       
        
//     if(action.type === 'UPDATE_FEELING'){
//         return [action.payload];
//     }
//     return state;
// }

// const understandingReducer = (state= {}, action) => {
//     if(action.type === 'UPDATE_UNDERSTANDING' ){
//         return [action.payload]
//     }
//     return state;
// }

// const supportReducer = (state = {}, action ) => {
//     if(action.type === 'UPDATE_SUPPORT'){
//         return [action.payload]
//     }
//     return state;
// }

// const commentReducer = (state = {}, action) => {
//     if (action.type === 'UPDATE_COMMENT') {
//         return [action.payload]
//     }
//     return state;
// }


// const feedbackSubmit = [ {feeling: '', understanding: '', support: '', comment: ''}]


// const feedbackReducer = (state = {}, action) => {
 
//     if (action.type === 'UPDATE_FEELING'){
//         console.log('in update feeling', action.payload)
//        return [action.payload]
//     } else if (action.type === 'UPDATE_UNDERSTANDING'){
//        return [action.payload]
//     }else if(action.type === 'UPDATE_SUPPORT'){
//       return [action.payload]
//     }else if (action.type === 'UPDATE_COMMENT'){
//        return [action.payload]
//     }
//     console.log('In feedback reducer', state);
    
//     return state;
// }

const feedbackReducer = (state = {}, action) => {
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
        return action.payload;
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

 