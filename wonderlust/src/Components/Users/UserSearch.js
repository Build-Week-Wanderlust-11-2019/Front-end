import React, {useState} from 'react';

function UserSearch(props) {

const [searchTerm, setTerm] = useState("")

function titleSearch(e,term,list) {
 
 props.updateRes(list.filter( word => ( word.experience_title.toLowerCase().includes(term.toLowerCase()))))
 
 
   
}


function searchChange(e){
 const value = e.target.value
 setTerm(value)
}

 return (
  <div>

   <form onSubmit={(e) => {e.preventDefault();titleSearch(e,searchTerm,props.list)}}>
       <h4>Search for experiences:</h4>
    <input
    type="text"
    name="search"
    placeholder="search"
    onChange={searchChange}
/>
<button type="submit">Search</button>
<button onClick={(e) => {e.preventDefault(); props.reset()}}>See All</button>
   </form>
  </div>
 );
}

export default UserSearch;