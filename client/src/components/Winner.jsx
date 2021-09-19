import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Winner = (props) => {

  const handleNewGame = () => {
    props.reset();
  }

  return (
    <div>
      <h2>{props.winner}</h2>
      <button onClick={handleNewGame} className="button">New game</button>
    </div>
  )
};

export default Winner;