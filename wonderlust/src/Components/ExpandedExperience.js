import React from 'react';

function ExpandedExperience(props) {
 console.log(props)
 return (
  <div>
   {/*Larger view of experience when clicked gives this route displaying large map of location.
   */}
   <div style={expCard}>
    {/* <p>{props.data.experience_title}</p>
    <p>{props.data.experience_desc}</p>
    <p>{props.data.date}</p>
     */}
   </div>
  </div>
 );
}

export default ExpandedExperience;
const expCard = {
 width:"200px",
 border:"1px solid black",
 padding:"20px",
 margin:"20px"

}