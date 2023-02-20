import React from "react";
import './Popup.scss'

export default function PopUp (props) {
    return (props.trigger) ? (
        <div className = 'popup'>
            <div className = 'popup-inner'>
                <a><img src="https://i.ibb.co/2g5yDDs/vecteezy-x-png-transparent-9344493-556.png" alt="vecteezy-x-png-transparent-9344493-556" border="0" width = '20' height = '20'/></a>

                <div>
                    <h1>Thank you for signing up!</h1>
                    <div>
                        <p>We just need your name and email.</p>
                        <p>They will be kept confidential, and will onlt be used to send you your newsletter.</p>
                    </div>
                    <p>All fileds are required and marked with an asterisk (*)</p>
                </div>

                <form onSubmit = {props.handle} >
                    <label>
                        First name*
                        <textarea></textarea>
                    </label>
                    <label>
                        Last name*
                        <textarea></textarea>
                    </label>
                    <label>
                        Email*
                        <textarea></textarea>
                    </label>
                    
                    <input className = "close-btn" type = "submit" value ="Sign Up"/>
                </form>
            </div>
        </div>
    ) : "" ;
}