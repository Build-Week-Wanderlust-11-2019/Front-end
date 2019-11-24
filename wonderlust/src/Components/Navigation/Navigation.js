import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import styled from 'styled-components';



const StyledDrop = styled.div`
text-align: right;
background-color: #283E4F;
color: #dddddd;
display: flex;
justify-content: space-between;
align-items:center;
height:70px;
padding-right:20px;

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
        props.history.push("/login")
    }

    const [open, setOpen] = useState(false)
    function toggler() {
        setOpen(!open)
    }
    const [personName, setPersonName] = useState('')
    useEffect(() => {
        setPersonName(localStorage.getItem('name'))
    }, [])


    return (
        <StyledDrop>
            <Sh2>Wanderlust</Sh2>
            <Dropdown direction="left" isOpen={open} toggle={toggler}>
                <DropdownToggle className="theButton">
                    <i className="fas fa-bars burgerMenu"></i>
                </DropdownToggle>
                <DropdownMenu className="DropdownMenu">
                    <DropdownItem header>{personName}</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><Link to="user"><div>User</div></Link></DropdownItem>
                    <DropdownItem><Link to="organizer"><div>Organizer</div></Link></DropdownItem>
                    <DropdownItem><Link to="About"><div>About</div></Link></DropdownItem>
                    <DropdownItem onClick={logOut}>Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </StyledDrop>
    );
}

export default withRouter(Navigation);

