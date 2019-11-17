import React from 'react';
import { Link, withRouter } from 'react-router-dom'

function Navigation(props) {
    function logOut(event){
        event.preventDefault()
        localStorage.removeItem("token")
        props.history.push("/login")
    }

    return (
        <div>
            <div className="Navbar">
                <Link to="home"><div>Home</div></Link>
                <Link to="About"><div>About</div></Link>
                <button onClick={logOut}><div>Log Out</div></button>
            </div>
        </div>
    );
}

export default withRouter (Navigation);