import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
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
  <Container>
      <Col xs="auto">
   <Form onSubmit={(e) => {e.preventDefault();titleSearch(e,searchTerm,props.list)}}>
       <h4>Search for experiences:</h4>
    <Input
    type="text"
    name="search"
    placeholder="search"
    onChange={searchChange}
/>
<Button type="submit">Search</Button>
<Button onClick={(e) => {e.preventDefault(); props.reset()}}>See All</Button>
   </Form>
   </Col>
   </Container>
 );
}

export default UserSearch;