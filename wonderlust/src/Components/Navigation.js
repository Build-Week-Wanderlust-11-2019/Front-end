import React from 'react';
import { Link } from 'react-router-dom'

function Navigation(props) {
    return (
        <div>
            <div className="Navbar">
                <Link to="home"><div>Home</div></Link>
                <Link to="About"><div>About</div></Link>
                <Link to="Contact"><div>Contact</div></Link>
            </div>
        </div>
    );
}

export default Navigation;