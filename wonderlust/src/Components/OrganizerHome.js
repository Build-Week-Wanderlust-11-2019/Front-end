import React,{ useState, useEffect } from 'react';
import api from '../Utils/AxiosAuth'
import OrgCreateExp from './OrgCreateExp'
import Experience from './Experience'
function OrganizerHome(props) {


//state for your orgs id
//state for experiences []


//get orgs experiences using orgId from backend API
 useEffect(() => {
  api().get('/api/exp:id')
  .then(res => { 
     //populate experiences []
  })
  .catch(err => {
    console.log(err.message)
  })

},[])

 return (
  <OrgCreateExp /> /*side form*/
  /*map through experiences in state render Experience component for all exps <Experience key={index} data={experience} \> */
 );
}

export default OrganizerHome;