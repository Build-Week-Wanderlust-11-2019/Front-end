import React, { useState,useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import OrgUpdateExp from './OrgUpdateExp'
import MapRender from '../../Utils/MapRender'
import { Container, Row, Col } from 'reactstrap';
import {Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, Button
} from 'reactstrap';
function OrganizerUpdatePage(props) {
 
 const [exp, setExp] = useState()
 const id = parseInt(props.match.params.id.replace(':', ''))

 useEffect(() => {
 setExp(props.experiences.filter(id  => id.id === parseInt(props.match.params.id.replace(':', '')))[0])
 
 },[props.match.params.id,props.experiences] )
 

 return (
  <div style={container}>
    <OrgUpdateExp  id={id} /> 
   {/*Larger view of experience when clicked gives this route displaying large map of location.
   */}
    { exp ?
    <Card style={expCard}>
      <CardImg top width="100%" src={exp.image} alt="" />
     <CardBody>
       <CardTitle>{exp.experience_title}</CardTitle>       
       <CardSubtitle>Date of exp-{exp.date} </CardSubtitle>
       <CardSubtitle>Organizer-{exp.org_name}</CardSubtitle>
      <CardText>{exp.experience_desc}</CardText>
     </CardBody>
      <MapRender lat={parseInt(exp.experience_lat)} long={parseInt(exp.experience_long)} /> 
     
    </Card> :null}
  </div>
 );
}
function mapStateToProps(state) {
  return {
    experiences:state.user.experiences,
   
  }
}
export default withRouter(connect(
  mapStateToProps,
  null
  )(OrganizerUpdatePage));


const expCard = {
  width:"65%",
 border:"1px solid black",
 padding:"20px",
 margin:"20px",
 display:"flex",
 flexDirection:"column",
 alignItems:"center"

}
const container = {
  width:"100%",
  display:"flex",
  justifyContent:"center",
  paddingTop:"50px"
}