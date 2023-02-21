import React, { useState } from "react";

export default function Commitment () {
    return (
        <div className="instruction" >
            <h1>Our commitment</h1>
            <div className="content-container">          
                <div className="instruction-container">
                    <img src="5.jpg" alt="dead plant" border="0"/>
                    <div>
                        <p className="instruction-topic">To celebrate the value of plants at every stage of their lives</p>
                        <p>Because all plants, no matter what condition they are in, are valuable renewable resource</p>
                    </div>
                </div>
                <div className="instruction-container">
                    <img src="6.jpg" alt="hand" border="0"/>
                    <div>
                        <p className="instruction-topic">To keep our selves honest</p>
                        <p>We want to loop you in every step of the way, and keep nothing from our community. Because, we wouldn't be here without you.</p>
                    </div>
                </div>
                <div className="instruction-container">
                    <img src="7.png" alt="plant on hands" border="0"/>
                    <div>
                        <p className="instruction-topic">To make Australia grenner</p>
                        <p>This is a no brainer, you say? We think so too! Diligently creating a sustainable future for our planet should be top priority!</p>
                    </div>
                </div>
            </div> 
            <div className="btn-container">
                <button>Get Start!</button>
            </div>

        </div>
    )
}