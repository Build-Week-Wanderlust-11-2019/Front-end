import React from 'react';

function Error(props) {
 return (
  <div className="error" style={errorStyle}>
   <h4>{props.error}</h4>
  </div>
 );
}

export default Error;
const errorStyle = {
textAlign:"center",
padding:"3px",
color:"rgb(236, 88, 88)",
zIndex:"4",
background:"rgba(0,0,0,.3)",
borderRadius:"5px",
marginTop:"5px",
maxWidth:"200px",
margin:"10px auto 0"
}