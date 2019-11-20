import React from 'react';

function Experience(props) {
 return (
  <div>
   {/*display experience img, description, date 
   <img src={} alt="destination >"
   <div>
     description & date
   </div>
   <button>Delete</button>
   */}
   {props.data &&
   <div style={expCard}>
    <p>{props.data.experience_title}</p>
    <p>{props.data.experience_desc}</p>
    <p>{props.data.date}</p>
    
   </div>
   }
  </div>
 );
}


export default Experience;
const expCard = {
 width:"200px",
 border:"1px solid black",
 padding:"20px",
 margin:"20px",

}