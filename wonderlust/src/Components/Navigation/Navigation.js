import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import styled from 'styled-components';



const StyledDrop = styled.div`
text-align: right;
background-color: #283E4F;
color: rgb(214, 150, 120);
display: flex;
justify-content: space-between;
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
            <h1>Wanderlust</h1>
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

