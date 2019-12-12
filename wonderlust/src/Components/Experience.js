import React from 'react';

import {
 Card, CardImg, CardText, CardBody,
 CardTitle, CardSubtitle, 
} from 'reactstrap';

function Experience(props) {

 return (
  <div >
  
   {props.data &&
   <Card style={expCard}>
    <CardImg top width="100%" src={props.data.image} alt="Card image cap" />
    <CardBody style={cardCont}>
     <CardTitle>{props.data.experience_title}</CardTitle>
     <CardSubtitle>Date - {props.data.date}</CardSubtitle>
     <CardText>{props.data.experience_desc}</CardText>
    </CardBody>
   
   </Card>
   }
  </div>
 );
}


export default Experience;
const expCard = {
 width:"300px",
 background:"rgba(0,0,0,.8)",
 padding:"20px",
 margin:"20px",

}
const cardCont={
 color:"white",
 fontSize:"1.2rem",
 borderRadius:"2px"
}