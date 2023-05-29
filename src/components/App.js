import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.scss';

import NavBar from './main/NavBar'

import Home from './Home'
import AboutRoute from './about/AboutRoute'

function App() {

  return (
    <div className="App">
      <div className='page'>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<AboutRoute />} />
            </Routes>
      </div>
    </div>
  );
}

export default App;


// <a href="https://imgbb.com/"><img src="https://i.ibb.co/1924Z6L/cart.png" alt="cart" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload image on internet</a><br />

// <a href="https://imgbb.com/"><img src="https://i.ibb.co/F3GVszY/plantpot.png" alt="plantpot" border="0"></a>

// <a href="https://imgbb.com/"><img src="https://i.ibb.co/r2PtvdS/pending-clock-icon.png" alt="pending-clock-icon" border="0"></a>

// <a href="https://ibb.co/Rz79xxB"><img src="https://i.ibb.co/2g5yDDs/vecteezy-x-png-transparent-9344493-556.png" alt="vecteezy-x-png-transparent-9344493-556" border="0"></a> 