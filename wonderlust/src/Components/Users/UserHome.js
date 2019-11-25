import React,{useState,useEffect} from 'react';
import UserSearch from './UserSearch'
import styled from 'styled-components';
import api from '../../Utils/AxiosAuth'
import {connect} from 'react-redux'
import {withRouter,Link } from 'react-router-dom'
import {getAllExps} from '../../Actions'
import Experience from '../Experience'
import MapDisplay from '../../Utils/MapDisplay'
import Weather from '../../Utils/Weather';
import PagSystem from '../PagSystem'
import Usercontact from '../Users/Usercontact'
import { Container, Row, Col } from 'reactstrap';



function UserHome(props) {
const [results, setResults] = useState([])
const [markers, setMarkers] = useState([])
const [loading, setLoading] = useState()
const[display,setDisplay]=useState(false)
const[bName,setbName]=useState("Map View")


function mapView(){
  setDisplay(!display)
  
    
}

useEffect(() => {
  if(display){
    setbName("Card View")
    }
    else{
      setbName("Map View")
    }
},[display])

function resetList(){
  setLoading(true)
  api().get(`/api/exp`)
 .then(res => {
   props.getAllExps(res.data)
   setResults(res.data)
   setLoading(false)
 })
  
}

 
  
useEffect(() => {
 resetList()

},[])
useEffect(() => {
 let mark = results.filter( marker => (marker.experience_lat))
 console.log(mark)
 setMarkers(mark.filter(marker => (marker.experience_lat.charAt(2) === '.')))
console.log(markers)
},[results.length])


 return (
 
  <>
  
  { markers ? 
  <div>
   
    <Container fluid ml-0 pl-0>
    <Col style={col} sm="4" >.
     <UserSearch list={props.exps} bName={bName} displayMap={mapView} updateRes={setResults} reset={resetList}/>
     </Col>
      {display ? <div style={mapBack}><MapDisplay  markers={markers}/> </div>
      : 
     <Col xs="12">
     <PagSystem loading={loading} exps={results} user={true}/>
     <Usercontact />    
     </Col>
      }
   
       
  
     </Container> 
  </div>

   
    : <h1>...Loading</h1>}
     </>
     

)}

function mapStateToProps(state){
 return{
  
  exps:state.user.allExperiences
 }

}
const mapDispatchToProps = {
getAllExps
}
export default withRouter(connect(
 mapStateToProps,
 mapDispatchToProps
)( UserHome))
const mapBack={
  position:"absolute",
  zIndex:"0",
  top:"3rem",
  left:"0",
  right: "0",
  
  padding:"0",
  margin:"auto"
}
const cont={
  padding:"0",
  margin:"0"
}
const col={
  zIndex:"2"
}