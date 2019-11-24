import React from 'react';

function Error(props) {
 return (
  <div className="error" style={errorStyle}>
   <h3>{props.error}</h3>
  </div>
 );
}

export default Error;
const errorStyle = {
textAlign:"center",
paddingTop:"10px",
 color:"rgb(236, 88, 88)"
}