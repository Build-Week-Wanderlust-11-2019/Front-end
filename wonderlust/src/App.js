import React from 'react';
import { Route } from 'react-router-dom'
import Navigation from './Components/Navigation'
import UserHome from './Components/UserHome'
import OrganizerHome from './Components/OrganizerHome'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import {connect } from "react-redux"
import {withRouter} from 'react-router-dom'
import Home from './Components/Home'
function App(props) {
  console.log(props.propstate)
  return (
   <>
   <Navigation />
   <Route exact path="/"  component={Home} />
   <PrivateRoute exact path="/user" component={UserHome}  />
   <Route exact path="/organizer" component={OrganizerHome} />
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
