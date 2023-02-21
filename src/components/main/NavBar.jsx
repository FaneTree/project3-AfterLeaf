import React, { useState } from "react";

import {Link} from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'

export default function NavBar () {
    const [isMobile, setIsMobile] = useState(true)

    return (
        <nav className = 'nav'>
            <h1><Link to = "/">AfterLeaf</Link></h1>
            <p>Plant Memorial &<br/>Reincarnation</p>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/about">About us</Link>
                </li>
                <li>Our newsletter</li>
            </ul>
            <a><img src="https://i.ibb.co/1924Z6L/cart.png" alt="cart" border="0" width = "25" height = "25"/></a>        
            <button className="mobile-menu-icon">
                    {isMobile ? <FaBars /> : <FaTimes />}
            </button>
        </nav>
    )
}