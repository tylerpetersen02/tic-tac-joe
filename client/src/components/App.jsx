import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Board from './Board.jsx';

const App = (props) => {

  return (
    <div>
      <h1 className="glow">WELCOME TO TIC-TAC-JOE</h1>
      <h3>Take on the reigning AI champ, <strong>JoeBot</strong>, or challenge a friend!</h3>
      {/* <div>
        <JoeBot />
        <Friend />
      </div>
      <div>
        <Easy />
        <Medium />
        <Hard />
      </div> */}
      <Board />
    </div>
  )
};

export default App;