import React,{useState,useEffect} from 'react';
import UserSearch from './UserSearch'
import styled from 'styled-components';
import api from '../Utils/AxiosAuth'
const StyledResDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:20px;
margin:20px;

`

const [experiences, setExperiences] = useState([])

const StyledContainerDiv = styled.div`
width:65%;
display:flex:

`
useEffect(() => {
 api().get(`/api/exp`)
 .then(res => {
   props.addExperience(res.data)
 })
},[])


function UserHome(props) {

 return (
  <StyledContainerDiv div>
   <UserSearch />
   <StyledResDiv>

   </StyledResDiv>
 </StyledContainerDiv>
 );
}

export default UserHome;