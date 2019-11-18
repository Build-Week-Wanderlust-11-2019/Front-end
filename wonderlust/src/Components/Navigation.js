import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";


function Navigation(props) {
    function logOut(event){
        event.preventDefault()
        localStorage.removeItem("token")
        props.history.push("/login")
    }

    const [open, setOpen] = useState(false)
    function toggler(){
        setOpen(!open)
    }
    return (
        <Dropdown isOpen={open} toggle={toggler}>
            <DropdownToggle className="theButton">
            <i className="fas fa-bars burgerMenu"></i>
            </DropdownToggle>
            <DropdownMenu className="DropdownMenu">
                <DropdownItem header></DropdownItem>
                <DropdownItem divider/>
                <DropdownItem><Link to="home"><div>Home</div></Link></DropdownItem>
                <DropdownItem><Link to="About"><div>About</div></Link></DropdownItem>
                <DropdownItem onClick={logOut}>Log Out</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default withRouter (Navigation);