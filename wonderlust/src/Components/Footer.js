import React from 'react';
import styled from 'styled-components'




const StyledCR = styled.p`
color: white;
display:flex;
align-items:center;
height:3rem;
background-color: #0d0d0d;
text-align: left;
position:fixed;
left:0;
bottom:0;
right:0;
margin-bottom:0;
z-index:3;
padding-left:10px;
`



function Footer(props){


return(

<div>
<StyledCR>Wanderlust&copy;2019</StyledCR>

</div>

)
}


export default Footer