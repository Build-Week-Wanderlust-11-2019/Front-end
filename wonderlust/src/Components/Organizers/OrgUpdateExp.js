import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import { connect } from 'react-redux'
import { updateExp } from '../../Actions/index'
import {withRouter} from 'react-router-dom'



function OrgUpdateExp(props) {
    const [searchTerm, setTerm] = useState("")
    const key = '4ac18f2821024e6b8bb8e5643e56574a'

    //state for form
    const [newUpdateExperience, setUpdateExperience] = useState({
        experience_title: '',
        experience_desc: '',
        date: null,
        image: null,
        experience_lat: null,
        experience_long: null,
        id:props.id
    })

    function searchChange(e) {
        const value = e.target.value
        setTerm(value)
    }
    function createChangeHandler(e) {
        const value = e.target.value
        setUpdateExperience({
            ...newUpdateExperience,
            [e.target.name]: value
        })
    }


    function searchLocation(e, term, key) {
        e.preventDefault();
        axios
            .get(`https://api.opencagedata.com/geocode/v1/json?q=${term}&key=${key}`)
            .then(res => {
                setUpdateExperience({
                    ...newUpdateExperience,
                    experience_lat: res.data.results[0].geometry.lat,
                    experience_long: res.data.results[0].geometry.lng
                })
            })
    }

     

    // submit handler


    return (
            <div>
                <Form  onSubmit={(e) => { searchLocation(e, searchTerm, key) }}>
                    <FormGroup> 
                    <Label for="location">Location</Label>
                    <Input
                        type="text"
                        name="location"
                        placeholder={"location"}
                        onChange={searchChange}
                    />
                    </FormGroup>
                    <Button type="submit">Get location</Button>
                    <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        type="text"
                        name="experience_title"
                        placeholder="title"
                        onChange={createChangeHandler}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                       type="textarea"
                       name="experience_desc"
                       placeholder="description"
                       onChange={createChangeHandler}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Label for="date">Date</Label>
                    <Input
                       type="date"
                       name="date"
                       placeholder="date"
                       onChange={createChangeHandler}
                    />
                    </FormGroup>
                    <FormGroup>
                    <Input
                        type="text"
                        name="image"
                        placeholder="imageurl"
                        onChange={createChangeHandler}
                     />
                    </FormGroup>
                   
                    <Button onClick={(e) => { e.preventDefault(); props.updateExp(newUpdateExperience,props.id) }}>update</Button>
                
                </Form>
            </div>
        );
    }

    const mapDispatchToProps = {        
            updateExp:updateExp
        
    }




    export default withRouter(connect(
        null,
        mapDispatchToProps)(OrgUpdateExp));
    const style = {
        width: "45%",
        height: "100%",
        border: "2px solid black",
    }