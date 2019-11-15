import React from 'react';
import { Route } from 'react-router-dom'
import Navigation from './Components/Navigation'
import UserHome from './Components/UserHome'
import OrganizerHome from './Components/OrganizerHome'
import Login from './Components/Login'
import PrivateRoute from './Components/PrivateRoute'


function App() {
  return (
   <>
   <Navigation />
   <PrivateRoute exact path="/User" component={UserHome} />
   <PrivateRoute exact path="/Organizer" component={OrganizerHome} />
   <Route exact path="/login" component={Login} />
   </>
  );
}

export default App;
