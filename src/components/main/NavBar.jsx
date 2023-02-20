import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'

export default function NavBar () {
    const [isMobile, setIsMobile] = useState(true)

    return (
        <div className = 'nav'>
            <h1>AfterLeaf</h1>
            <p>Plant Memorial &<br/>Reincarnation</p>

            <nav>
                <ul>
                    <li className="nav-links">About us</li>
                    <li className="nav-links">Our newsletter</li>
                </ul>
                <a className="nav-links"><img src="https://i.ibb.co/1924Z6L/cart.png" alt="cart" border="0" width = "25" height = "25"/></a>
                
                <button className="mobile-menu-icon">
                    {isMobile ? <FaBars /> : <FaTimes />}
                </button>
            </nav>
        </div>
    )
}