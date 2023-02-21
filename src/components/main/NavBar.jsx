import React, { useState } from "react";

import {Link} from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'

export default function NavBar () {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (

        <div className = 'nav'>

            <div>
                <h1><Link to = "/">AfterLeaf</Link></h1>
                <p>Plant Memorial &<br/>Reincarnation</p>
            </div>
            

            <nav>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to = "/">Home</Link>
                </li>

                <li>
                    <Link className="nav-links" to = "/about">About us</Link>
                </li>
                <li className="nav-links">Our newsletter</li>

                    {click ? <a className="nav-links"><img src="cart.png" alt="cart" border="0" width = "25" height = "25"/></a>
                    : <a className="nav-links"><img src="https://i.ibb.co/1924Z6L/cart.png" alt="cart" border="0" width = "25" height = "25"/></a>
                }
                </ul>

                <button className="nav-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </button>
            </nav>

            
            
        </div>

    )
}