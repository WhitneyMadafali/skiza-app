import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light py-4 shadow- grey-navbar">
                <div className="container">
                    
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="navbar-brand fw-bold fs-4" to="/">SKIZA - HOME</NavLink>
                            </li>
                           
                        </ul>
                    
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
