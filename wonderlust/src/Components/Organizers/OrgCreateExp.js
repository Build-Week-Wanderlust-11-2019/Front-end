import React, { useState } from "react";
import api from "../../Utils/AxiosAuth";
import axios from "axios";
import { connect } from "react-redux";
import { addExperience } from "../../Actions/index";
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const StyledExpCreator = styled.div`
`;
const StyledInput = styled.input`
  padding-top: 1rem;
  margin-top: 1rem;
`;

function OrgCreateExp(props) {
  const [searchTerm, setTerm] = useState("");
  const key = "4ac18f2821024e6b8bb8e5643e56574a";

  //state for form
  const [newExperience, setExperience] = useState({
    experience_title: "",
    experience_desc: "",
    date: null,
    image: null,
    experience_lat: null,
    experience_long: null
  });

  function searchChange(e) {
    const value = e.target.value;
    setTerm(value);
  }
  function createChangeHandler(e) {
    const value = e.target.value;
    setExperience({
      ...newExperience,
      [e.target.name]: value
    });
  }

  function searchLocation(e, term, key) {
    e.preventDefault();
    axios
      .get(`https://api.opencagedata.com/geocode/v1/json?q=${term}&key=${key}`)
      .then(res => {
        setExperience({
          ...newExperience,
          experience_lat: res.data.results[0].geometry.lat,
          experience_long: res.data.results[0].geometry.lng
        });
      });
  }

  function createExperience(experience) {
    api()
      .post(`/api/org/${props.userId}/exp`, experience)
      .then(res => {
        api()
          .get(`/api/exp/${props.userId}`)
          .then(res => {
            props.addExperience(res.data);
            // props.updateExps(props.experiencesList);
            console.log(res.data)
          })
          .catch(err => {
            console.log(err);
          });
      });
  }

  // change handler for form

  return (
    <StyledExpCreator>
      <div >
        <h2>Create a New Experience</h2>
        <div >
          <Form style={spacing}
            onSubmit={e => {
              searchLocation(e, searchTerm, key);
            }}
          >
            <FormGroup>
            <Label for="location">Location</Label>
              <Input
              type="text"
              name="location"
              placeholder="location"
              onChange={searchChange}
            />
            <br />
            <Button type="submit">Get location</Button>
            </FormGroup>
            <br />
            <FormGroup>
              <Input
              type="text"
              name="experience_title"
              placeholder="title"
              onChange={createChangeHandler}
            />
            
              <Input
              type="text"
              name="experience_desc"
              placeholder="description"
              onChange={createChangeHandler}
            />
            <Input
              type="date"
              name="date"
              onChange={createChangeHandler}
            />
            <Input
              type="text"
              name="image"
              placeholder="imageurl"
              onChange={createChangeHandler}
            />
            <br />
            <Button
              onClick={e => {
                e.preventDefault();
                createExperience(newExperience);
              }}
            >
              create
            </Button>
            </FormGroup>
          </Form>
          {/*<MapRender coords={data} />*/}
        </div>
      </div>
    </StyledExpCreator>
  );
}

const dispatchStateToProps = {
  addExperience: addExperience
};
export default connect(null, dispatchStateToProps)(OrgCreateExp);


const spacing={
    margin:"10px"
}