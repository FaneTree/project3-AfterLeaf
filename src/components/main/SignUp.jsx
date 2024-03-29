import React, { useState } from "react";

import Confirmation from "../popup/Confirmation";
import PopUp from "../popup/PopUp";

export default function SignUp () {
    const [signUp, setSignUp ] = useState(false);
    const [confirmation, setConfirmation ] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const _handleSignUp = function (e) {
        e.preventDefault();
        setSignUp(true);
    };

    const _handleConfirmation = async function (e) {
        e.preventDefault();
        setSignUp(false);
        setConfirmation(true);
        await delay(4000);
        setConfirmation(false);
    }

    const _handleBack = function (e) {
        e.preventDefault();
        setSignUp(false);
        setConfirmation(false);
    }

    return (
        <div className="sign-up">

            <div className="content-container">
                <div className="img-container">
                    <img src="phone.png" alt="phone" border="0"/>
                </div>
                
                {/* <h1>Sign up to our <br /> newsletter</h1> */}

                <div className="text-container">
                    <h2>Find out what your plants are up to in their after leaf!</h2>

                    <div className="p-container">
                        <p>
                            Get updates on how our forests and bushlands are going (and growing!) and how your beloved plants are helping. Our talented writing team also contribute editorials and very do-able tips on how to live greener.
                        </p>

                        <p>
                            We'll keep your email condidential. You will only receive a confirmation email when you sign-up, and one newsletter a month, we promise!
                        </p>
                    </div>

                    <div className="btn-container">
                        <button onClick = {_handleSignUp}>Sign up</button>
                    </div>
                </div>
            </div>

            <PopUp handle = {_handleConfirmation} trigger = {signUp} exit = {_handleBack} />
            <Confirmation handle = {_handleBack} trigger = {confirmation} exit = {_handleBack} /> 

        </div>
    )
}