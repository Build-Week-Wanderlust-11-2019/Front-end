import React from 'react';
import { Route } from 'react-router-dom'
import Navigation from './Components/Navigation'
import OrganizerHome from './Components/OrganizerHome'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import {connect } from "react-redux"
import {withRouter} from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard';



function App(props) {
  console.log(props.propstate)
  return (
   <>
   <PrivateRoute exact path="/"  component={Dashboard} />
   <PrivateRoute exact path="/user" component={Dashboard}  />
   <PrivateRoute exact path="/organizer" component={Dashboard} />
   <Route exact path="/login" component={Login} />
   </>
  );
}
function mapStateToProps(state){
  return {
    data:state.user
  }
}

export default withRouter(
   connect(
  mapStateToProps,
  null
)(App)
)
