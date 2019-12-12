import React from 'react';
import { Route, Redirect } from 'react-router-dom'


export default function(props){

  const id = localStorage.getItem("id")
 
  
 
 const {component: Component,
...rest
} = props
  return (
  <Route {...rest} render={(renderProps)  =>{
   const token = localStorage.getItem('token')   
  
   console.log(props)
   return token
          ? <Component {...renderProps} userId={id}/> 
          : <Redirect to="/login" />
  }} />
 
  )
}
