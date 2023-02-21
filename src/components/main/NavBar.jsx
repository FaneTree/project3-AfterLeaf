import React, { useState } from "react";
import {Link} from "react-router-dom";

export default function NavBar () {
    // const [about, setAbout] = useState(false);
    // const _handleAbout = () => {
    //     setAbout(!about);
    //     console.log(about);
    // }

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
                {/* {!about && 
                    <li href = "/about" onClick = {_handleAbout}>About us</li>                
                } */}
                {/* {about && 
                    <li href = "/" onClick = {_handleAbout}>Home</li> 
                } */}
                <li>Our newsletter</li>
            </ul>
            <a><img src="https://i.ibb.co/1924Z6L/cart.png" alt="cart" border="0" width = "25" height = "25"/></a>        
        </nav>
    )
}