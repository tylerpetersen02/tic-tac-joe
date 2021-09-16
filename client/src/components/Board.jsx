import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Board = (props) => {

  return (
    <div className="board_wrapper">
      <div className="board">
        <div className="box_1"></div>
        <div className="box_2"></div>
        <div className="box_3"></div>
        <div className="box_4"></div>
        <div className="box_5"></div>
        <div className="box_6"></div>
        <div className="box_7"></div>
        <div className="box_8"></div>
        <div className="box_9"></div>
      </div>
    </div>
  )
};

export default Board;