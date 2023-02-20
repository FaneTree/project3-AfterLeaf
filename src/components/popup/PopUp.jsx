import React, { useState } from "react";
import './Popup.scss'

export default function PopUp (props) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});

    const _handleFirstNameChange = (event) => {
        setFirstname(event.target.value);
    }

    const _handleLastNameChange = (event) => {
        setLastname(event.target.value);
    }

    const _handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        const formErrors = {};
        console.log('Submitted:', firstname, lastname, email);

        // condition to check for errors messages
            
        // As the business, I want the user to provide their first and last name
            // A first and last name is required
            if (!firstname) {
                formErrors.firstname = 'First name is required';
            }
            if (!lastname) {
                formErrors.lastname = 'Last name is required';
            }

            // A name cannot contain a number
            if ( /^\d+$/.test(firstname) ) {
                formErrors.firstname = 'First name cannot contain a number';
            }
            if (/^\d+$/.test(lastname)) {
                formErrors.lastname = 'Last name cannot contain a number';
            }

            // A name cannot contain a special character
            const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
            if ( specialChars.test(firstname) ) {
                formErrors.firstname = 'First name cannot contain a special character';
            }
            if ( specialChars.test(lastname)) {
                formErrors.lastname = 'Last name cannot contain a special character';
            }

            // A name must be at least two letters
            if (firstname.length < 2) {
                formErrors.firstname = 'First name must be at least two letters';
            }
            if (lastname.length < 2) {
                formErrors.lastname = 'Last name must be at least two letters';
            }
        
        // As the business, I want the user to provide their email address
            // An email address is required       
            if (!email) {
                formErrors.email = 'Email is required';
            } 
            // if (!/\S+@\S+\.\S+/.test(email)) {
            //     formErrors.email = 'Email is invalid';
            // }

            // An email address must contain exactly one @
            if (!email.includes("@") && ((email.match(/@/g) || []).length > 1)) {
                formErrors.email = 'Email address must contain exactly one @';
            }

            // An email address must contain at least one full stop (.)
            if (!email.includes(".")) {
                formErrors.email = 'Email address must contain at least one full stop (.)';
            }

        setErrors(formErrors);

        if (Object.keys(formErrors).length === 0) {
            props.exit();
            setFirstname('');
            setLastname('');
            setEmail('');
        }
    };

    return (props.trigger) ? (
        <div className = 'popup'>
            <div className = 'popup-inner'>
                <a onClick = { props.exit } >
                    <img src="https://i.ibb.co/2g5yDDs/vecteezy-x-png-transparent-9344493-556.png" alt="vecteezy-x-png-transparent-9344493-556" border="0" width = '20' height = '20'/>
                </a>

                <div>
                    <h1>Thank you for signing up!</h1>
                    <div>
                        <p>We just need your name and email.</p>
                        <p>They will be kept confidential, and will onlt be used to send you your newsletter.</p>
                    </div>
                    <p>All fileds are required and marked with an asterisk (*)</p>
                </div>

                {/* // check the conditions and submit => exit popup to confirmation */}
                <form onSubmit = {_handleSubmit} > 
                    <label>
                        First name*
                        <textarea type="text" name="name" value={firstname}  onChange={_handleFirstNameChange}></textarea>
                        {errors.firstname && <span className = 'error-msg'>{errors.firstname}</span>}
                    </label>
                    <label>
                        Last name*
                        <textarea type="text" name="name" value={lastname}  onChange={_handleLastNameChange}></textarea>
                        {errors.lastname && <span className = 'error-msg'>{errors.lastname}</span>}
                    </label>
                    <label>
                        Email*
                        <textarea type="text" name="name" value={email}  onChange={_handleEmailChange}></textarea>
                        {errors.email && <span className = 'error-msg'>{errors.email}</span>}
                    </label>
                    
                    <input className = "close-btn" type = "submit" value ="Sign Up"/>
                </form>
            </div>
        </div>
    ) : "" ;
}