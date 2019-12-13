import React, { useState} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import styled from 'styled-components';
import {connect} from 'react-redux'
import {addInfo,success} from '../../Actions/index' 
import './nav.css'

const StyledDrop = styled.div`
text-align: right;
background-color: #0d0d22;
color: #dddddd;
display: flex;
justify-content: space-between;
align-items:center;
height:70px;
padding-right:20px;
position:absolute;
top:0;
width:100%;
z-index:4;
text-decoration:none;
`
const Sh2 = styled.h2`
margin-left:20px;
`

function Navigation(props) {
    function logOut(event) {
        event.preventDefault()
        localStorage.removeItem("token")
        localStorage.removeItem("name")
        localStorage.removeItem("id")
        localStorage.removeItem("isOrg")
        // props.addInfo(null,null,null)
        props.success()
        props.history.push("/login")
    }

    const [open, setOpen] = useState(false)
    function toggler() {
        setOpen(!open)
    }
   
    return (
       <div>
            
            <StyledDrop >
                <Sh2>Wanderlust</Sh2>
              {localStorage.getItem('name')  ?
               <div className="nav-desktop">
               
               <Link to="/user"><div>Experiences</div></Link>
               <Link to="/organizer"><div>Organizer</div></Link>
               <Link to="#"onClick={logOut}><div>Log Out</div></Link>
               </div>
              : <div className="nav-desktop-login">
                  <Link to="/user"><div>Login</div></Link>
                  </div>
               
               }
               <div className="nav-mobile">
                    <Dropdown direction="left" isOpen={open} toggle={toggler}>
                        <DropdownToggle className="theButton">
                            <i className="fas fa-bars burgerMenu"></i>
                        </DropdownToggle>
                        {localStorage.getItem('name')  ?
                         <DropdownMenu className="DropdownMenu">
                            <DropdownItem header>{localStorage.getItem('name')}</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><Link to="/user"><div>Experiences</div></Link></DropdownItem>
                            <DropdownItem><Link to="/organizer"><div>Organizer</div></Link></DropdownItem>
                            <DropdownItem onClick={logOut}>Log Out</DropdownItem>
                        </DropdownMenu>
                        :
                        <DropdownMenu className="DropdownMenu">
                       
                        <DropdownItem divider />
                        <DropdownItem><Link to="/Login"><div>Login</div></Link></DropdownItem>
                        
                    </DropdownMenu>}
                    </Dropdown>
               </div>
            </StyledDrop>
       </div>
    );
}
function mapStateToProps(state){
    return {
        personName:state.user.user,
        
    }
}
const mapDispatchToProps = {
    addInfo:addInfo,
    success:success
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
    )(Navigation));

