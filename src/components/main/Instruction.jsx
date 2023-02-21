import React from "react";

export default function Instruction () {
    return (
        <div className="instruction">
            <h1>How it works...</h1>

            <div className="instruction-container">
                <img src="1.jpg" alt="dead plant" border="0"/>
                <div>
                    <p className="instruction-topic">Pick a kit that suits you</p>
                    <p>You can choose either a "Poetic parting" or a "Farewell with fanfare" kit.</p>
                </div>
            </div>
            <div className="instruction-container">
                <img src="2.jpeg" alt="cardboard box" border="0"/>
                <div>
                    <p className="instruction-topic">We'll send you everything you need</p>
                    <p>You chosen package will be sent to you, as well as a compostable parcel in which you will place you plant to rest.</p>
                </div>
            </div>
            <div className="instruction-container">
                <img src="3.jpg" alt="mail envelope" border="0"/>
                <div>
                    <p className="instruction-topic">Send your beloved plant to us</p>
                    <p>Once you've paid your respects and bagged up your dried up friend, mail it to us using the paid postage label.</p>
                </div>
            </div>
            <div className="instruction-container">
                <img src="4.png" alt="thumbs up" border="0"/>
                <div>
                    <p className="instruction-topic">We'll take care of the rest!</p>
                    <p>We compost the whole thing - parcel, plant and all! Once your plants turned into nutritious compost, we will use it to give life to new trees!</p>
                </div>
            </div>

            <div className="btn-container">
                <button>Choose your memorial kit</button>
            </div>
            
        </div>
    )
}