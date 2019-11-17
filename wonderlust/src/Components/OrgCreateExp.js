import React, {useState} from 'react';
import MapRender from '../Utils/MapRender'
import api from '../Utils/AxiosAuth'
import axios from 'axios'

function OrgCreateExp(props) {
    const [data, setData] = useState({})
    const [searchTerm, setTerm] = useState("")
    const key = ''

 //state for form
    const [newExperience, setExperience] = useState({
        experience_title:'',
        experience_desc:'',
        date:null,
        image:null,
        experience_lat:null,
        experience_long:null,
        
    })
 
 // change handler for form

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
   function searchLocation(e,term,key){
    e.preventDefault()
    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${term}&key=${key}`)
    .then(res => {   
     setData(res.data.results[0].geometry)
    })
   }
  
   function createExperience(experience){
    api().post(`/api/org/${props.userId}/exp`,experience)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })

   }


 return (
  <div style={formContainer}>
    <div style={mapStyle}>

    <form onSubmit={(e) => {searchLocation(e,searchTerm,key)}}>
        <input
        type="text"
        name="location"
        placeholder="location"
        onChange={searchChange}
        />
        <button type="submit">Get location</button>

        <br/>
        <input
        type="text"
        name="experience_title"
        placeholder="title"
        onChange={createChangeHandler}
        />
        <input
        type="text"
        name="experience_desc"
        placeholder="description"
        onChange={createChangeHandler}
        />
         <input
        type="date"
        name="date"
        placeholder="date"
        onChange={createChangeHandler}
        />
          <input
        type="text"
        name="image"
        placeholder="imageurl"
        onChange={createChangeHandler}
        />
        <button onClick={(e) => {e.preventDefault(); createExperience(newExperience)}}>create</button>
    </form>
    <MapRender coords={data}/>
    </div>
    </div>
    );
    }

export default OrgCreateExp;

const mapStyle = {
    height:"200px",
    width:"100%"
   }
const formContainer = {
    height:"100vh",
    width:"45%",
    background:"lightgrey"
}