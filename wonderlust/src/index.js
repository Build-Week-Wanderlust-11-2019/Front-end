import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import logger from "redux-logger"
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {BrowserRouter} from 'react-router-dom'
import {reducer as userReducer } from "./Reducers/index"
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
 user:userReducer
//
})
const createLogActionStackTraceMiddleware = (actionTypes = []) => {
 const logActionStackTraceMiddleware = storeAPI => next => action => {
     if(action.type && actionTypes.includes(action.type)) {
         console.trace(`Action: ${action.type}`);
     }

     return next(action);
 }

 return logActionStackTraceMiddleware;
}

const stackTraceMiddleware = createLogActionStackTraceMiddleware(["SUCCESS", "ADDINFO"]);

const store = createStore(rootReducer, compose(

 applyMiddleware(thunk,logger,stackTraceMiddleware),

 window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
),

)

ReactDOM.render(
<Provider store={store}>
 <BrowserRouter>
 <App />
 </BrowserRouter>
 </Provider>
 , document.getElementById('root'));

