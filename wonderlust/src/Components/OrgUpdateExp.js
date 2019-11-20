import React,{useState} from 'react';
import api from '../Utils/AxiosAuth'
import axios from 'axios'
import { connect } from 'react-redux'
//import { updateExperience } from '../Actions/index'




function OrgUpdateExp(props) {
    const [searchTerm, setTerm] = useState("")
    const key = '4ac18f2821024e6b8bb8e5643e56574a'

    //state for form
    const [newUpdateExperience, setUpdateExperience] = ({
        experience_title: '',
        experience_desc: '',
        date: null,
        image: null,
        experience_lat: null,
        experience_long: null,
    })

    // change handler
// <<<<<<< barinder-joseph-singh
//     function searchChange(e) {
//         const value = e.target.value
//         setTerm(value)
//     }

    // function updateExperience(e) {
    //     const value = e.target.value
    //     setTerm(value)
    // }

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


    function updateExperience(experience) {
        api().post(`/api/org/${props.userId}/exp`, experience)
            .then(res => {
                api().get(`/api/exp/${props.userId}`)
                    .then(res => {
                        props.updateExperience(res.data)
                        props.updateExperience(props.experienceList)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }






    // submit handler


    return (
            <div>
                <form style={style} onSubmit={(e) => { searchLocation(e, searchTerm, key) }}>
                    <input
                        type="text"
                        name="location"
                        placeholder={searchChange}
                    />
                    <button type="submit">Get location</button>
                    <br />
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
                    <button onClick={(e) => { e.preventDefault(); updateExperience(newUpdateExperience) }}>update</button>
                </form>
            </div>
        );
    }













    export default OrgUpdateExp;
    const style = {
        width: "45%",
        height: "100%",
        border: "2px solid black",
    }