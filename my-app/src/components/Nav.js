import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Nav.css'

function Nav() {
    return (
        <nav>
            <ul className = "nav_menu">
                <Link className="links" to = "/">
                  <li>Home</li>  
                </Link>
                <Link className="links" to = "/Credits">
                  <li>Credits</li>  
                </Link>
                 <Link className="links" to = "/Debits">
                  <li>Debits</li>  
                </Link>
                <Link className="links" to = "/userProfile">
                  <li>Profile</li>  
                </Link>
                <Link className="links" to = "/Login">
                  <li>Login</li>  
                </Link>
               
            </ul>
        </nav>
    );
}
export default Nav;
