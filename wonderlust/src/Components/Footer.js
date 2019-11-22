import React from 'react';
import styled from 'styled-components'




const StyledCR = styled.p`
color: white;
height:3rem;
background-color: black;
text-align: center;
position:fixed;
left:0;
bottom:0;
right:0;
margin-bottom:0;
`



function Footer(props){


return(

<div>
<StyledCR>&copy;Wanderlust</StyledCR>
</div>

)
}


export default Footer