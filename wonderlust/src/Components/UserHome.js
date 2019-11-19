import React,{useState,useEffect} from 'react';
import UserSearch from './UserSearch'
import styled from 'styled-components';
import api from '../Utils/AxiosAuth'
import {connect} from 'react-redux'
import {withRouter,Link } from 'react-router-dom'
import {getAllExps} from '../Actions'
import Experience from './Experience'
import MapRender from '../Utils/MapRender'
import { reset } from 'ansi-colors';
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

function resetList(){
 api().get(`/api/exp`)
 .then(res => {
   props.getAllExps(res.data)
   return res.data
 })
  .then(res => {setResults(res)})
}



useEffect(() => {
 resetList()
 
},[])




 return (
  <StyledContainerDiv div>
  { results ?
  <div>
   {console.log(results)}
   <UserSearch list={props.exps} updateRes={setResults} reset={resetList}/>
   <StyledResDiv>
    {results.map((exp,index) => (
    <Experience onClick={(e)=> {    }} key={index} data={exp}  /> 
 ))}  
 <MapRender lat={19}long={45}/>
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