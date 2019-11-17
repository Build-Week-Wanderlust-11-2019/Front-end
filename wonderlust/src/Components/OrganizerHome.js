import React,{ useState, useEffect } from 'react';
import api from '../Utils/AxiosAuth'
import OrgCreateExp from './OrgCreateExp'
import { connect } from "react-redux"
import {withRouter } from 'react-router-dom'
import Experience from './Experience'
import axios from 'axios';

function OrganizerHome(props) {

 const [experiences, setExperiences] = useState([])
 
 useEffect(() => {
  api().get(`/api/exp/${props.userId}`)
  .then(res => {
   console.log(res)
   setExperiences(res.data)
  })
}, [experiences.length]);

//state for your orgs id
//state for experiences []


//get orgs experiences using orgId from backend API


 return (
  <>
  <div style={orgHomeContainer}>
  <OrgCreateExp userId={props.userId}/> 
  
 
  
  
  
  {/*form on side left 30% width*/
  /*map through experiences in state render Experience component for all exps <Experience key={index} data={experience} \>
styled to display at right 70% width of page*/}
   <div style={expContainer}>
   {experiences.map(exp => (
    <Experience data={exp}  />
 ))} 
 </div>
 </div>
   </>
 )
   }

function mapStateToProps(state){
 return{
  userId:state.user.user.orgId,

 }

}
const mapDispatchToProps = {

}
export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)( OrganizerHome))
const orgHomeContainer = {
 display:"flex",

}

const expContainer = {
 width:"70%",
 display:"flex",
 flexDirection: "wrap",
 justifyContent:"center"

}