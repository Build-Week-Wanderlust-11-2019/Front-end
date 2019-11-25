import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import styled from 'styled-components';
import {connect} from 'react-redux'
import {addInfo,success} from '../../Actions/index' 
import './nav.css'

const StyledDrop = styled.div`
text-align: right;
background-color: #283E4F;
color: #dddddd;
display: flex;
justify-content: space-between;
align-items:center;
height:70px;
padding-right:20px;
position:absolute;
top:0;
width:100%;
z-index:1;
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
        props.addInfo("","","")
        props.success()
        props.history.push("/login")
    }

    const [open, setOpen] = useState(false)
    function toggler() {
        setOpen(!open)
    }
    console.log(props.personName)
   


    return (
       <div>
            {props.personName &&
            <StyledDrop >
                <Sh2>Wanderlust</Sh2>
               <div className="nav-desktop">
               <Link to="/user"><div>Experiences</div></Link>
               <Link to="/organizer"><div>Organizer</div></Link>
               <Link to="#"onClick={logOut}><div>Log Out</div></Link>
               </div>
               <div className="nav-mobile">
                    <Dropdown direction="left" isOpen={open} toggle={toggler}>
                        <DropdownToggle className="theButton">
                            <i className="fas fa-bars burgerMenu"></i>
                        </DropdownToggle>
                        <DropdownMenu className="DropdownMenu">
                            <DropdownItem header>{props.personName.name}</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem><Link to="/user"><div>Experiences</div></Link></DropdownItem>
                            <DropdownItem><Link to="/organizer"><div>Organizer</div></Link></DropdownItem>
                            <DropdownItem onClick={logOut}>Log Out</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
               </div>
            </StyledDrop>
            }
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

