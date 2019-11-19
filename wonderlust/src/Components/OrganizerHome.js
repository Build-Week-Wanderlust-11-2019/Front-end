import React,{ useState, useEffect } from 'react';
import api from '../Utils/AxiosAuth'
import OrgCreateExp from './OrgCreateExp'
import { connect } from "react-redux"
import {withRouter,Link } from 'react-router-dom'
import Experience from './Experience'
import {addExperience} from '../Actions/index'


function OrganizerHome(props) {
 const [experiences, setExperiences] = useState([])
 //get oranizers experiences on load and on list change
 useEffect(() => {
  let ignore = false
   const getExps = api().get(`/api/exp/${props.userId}`)
  .then(res => {
   if(!ignore){
   setExperiences(res.data)
  }
   //props.addExperience(res.data)
  })

  return () => {
   ignore = true
  }
 },[experiences,props.userId])

 useEffect(() => {
  api().get(`/api/exp/${props.userId}`)
  .then(res => {
    props.addExperience(res.data)
  })
 },[])

 return (
  <>
  <div style={orgHomeContainer}> 
  <OrgCreateExp userId={props.userId}/> 
  
   <div style={expContainer}>
   {experiences.map((exp,index) => (
    <Link to={`/update:${exp.id}`} key={index}><Experience  data={exp} updateExps={setExperiences} experiencesList={experiences} /> </Link>
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
addExperience:addExperience
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