import React from "react";

export default function Footer () {
    return (
        <div className="footer">

            <div className="split-container">
                <div className="info-container">
                    <div className="about-container">
                        <h1>About Us</h1>
                        <ul>
                            <li>About AfterLeaf</li>
                            <li>Our commitment</li>
                            <li>Join our team</li>
                            <li>Tell a friend</li>
                            <li>Our policies</li>
                        </ul>
                    </div>
                    <div className="help-container">
                        <h1>Help</h1>
                        <ul>
                            <li>Contact us</li>
                            <li>FAQs</li>
                            <li>Shipping & returns</li>
                            <li>Track your order</li>
                        </ul>
                    </div>
                </div>

                <div className="right-container">
                    <div className="p-container">
                        <p>
                            We acknowledge the original custodians of this land. We pay our respects to elders past, present and emerging. This always was, and always will be, Aboriginal Land.
                        </p>
                    </div>
                    <div className="socials-container">
                        <h2>Find us on socials</h2>
                        <div className="icons-container">
                            <img className="logo" src="facebook.png" alt="facebook logo" border="0"/>
                            <img className="logo" src="instagram.png" alt="instagram logo" border="0"/>
                            <img className="logo" src="twitter.png" alt="twitter logo" border="0"/>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            
            
        </div>
    )
}