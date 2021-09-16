import React, { useEffect, useState } from 'react';
import axios from 'axios';
import X from './X.jsx';
import O from './O.jsx';

const Board = (props) => {

  const [x, setX] = useState(true);
  const [o, setO] = useState(true);
  const [box1, setBox1] = useState("one");
  const [box2, setBox2] = useState("two");
  const [box3, setBox3] = useState("three");
  const [box4, setBox4] = useState("four");
  const [box5, setBox5] = useState("five");
  const [box6, setBox6] = useState("six");
  const [box7, setBox7] = useState("seven");
  const [box8, setBox8] = useState("eight");
  const [box9, setBox9] = useState("nine");
  console.log(box1)

  const setTile = (e) => {
    if (x) {

    }
  }

  return (
    <div className="board_wrapper">
        <div id="1" onClick={setTile} className="box box_1">
          <X />
        </div>
        <div className="box box_2">
          <O />
        </div>
        <div className="box box_3"></div>
        <div className="box box_4"></div>
        <div className="box box_5"></div>
        <div className="box box_6"></div>
        <div className="box box_7"></div>
        <div className="box box_8"></div>
        <div className="box box_9"></div>
    </div>
  )
};

export default Board;