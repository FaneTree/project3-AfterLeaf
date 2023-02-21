import React, { useState } from "react";
import Content from './main/Content'
import Instruction from './main/Instruction'
import SignUp from './main/SignUp'
import Footer from './main/Footer'
import NavBar from './main/NavBar'

export default function About () {
    return (
        <div>
            <NavBar />
            <Content />
            <Instruction />
            <SignUp />
            <Footer />
        </div>
    )
}