import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducers/index'
import {BrowserRouter} from 'react-router-dom'


const store = createStore(reducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
 <BrowserRouter>
 <App />
 </BrowserRouter>
 </Provider>
 , document.getElementById('root'));

