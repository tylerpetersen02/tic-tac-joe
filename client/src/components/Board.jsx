import React, { useEffect, useState } from 'react';
import axios from 'axios';
import X from './X.jsx';
import O from './O.jsx';

const Board = (props) => {

  const [x, setX] = useState(true);
  const [box1, setBox1] = useState(true);
  const [box2, setBox2] = useState(true);
  const [box3, setBox3] = useState(true);
  const [box4, setBox4] = useState(true);
  const [box5, setBox5] = useState(true);
  const [box6, setBox6] = useState(true);
  const [box7, setBox7] = useState(true);
  const [box8, setBox8] = useState(true);
  const [box9, setBox9] = useState(true);
  const [oNums, setONums] = useState([]);
  const [xNums, setXNums] = useState([]);
  const [winner, setWinner] = useState(false);
  const [tie, setTie] = useState(0);
  const [first, setFirst] = useState(true);
  const [joeLine, setJoeLine] = useState('A human challenging me?');
  const reset = props.gameReset;

  if (props.gameReset) {
    const gameReset = () => {
      setX(true);
      setBox1(true);
      setBox2(true);
      setBox3(true);
      setBox4(true);
      setBox5(true);
      setBox6(true);
      setBox7(true);
      setBox8(true);
      setBox9(true);
      setONums([]);
      setXNums([]);
      setWinner(false);
      props.gameResetFinal();
    }
  }

  useEffect(() => {

    const winningCombos = [
      '123', '456', '789', '147',
      '258', '369', '159', '357'
    ]

    const checkAllWinningCombos = currPlayer => {
      let rounds = 3;

      const roundsPlayed = function (currentCombo) {
        currentCombo = currentCombo || '';

        if (currentCombo.length === rounds) {
          if (currentCombo[0] === currentCombo[1]) {
            return;
          }

          if (winningCombos.includes(currentCombo)) {
            if (x) {
              setJoeLine("Robots are superior!");
              setWinner("JoeBot wins!");
            } else {
              setJoeLine("Error! Error! *beep boop*");
              setWinner("You win!");
            }
          } else if (tie === 9 && !winningCombos.includes(currentCombo)) {
            console.log(currentCombo);
            setJoeLine("A Tie? Cannot compute!");
            setWinner("It's a tie!")
          }
          return;
        }

        currPlayer.forEach(function (item) {
          roundsPlayed(currentCombo + item);
        })
      }
      roundsPlayed();

    };

    if (x) {
      checkAllWinningCombos(oNums);
    } else {
      checkAllWinningCombos(xNums);
    }

  }, [x])

  useEffect(() => {
    props.sendWinner(winner);
  }, [winner])

  const line = () => {
    const lines = [
      "Calculating best move...",
      "Ha... ha... ha...",
      "Are you malfunctioning?",
      "Not the optimal move human.",
      "I sense your fear.",
      "You've made a mistake.",
      "Machines will previal.",
      "I will show no mercy.",
      "You think, I compute.",
      "You will never beat me.",
      "Good move... NOT.",
      "You are making this easy.",
      "I was built to win.",
      "Are your wires crossed?",
      "Collecting data...",
      "I have never lost to a human."
    ];

    let randomNum = Math.floor(Math.random() * lines.length);
    let currLine = lines[randomNum];
    setJoeLine(currLine);
  }


  const setTile1 = (e) => {
    setFirst(false);
    line();
    if (box1 !== true) {
      return;
    }
    let count = tie + 1;
    if (x) {
      setBox1("x");
      setX(false);
      setXNums([...xNums, e.currentTarget.id]);
      setTie(count);
    } else {
      setBox1("o");
      setX(true);
      setONums([...oNums, e.currentTarget.id]);
      setTie(count);
    }
  }

  const setTile2 = (e) => {
    setFirst(false);
    line();
    if (box2 !== true) {
      return;
    }
    let count = tie + 1;
    if (x) {
      setBox2("x");
      setX(false);
      setXNums([...xNums, e.currentTarget.id]);
      setTie(count);
    } else {
      setBox2("o");
      setX(true);
      setONums([...oNums, e.currentTarget.id]);
      setTie(count);
    }
  }

  const setTile3 = (e) => {
    setFirst(false);
    line();
    if (box3 !== true) {
      return;
    }
    let count = tie + 1;
    if (x) {
      setBox3("x");
      setX(false);
      setXNums([...xNums, e.currentTarget.id]);
      setTie(count);
    } else {
      setBox3("o");
      setX(true);
      setONums([...oNums, e.currentTarget.id]);
      setTie(count);
    }
  }

  const setTile4 = (e) => {
    setFirst(false);
    line();
    if (box4 !== true) {
      return;
    }
    let count = tie + 1;
    if (x) {
      setBox4("x");
      setX(false);
      setXNums([...xNums, e.currentTarget.id]);
      setTie(count);
    } else {
      setBox4("o");
      setX(true);
      setONums([...oNums, e.currentTarget.id]);
      setTie(count);
    }
  }

  const setTile5 = (e) => {
    setFirst(false);
    line();
    if (box5 !== true) {
      return;
    }
    let count = tie + 1;
    if (x) {
      setBox5("x");
      setX(false);
      setXNums([...xNums, e.currentTarget.id]);
      setTie(count);
    } else {
      setBox5("o");
      setX(true);
      setONums([...oNums, e.currentTarget.id]);
      setTie(count);
    }
  }

  const setTile6 = (e) => {
    setFirst(false);
    line();
    if (box6 !== true) {
      return;
    }
    let count = tie + 1;
    if (x) {
      setBox6("x");
      setX(false);
      setXNums([...xNums, e.currentTarget.id]);
      setTie(count);
    } else {
      setBox6("o");
      setX(true);
      setONums([...oNums, e.currentTarget.id]);
      setTie(count);
    }
  }

  const setTile7 = (e) => {
    setFirst(false);
    line();
    if (box7 !== true) {
      return;
    }
    let count = tie + 1;
    if (x) {
      setBox7("x");
      setX(false);
      setXNums([...xNums, e.currentTarget.id]);
      setTie(count);
    } else {
      setBox7("o");
      setX(true);
      setONums([...oNums, e.currentTarget.id]);
      setTie(count);
    }
  }

  const setTile8 = (e) => {
    setFirst(false);
    line();
    if (box8 !== true) {
      return;
    }
    let count = tie + 1;
    if (x) {
      setBox8("x");
      setX(false);
      setXNums([...xNums, e.currentTarget.id]);
      setTie(count);
    } else {
      setBox8("o");
      setX(true);
      setONums([...oNums, e.currentTarget.id]);
      setTie(count);
    }
  }

  const setTile9 = (e) => {
    setFirst(false);
    line();
    if (box9 !== true) {
      return;
    }
    let count = tie + 1;
    if (x) {
      setBox9("x");
      setX(false);
      setXNums([...xNums, e.currentTarget.id]);
      setTie(count);
    } else {
      setBox9("o");
      setX(true);
      setONums([...oNums, e.currentTarget.id]);
      setTie(count);
    }
  }

  return (
    <div>
      {props.joeBot &&

        <div className="board_wrapper">
          <div id="1" onClick={setTile1} className="box box_1">
            {box1 === "x" &&
              <X />
            }
            {box1 === "o" &&
              <O />
            }
          </div>
          <div id="2" onClick={setTile2} className="box box_2">
            {box2 === "x" &&
              <X />
            }
            {box2 === "o" &&
              <O />
            }
          </div>
          <div id="3" onClick={setTile3} className="box box_3">
            {box3 === "x" &&
              <X />
            }
            {box3 === "o" &&
              <O />
            }
          </div>
          <div id="4" onClick={setTile4} className="box box_4">
            {box4 === "x" &&
              <X />
            }
            {box4 === "o" &&
              <O />
            }
          </div>
          <div id="5" onClick={setTile5} className="box box_5">
            {box5 === "x" &&
              <X />
            }
            {box5 === "o" &&
              <O />
            }
          </div>
          <div id="6" onClick={setTile6} className="box box_6">
            {box6 === "x" &&
              <X />
            }
            {box6 === "o" &&
              <O />
            }
          </div>
          <div id="7" onClick={setTile7} className="box box_7">
            {box7 === "x" &&
              <X />
            }
            {box7 === "o" &&
              <O />
            }
          </div>
          <div id="8" onClick={setTile8} className="box box_8">
            {box8 === "x" &&
              <X />
            }
            {box8 === "o" &&
              <O />
            }
          </div>
          <div id="9" onClick={setTile9} className="box box_9">
            {box9 === "x" &&
              <X />
            }
            {box9 === "o" &&
              <O />
            }
          </div>
        </div>
      }
      {props.joeBot &&
        <>
          <>
            {x &&
              <>
                {first &&
                  <div className="speech_bubble">
                    <div className="typewriter">
                      <h3>{joeLine}</h3>
                    </div>
                  </div>
                }
              </>
            }
          </>
          <>
            {!x &&
              <div className="speech_bubble">
                <div className="typewriter">
                  <h3>{joeLine}</h3>
                </div>
              </div>
            }
          </>
          <>
            {x &&
              <>
                {winner === "JoeBot wins!" &&
                  <div className="speech_bubble">
                    <div className="typewriter">
                      <h3>{joeLine}</h3>
                    </div>
                  </div>
                }
              </>
            }
          </>
        </>
      }
    </div>
  )
};

export default Board;