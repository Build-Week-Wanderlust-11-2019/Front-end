import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navigation from './Navigation'
import OrganizerHome from './OrganizerHome'
import { connect } from "react-redux"
import Home from './Home'


function Dashboard(props){
    return (
        <>
        
    <div className="NavContainer">
        <Navigation/>
    </div>
   <Route exact path="/" render={props => <Home {...props}/>}/>
    <Route exact path="/organizer" render={props => <OrganizerHome {...props}/>}/>
   </>
    )
}

export default withRouter(connect()(Dashboard))



