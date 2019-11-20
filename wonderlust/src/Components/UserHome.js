import React,{useState,useEffect} from 'react';
import UserSearch from './UserSearch'
import styled from 'styled-components';
import api from '../Utils/AxiosAuth'
import {connect} from 'react-redux'
import {withRouter,Link } from 'react-router-dom'
import {getAllExps} from '../Actions'
import Experience from './Experience'
import MapDisplay from '../Utils/MapDisplay'

const StyledResDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:20px;
margin:20px;


`

const StyledContainerDiv = styled.div`
width:65%;
display:flex:

`



function UserHome(props) {
const [results, setResults] = useState([])
const [markers, setMarkers] = useState([])

function resetList(){
 api().get(`/api/exp`)
 .then(res => {
   props.getAllExps(res.data)
   setResults(res.data)
 
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
},[results])


 return (
  <StyledContainerDiv div>
  { markers ? 
  
  <div>
   <UserSearch list={props.exps} updateRes={setResults} reset={resetList}/>
   <StyledResDiv>
    {results.map((exp,index) => (
    <Experience onClick={(e)=> {    }} key={index} data={exp}  /> 
 ))}  
  <MapDisplay markers={markers}/> 
    </StyledResDiv> 
    </div>
    : <h1>...Loading</h1>}
 </StyledContainerDiv>
 );
}

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