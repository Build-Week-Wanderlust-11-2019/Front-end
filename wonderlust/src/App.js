import React from 'react';
import { Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import OrganizerHome from './Components/Organizers/OrganizerHome'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import {connect } from "react-redux"
import {withRouter} from 'react-router-dom'
import { orgID, isOrg} from './Actions/index'
import OrganizerUpdatePage from './Components/Organizers/OrganizerUpdatePage';
import UserHome from './Components/Users/UserHome'
import Footer from './Components/Footer'














function App(props) {
  //getting user info from localstorage to persist over refreshes
  props.orgID(localStorage.getItem("id"),localStorage.getItem("name"))
  props.isOrg(localStorage.getItem("isOrg"))
  

  return (
   <>
   <Navigation />
   <PrivateRoute exact path="/"  component={UserHome} />
   <PrivateRoute exact path="/user" component={UserHome}  />
   <PrivateRoute exact path="/organizer" component={OrganizerHome} />
   <Route exact path="/login" component={Login} />
   <PrivateRoute exact path="/update:id" component={OrganizerUpdatePage} />
   <Footer/>
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
