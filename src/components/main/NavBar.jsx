import React from "react";

export default function NavBar () {
    return (
        <nav className = 'nav'>
            <h1>AfterLeaf</h1>
            <p>Plant Memorial &<br/>Reincarnation</p>
            <ul>
                <li>About us</li>
                <li>Our newsletter</li>
            </ul>
            <a><img src="https://i.ibb.co/1924Z6L/cart.png" alt="cart" border="0" width = "25" height = "25"/></a>
        </nav>
    )
}