import React from "react";

export default function Content () {
    return (
        <div className = 'content'>
            <div>
                <div className="content-container">

                    <div className="text-container">
                        <h1>Give your plants the send off<br/>they deserve</h1>

                        <div className="p-container">
                            <p>
                                We help you give your plants a heartfelt memorial
                                <br/>before you send them to us to be composted
                            </p>

                            <p>
                                You get closure. We give them new life by nourishing our 
                                forests and bushlands. You fee okay about killing your 
                                plans. Its a win, win, win!
                            </p>
                        </div>
                    </div>

                    <div className="img-container">
                      <img src="Content.png" alt="CEO" border="0"/>
                    </div>
                    
                </div>
                
                <div className="btn-container">
                    <button>Choose your memorial kit</button>
                </div>
                
            </div>
        </div>
    )
}