import React from 'react';
import {Link} from 'react-router-dom'
import Experience from './Experience'

function PagContainer({exps,loading,user}) {
if(loading){
 return <h2>loading</h2>
}
 return (
  <div style={pagContainer}>
{!user 
 ? exps.map((ex,index )=> (
 <Link to={`/update/${ex.id}`} key={index}><Experience key={index} data={ex}/></Link>
))
:
exps.map((ex,index )=> (
 <Experience key={index} data={ex}/>
))
}
  </div>
 );
}

export default PagContainer;

const pagContainer = {
 width:"100%",
 display:"flex",
 flexWrap:"wrap",
 justifyContent:"space-around",
 


}