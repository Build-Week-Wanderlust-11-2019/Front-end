import React,{ useState, useEffect } from 'react';
import api from '../../Utils/AxiosAuth'
import OrgCreateExp from './OrgCreateExp'
import { connect } from "react-redux"
import {withRouter,Link } from 'react-router-dom'
import Experience from '../Experience'
import {addExperience} from '../../Actions/index'
import PagContainer from '../PagContainer'
import Pagination from '../Pagination'
import PagSystem from '../PagSystem'
function OrganizerHome(props) {
const [loading, setLoading] = useState()



const [exps, setExps] = useState([])

 useEffect(() => {
  const getExps = async () => {
  setLoading(true)
  const res = await api().get(`/api/exp/${props.userId}`)
  props.addExperience(res.data)
  setExps(res.data)
  setLoading(false)
  }
  getExps()
 },[exps.length])



 
 return (
  <>
  
  <div style={homeContainer}> 
  <OrgCreateExp userId={props.userId}/> 
   <PagSystem exps={exps} user={false} loading={loading}/>
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
const homeContainer = {
  width:"100%",
  display:"flex",

}
const pag={
  width:"100%",
  display:"flex",
  padding:"10px",
  justifyContent:"center"
}
const pagGroup={
  display:"flex",
  flexDirection:"column",
  width:"100%"
}