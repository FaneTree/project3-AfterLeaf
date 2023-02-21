import React, { useState } from "react";

import NavBar from "../main/NavBar";
import About from './About'
import Commitment from './Commitment'
import SignUp from '../main/SignUp'
import Footer from '../main/Footer'


export default function AboutRoute () {
    return (
        <div>
            <NavBar />
            <About />
            <Commitment />
            <SignUp />
            <Footer />
        </div>
    )
}