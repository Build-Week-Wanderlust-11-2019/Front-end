import React,{ useState, useEffect } from 'react';
import api from '../../Utils/AxiosAuth'
import OrgCreateExp from './OrgCreateExp'
import { connect } from "react-redux"
import {withRouter,Link } from 'react-router-dom'
import Experience from '../Experience'
import {addExperience} from '../../Actions/index'
import PagContainer from '../PagContainer'
import Pagination from '../Pagination'

function OrganizerHome(props) {
const [loading, setLoading] = useState()
const [currentPage,setCurrentPage] = useState(1)
const [expsPerPg,setExpsPerPg] = useState(4)


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

const indexOfLastExp = currentPage * expsPerPg
const indexOfFirstExp = indexOfLastExp - expsPerPg
const currentExpGrp = exps.slice(indexOfFirstExp,indexOfLastExp)

//changeing page
const paginate = (pageNumber) => {
  setCurrentPage(pageNumber)
}
 
 return (
  <>
  
  <div style={homeContainer}> 
  <OrgCreateExp userId={props.userId}/> 
  
  
 
    <div style={pagGroup}><PagContainer exps={currentExpGrp} loading={loading}/>
   <div style={pag}> 
    <Pagination expsPerPg={expsPerPg} totalExps={exps.length} paginate={paginate} />
  </div>
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