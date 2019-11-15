import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducers/index'

const store = createStore(reducer, compose(applyMiddleware(thunk)))

ReactDOM.render(
<Provider store={store}>
 <App />
 </Provider>
 , document.getElementById('root'));

