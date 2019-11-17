import React,{ useState, useEffect } from 'react';
import api from '../Utils/AxiosAuth'
import OrgCreateExp from './OrgCreateExp'
import { connect } from "react-redux"
import {withRouter } from 'react-router-dom'
import Experience from './Experience'


function OrganizerHome(props) {
 const [experiences, setExperiences] = useState([])
 //get oranizers experiences on load and on list change
 useEffect(() => {
  api().get(`/api/exp/${props.userId}`)
  .then(res => {
   setExperiences(res.data)
  })
 },[experiences])

 
 return (
  <>
  <div style={orgHomeContainer}> 
  {/*form on side left 30% width*/
  /*map through experiences in state render Experience component for all exps <Experience key={index} data={experience} \>
styled to display at right 70% width of page pass userId to form*/}
  <OrgCreateExp userId={props.userId}/> 
  
   <div style={expContainer}>
   {experiences.map((exp,index) => (
    <Experience key={index} data={exp} updateExps={setExperiences} experiencesList={experiences} />
 ))} 
 </div>
 </div>
   </>
 )
   }

function mapStateToProps(state){
 return{
  userId:state.user.user.orgId,
  exps:state.user.experiences
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
 display:"column",
 
 justifyContent:"center"

}