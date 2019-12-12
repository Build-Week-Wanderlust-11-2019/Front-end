import React, { useState,useEffect } from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import OrgUpdateExp from './OrgUpdateExp'
import MapRender from '../../Utils/MapRender'
import { Container, Row, Col } from 'reactstrap';
import {Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle
} from 'reactstrap';
function OrganizerUpdatePage(props) {
 
 const [exp, setExp] = useState()
 const id = parseInt(props.match.params.id.replace(':', ''))
       
       
  
 useEffect(() => {
  
 setExp(props.experiences.filter(id  => id.id === parseInt(props.match.params.id.replace(':', '')))[0])
  
        
    
 },[props.match.params.id,props.experiences] )
            
              
 return (
  <Container>
   
      <div style={container}>
       <Row>
         <Col xs="12" md="3"> 
         <h2>Update Your Experience</h2>
         <OrgUpdateExp  id={id} />
         </Col>
      
        { exp ?
       <Col xs="12" md="8">
          <Card style={expCard}>
            <CardImg top width="100%" src={exp.image} alt="" />
           <CardBody>
             <CardTitle>{exp.experience_title}</CardTitle>       
             <CardSubtitle>Date of exp-{exp.date} </CardSubtitle>
            <CardText>{exp.experience_desc}</CardText>
           </CardBody>
            <MapRender lat={parseInt(exp.experience_lat)} long={parseInt(exp.experience_long)} /> 
           
          </Card>
       </Col> :null} 
       </Row>
      </div>
   
  </Container>
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
  width:"100%",
 padding:"20px",
 display:"flex",
 flexDirection:"column",
 alignItems:"center",
 color:"black",
 marginTop:"20px"

}
const container = {
 paddingBottom:"50px",
  paddingTop:"100px",
}