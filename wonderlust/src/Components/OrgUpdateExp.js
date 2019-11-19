import React from 'react';
import MapRender from '..Utils/MapRender'
import api from '../Uitil/AxiosAuth'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateExperience } from '../Actions/index'




function OrgUpdateExp(props) {
    const [searchTerm, setTerm] = useState("")
    const key = '4ac18f2821024e6b8bb8e5643e56574a'

    //state for form
    const [updateExperience, setUpdateExperience] = ({
        experience_title: '',
        experience_desc: '',
        date: null,
        image: null,
        experience_lat: null,
        experience_long: null,
    })

    // change handler
    function updateExperience(e) {
        const value = e.target.value
        setTerm(value)
    }
    function createChangeHandler(e) {
        const value = e.target.value
        setUpdateExperience({
            ...updateExperience,
            [e.target.name]: value
        })
    }


    function searchLocation(e, term, key) {
        e.preventDefault();
        axios
            .get(`https://api.opencagedata.com/geocode/v1/json?q=${term}&key=${key}`)
            .then(res => {
                setUpdateExperience({
                    ...updateExperience,
                    experience_lat: res.data.results[0].geometry.lat,
                    experience_long: res.data.results[0].geometry.lng
                })
            })
    }


    function updateExperience(experience) {
        api().post(`/api/org/${props.userId}/exp`, experience)
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
            <form style={style}>

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