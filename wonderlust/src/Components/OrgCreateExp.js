import React, { useState } from 'react';
import MapRender from '../Utils/MapRender'
import api from '../Utils/AxiosAuth'
import axios from 'axios'
import { connect } from 'react-redux'

import {addExperience} from '../Actions/index'
import { setState } from 'expect/build/jestMatchersObject';

import { addExperience } from '../Actions/index'
import styled from 'styled-components';



const StyledExpCreator = styled.div`
`
const StyledInput = styled.input`
padding-top: 1rem;
margin-top: 1rem;
`

function OrgCreateExp(props) {

    const [searchTerm, setTerm] = useState("")
    const key = '4ac18f2821024e6b8bb8e5643e56574a'

    //state for form
    const [newExperience, setExperience] = useState({

        experience_title:'',
        experience_desc:'',
        date:null,
        image:null,
        experience_lat:null,
        experience_long:null,
        
    })
 


 function searchChange(e){
    const value = e.target.value
    setTerm(value)
   }
 function createChangeHandler(e){
    const value = e.target.value
    setExperience({
      ...newExperience,
      [e.target.name]: value

})
 }

   
   function searchLocation(e, term, key) {
     e.preventDefault();
     axios
       .get(`https://api.opencagedata.com/geocode/v1/json?q=${term}&key=${key}`)
       .then(res => {
         setExperience({...newExperience,
        experience_lat:res.data.results[0].geometry.lat,
        experience_long:res.data.results[0].geometry.lng
    })
        
         })
         
       
   }
 
   function createExperience(experience){ 
    
    api().post(`/api/org/${props.userId}/exp`,experience)
    .then(res => {
        
        api().get(`/api/exp/${props.userId}`)
        .then(res => {
            props.addExperience(res.data)
            props.updateExps(props.experiencesList)
        })        
        .catch(err => {
            console.log(err)

    })

    // change handler for form

    function searchChange(e) {
        const value = e.target.value
        setTerm(value)
    }
    function createChangeHandler(e) {
        const value = e.target.value
        setExperience({
            ...newExperience,
            [e.target.name]: value

        })
    }
  

 


    return (
        <StyledExpCreator>
        <div style={formContainer}>
            <div style={mapStyle}>

                <form onSubmit={(e) => { searchLocation(e, searchTerm, key) }}>
                    <StyledInput input
                        type="text"
                        name="location"
                        placeholder="location"
                        onChange={searchChange}
                    />
                    <button type="submit">Get location</button>

                    <br />
                    <StyledInput input
                        type="text"
                        name="experience_title"
                        placeholder="title"
                        onChange={createChangeHandler}
                    />
                    <StyledInput input
                        type="text"
                        name="experience_desc"
                        placeholder="description"
                        onChange={createChangeHandler}
                    />
                    <StyledInput input
                        type="date"
                        name="date"
                        placeholder="date"
                        onChange={createChangeHandler}
                    />
                    <StyledInput input
                        type="text"
                        name="image"
                        placeholder="imageurl"
                        onChange={createChangeHandler}
                    />
                    <button onClick={(e) => { e.preventDefault(); createExperience(newExperience) }}>create</button>
                </form>
  {/*<MapRender coords={data} />*/}
            </div>
        </div>
        </StyledExpCreator>
    );
}
function mapStateToProps(state) {
    return {

    }
}
const dispatchStateToProps = {
    addExperience: addExperience
}
export default connect(
    mapStateToProps,
    dispatchStateToProps
)(OrgCreateExp);

const mapStyle = {
    height: "200px",
    width: "100%"
}
const formContainer = {
    height: "100vh",
    width: "45%",
    background: "lightgrey"
}