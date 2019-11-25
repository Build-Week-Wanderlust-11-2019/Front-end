import React, {useEffect} from 'react';
import { Route } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import OrganizerHome from './Components/Organizers/OrganizerHome'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'
import {connect } from "react-redux"
import {withRouter} from 'react-router-dom'
import {addInfo,error} from './Actions/index'
import OrganizerUpdatePage from './Components/Organizers/OrganizerUpdatePage';
import UserHome from './Components/Users/UserHome'
import Footer from './Components/Footer'
import './App.css'













function App(props) {
  //getting user info from localstorage to persist over refreshes
  
  const id = localStorage.getItem("id")
  const name = localStorage.getItem("name")
  const isOrg = localStorage.getItem("isOrg")
  
  useEffect(() => {
   props.addInfo(name,id,isOrg)
  },[])
  

  return (
   <>
   
   
   <Navigation />
   
     <Route exact path="/"  component={Login} />
     <PrivateRoute exact path="/user" component={UserHome}  />
     <PrivateRoute exact path="/organizer" component={OrganizerHome} />
     <Route exact path="/login" component={Login} />
     <PrivateRoute exact path="/update/:id" component={OrganizerUpdatePage} />
     <Footer/>
   
}
   </>
  );
}
function mapStateToProps(state){
  return {
   user:state.user.user,
   exps:state.user.experiences
  }
}
const mapDispatchToProps = {
addInfo:addInfo,
error:error,

}
export default withRouter(
   connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
)
