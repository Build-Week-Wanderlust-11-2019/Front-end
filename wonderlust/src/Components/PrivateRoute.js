import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export default function(props){
 
 const {component: Component,
...rest
} = props
  return (
  <Route {...rest} render={(renderProps) =>{
   const token = localStorage.getItem('token')
    
   return token
          ? <Component {...renderProps}/> 
          : <Redirect to="/login" />
  }} />
 
  )
}