import React from 'react';
import MapRender from '..Utils/MapRender'
import api from '../Uitil/AxiosAuth'
import axios from 'axios'
import { connect } from 'react-redux'




function OrgUpdateExp(props) {
    const [searchTerm, setTerm] = useState("")
    const key = '4ac18f2821024e6b8bb8e5643e56574a'

    //state for form
    const [updateExperience, setupdateExperience] = ({
        experience_title: '',
        experience_desc: '',
        date: null,
        image: null,
        experience_lat: null,
        experience_long: null,
    })

    // change handler
function updateExperience(e){
    const value = e.target.value
    setTerm(value)
}
function createChangeHandler(e){
    const value = e.target.value
    setupdateExperience({
        ...updateExperience,
        [e.target.name]: value
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