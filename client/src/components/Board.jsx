import React, { useEffect, useState } from 'react';
import axios from 'axios';
import X from './X.jsx';
import O from './O.jsx';
import SpeechBubble from './SpeechBubble.jsx';

const Board = (props) => {

  const openMoves = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
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
  const [moves, setMoves] = useState(openMoves);
  const [winner, setWinner] = useState(false);
  const [tie, setTie] = useState(0);
  const [first, setFirst] = useState(true);
  const [joeLine, setJoeLine] = useState('');
  const reset = props.gameReset;
  console.log(moves);

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
      let win = false;

      const roundsPlayed = function (currentCombo) {
        currentCombo = currentCombo || '';

        if (currentCombo.length === rounds) {
          if (
            currentCombo[0] === currentCombo[1] ||
            currentCombo[1] === currentCombo[2]
          ) {
            return;
          }

          if (winningCombos.includes(currentCombo)) {
            win = true;
            if (x) {
              setJoeLine("Robots are superior!");
              setWinner("JoeBot wins!");
            } else {
              setJoeLine("Error! Error! *beep boop*");
              setWinner("You win!");
            }
          } else if (tie === 9 && !winningCombos.includes(currentCombo)) {
            setJoeLine("A Tie? Cannot compute!");
            setWinner("It's a tie!")
          }
          return;
        }
        if (win) {
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


  const placeTile = (e) => {
    let id = e.currentTarget.id;

    if (!moves.includes(id)) {
      return;
    }

    let count = tie + 1;
    setTie(count);
    setFirst(false);
    setX(!x);
    setMoves(moves.filter(item => item !== id));

    if (x) {
      setXNums([...xNums, id]);
      id === '1' && setBox1("x");
      id === '2' && setBox2("x");
      id === '3' && setBox3("x");
      id === '4' && setBox4("x");
      id === '5' && setBox5("x");
      id === '6' && setBox6("x");
      id === '7' && setBox7("x");
      id === '8' && setBox8("x");
      id === '9' && setBox9("x");
    } else {
      setONums([...oNums, id]);
      id === '1' && setBox1("o");
      id === '2' && setBox2("o");
      id === '3' && setBox3("o");
      id === '4' && setBox4("o");
      id === '5' && setBox5("o");
      id === '6' && setBox6("o");
      id === '7' && setBox7("o");
      id === '8' && setBox8("o");
      id === '9' && setBox9("o");
    }
  }

  const handleJoeLine = (line) => {
    setJoeLine(line);
  }

  return (
    <div>
      {props.joeBot &&

        <div className="board_wrapper">
          <div id="1" onClick={placeTile} className="box box_1">
            {box1 === "x" &&
              <X />
            }
            {box1 === "o" &&
              <O />
            }
          </div>
          <div id="2" onClick={placeTile} className="box box_2">
            {box2 === "x" &&
              <X />
            }
            {box2 === "o" &&
              <O />
            }
          </div>
          <div id="3" onClick={placeTile} className="box box_3">
            {box3 === "x" &&
              <X />
            }
            {box3 === "o" &&
              <O />
            }
          </div>
          <div id="4" onClick={placeTile} className="box box_4">
            {box4 === "x" &&
              <X />
            }
            {box4 === "o" &&
              <O />
            }
          </div>
          <div id="5" onClick={placeTile} className="box box_5">
            {box5 === "x" &&
              <X />
            }
            {box5 === "o" &&
              <O />
            }
          </div>
          <div id="6" onClick={placeTile} className="box box_6">
            {box6 === "x" &&
              <X />
            }
            {box6 === "o" &&
              <O />
            }
          </div>
          <div id="7" onClick={placeTile} className="box box_7">
            {box7 === "x" &&
              <X />
            }
            {box7 === "o" &&
              <O />
            }
          </div>
          <div id="8" onClick={placeTile} className="box box_8">
            {box8 === "x" &&
              <X />
            }
            {box8 === "o" &&
              <O />
            }
          </div>
          <div id="9" onClick={placeTile} className="box box_9">
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
                  <SpeechBubble first={first} joeLine={joeLine} handleJoeLine={handleJoeLine} x={x} />
                }
              </>
            }
          </>
          <>
            {!x &&
              <>
                <>
                  {winner &&
                    <SpeechBubble winner={winner} first={first} joeLine={joeLine} handleJoeLine={handleJoeLine} x={x} />
                  }
                </>
                <>
                  {!winner &&
                    <SpeechBubble winner={winner} first={first} joeLine={joeLine} handleJoeLine={handleJoeLine} x={x} />
                  }
                </>
              </>
            }
          </>
          <>
            {x &&
              <>
                {winner &&
                  <SpeechBubble  winner={winner} first={first} joeLine={joeLine} handleJoeLine={handleJoeLine} x={x} />
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