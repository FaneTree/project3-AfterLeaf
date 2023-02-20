import React from "react";

export default function Confirmation () {
    return (
        <div className = 'container-confirmation'>
            <a><img src="https://i.ibb.co/2g5yDDs/vecteezy-x-png-transparent-9344493-556.png" alt="vecteezy-x-png-transparent-9344493-556" border="0"/></a>
            <div>
                <h1>Done!</h1>
                <p>You will receive an email to confirm that you signed up to the newsletter.</p>
                <div>
                    <p>You will also receive one email a month containing your new sletter.</p>
                    <p>You can unsubscribe any time.</p>
                </div>
                <button>Close Window</button>
            </div>
        </div>
    )
}