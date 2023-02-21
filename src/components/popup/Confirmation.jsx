import React from "react";
import './Confirmation.scss'

export default function Confirmation (props) {
    return (props.trigger) ? (
        <div className = 'popup-con'>
            <div className = 'popup-inner-con'>
                <a onClick = { props.exit } ><img src="x.png" alt="x" border="0" width = '15' height = '15'/></a>
                <div className = 'block'>
                    <img src="correct.png" alt="correct" border="0" width = '104' height = '104'/>
                    <h1>Done!</h1>
                    <p>You will receive an email to confirm that you signed up to the newsletter.</p>
                    <div>
                        <p>You will also receive one email a month containing your new sletter.</p>
                        <p>You can unsubscribe any time.</p>
                    </div>
                    <div>
                        <button className = "close-btn-con" onClick = {props.handle}>Close Window</button>
                    </div>
                </div>
            </div>
        </div>
    ) : "" ;
}