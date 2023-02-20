import React from "react";

export default function PopUp () {
    return (
        <div>
            <a><img src="https://i.ibb.co/2g5yDDs/vecteezy-x-png-transparent-9344493-556.png" alt="vecteezy-x-png-transparent-9344493-556" border="0"/></a>
            <div>
                <h1>Thank you for signing up!</h1>
                <div>
                    <p>We just need your name and email.</p>
                    <p>They will be kept confidential, and will onlt be used to send you your newsletter.</p>
                </div>
                <p>All fileds are required and marked with an asterisk (*)</p>
            </div>
            {/* <form onSubmit = { _handleSubmit }>
                <textarea onInput= { _handleInput } value = { content }></textarea>
                <input type = "submit" value ="Tell"/>
            </form> */}
        </div>
    )
}