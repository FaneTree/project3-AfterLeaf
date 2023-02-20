import React, { useState } from "react";

import Confirmation from "../popup/Confirmation";
import PopUp from "../popup/PopUp";

export default function SignUp () {
    const [signUp, setSignUp ] = useState(false);
    const [confirmation, setConfirmation ] = useState(false);

    const _handleSignUp = function (e) {
        e.preventDefault();
        setSignUp(true);
    };

    const _handleConfirmation = function (e) {
        e.preventDefault();
        setSignUp(false);
        setConfirmation(true);
    }

    const _handleBack = function (e) {
        e.preventDefault();
        setSignUp(false);
        setConfirmation(false);
    }

    return (
        <div>
            <h1>Sign up to our newsletter</h1>
            <h2>Find out what your plants are up to in their after leaf!</h2>

            <p>
                Get updates on how our forests and bushlands are going (and growing!) and how your beloved plants are helping. Our talented writing team also contribute editorials and very do-able tips on how to live greener.
            </p>

            <p>
                We'll keep your email condidential. You will only receive a confirmation email when you sign-up, and one newsletter a month, we promise!
            </p>

            <button onClick = {_handleSignUp}>Sign up</button>

            {/* <Modal open = {signUp} onClose = {_handleBack} >
                <PopUp handle = {_handleConfirmation} />
            </Modal>

            <Modal open = {confirmation} onClose = {_handleBack} >
                <Confirmation handle = {_handleBack}/>    
            </Modal> */}
        </div>
    )
}