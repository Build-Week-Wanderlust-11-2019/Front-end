import React, {useEffect} from 'react';
import { Route } from 'react-router-dom'
import Navigation from './Components/Navigation'
import UserHome from './Components/UserHome'
import OrganizerHome from './Components/OrganizerHome'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import {connect } from "react-redux"
import {withRouter} from 'react-router-dom'
import { orgID, isOrg} from './Actions/index'
import Home from './Components/Home'
import ExpandedExperience from './Components/ExpandedExperience';


function App(props) {
  //getting user info from localstorage to persist over refreshes
  props.orgID(localStorage.getItem("id"),localStorage.getItem("name"))
  props.isOrg(localStorage.getItem("isOrg"))
  return (
   <>
   <Navigation />
   <Route exact path="/"  component={Home} />
   <PrivateRoute exact path="/user" component={UserHome}  />
   <Route exact path="/organizer" component={OrganizerHome} />
   <Route exact path="/login" component={Login} />
   <Route exact path="/update:id" render={ (props) => <ExpandedExperience {...props} />} />
   </>
  );
}
function mapStateToProps(state){
  return {
   name:state.user.name
  }
}
const mapDispatchToProps = {
orgID:orgID,
isOrg:isOrg,

}
export default withRouter(
   connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
)
