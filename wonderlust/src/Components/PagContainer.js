import React from 'react';
import {Link} from 'react-router-dom'
import Experience from './Experience'
function PagContainer({exps,loading}) {
if(loading){
 return <h2>...Loading</h2>
}
 return (
  <div style={pagContainer}>
{exps.map((ex,index )=> (
 <Link to={`/update:${ex.id}`} key={index}><Experience key={index} data={ex}/></Link>
))}
  </div>
 );
}

export default PagContainer;

const pagContainer = {
 width:"100%",
 display:"flex",
 flexWrap:"wrap",
 justifyContent:"space-around",
 border:"2px solid black",
 height:"500px"

}