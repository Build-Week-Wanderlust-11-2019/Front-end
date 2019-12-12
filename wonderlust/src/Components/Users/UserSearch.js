import React, {useState} from 'react';
import { Button, Form,  Input } from "reactstrap";
import { Container, Row, Col } from 'reactstrap';

function UserSearch(props) {

const [searchTerm, setTerm] = useState("")

function titleSearch(e,term,list) {
 
 props.updateRes(list.filter( word => ( word.experience_title.toLowerCase().includes(term.toLowerCase()))))
 
 
   
}


function searchChange(e){
 const value = e.target.value
 setTerm(value)
}

 return (
  <Container style={search}>
    <Row> 
   <Form onSubmit={(e) => {e.preventDefault();titleSearch(e,searchTerm,props.list)}}>
       
  <Col xs="12"> 
  <h4 style={h4}>Filter by Title:</h4>
   <Input
    type="text"
    name="search"
    placeholder="search"
    onChange={searchChange}
/> </Col>

    <Col xs="12" className="mt-2">
        <Button color="success" size="sm" block type="submit">Search</Button>
        <Button color="info" size="sm" block onClick={(e) => {e.preventDefault(); props.reset()}}>See All</Button>
        <Button color="info" size="sm" block onClick={props.displayMap}>{props.bName}</Button>

    </Col>

   </Form>
  </Row>
   </Container>
 );
}

export default UserSearch;
const h4={
    color:"white"
}
const search={

    zIndex:"2 ",
    marginTop:"100px"
}