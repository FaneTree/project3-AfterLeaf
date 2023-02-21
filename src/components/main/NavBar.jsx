import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'

export default function NavBar () {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div className = 'nav'>

            <div>
                <h1>AfterLeaf</h1>
                <p>Plant Memorial &<br/>Reincarnation</p>
            </div>
            

            <nav>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-links">About us</li>
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