import React,{useState} from 'react';
import PagContainer from './PagContainer'
import Pagination from './Pagination'

function PagSystem({exps,loading,user}) {


const [currentPage,setCurrentPage] = useState(1)
const [expsPerPg,setExpsPerPg] = useState(4)

const indexOfLastExp = currentPage * expsPerPg
const indexOfFirstExp = indexOfLastExp - expsPerPg
const currentExpGrp = exps.slice(indexOfFirstExp,indexOfLastExp)

const paginate = (pageNumber) => {
 setCurrentPage(pageNumber)
}
 return (
  <div>
   <div style={pagGroup}>
      <PagContainer exps={currentExpGrp} loading={loading} user={user}/>
      <div style={pag}> 
      <Pagination expsPerPg={expsPerPg} totalExps={exps.length} paginate={paginate} />
  </div>
  </div>
  </div>
 );
}

export default PagSystem;
const pag={
 width:"100%",
 display:"flex",
 padding:"10px",
 justifyContent:"center"
}
const pagGroup={
 display:"flex",
 flexDirection:"column",
 width:"100%"
}