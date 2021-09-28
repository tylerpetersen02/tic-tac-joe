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
      setMoves(openMoves);
      props.gameResetFinal();
    }
  }

  useEffect(() => {
    console.log('0', x);
    let playerMove = false;
    const winningCombos = [
      '123', '456', '789', '147',
      '258', '369', '159', '357'
    ]

    const checkAllWinningCombos = currPlayer => {
      let checkWinner = 3;

      const roundsPlayed = function (currentCombo) {
        currentCombo = currentCombo || '';

        if (currentCombo.length === checkWinner) {
          if (
            currentCombo[1] === currentCombo[2] ||
            currentCombo[0] === currentCombo[1]
          ) {
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
            setJoeLine("A Tie? Cannot compute!");
            setWinner("It's a tie!")
          }
          return;
        }
        if (winner) {
          return;
        }
        currPlayer.forEach(item => {
          roundsPlayed(currentCombo + item);
        })
      }
      roundsPlayed();

    };

    console.log('1', x);

    const checkPotentialWinningCombos = currPlayer => {

      const potentialWinningCombos = [
        '12', '13', '14', '15', '17', '19',
        '23', '25', '28', '35', '36', '37',
        '39', '45', '46', '47', '56', '57',
        '58', '59', '69', '78', '79', '89'
      ]

      const potential = function (currentCombo) {
        currentCombo = currentCombo || '';
        console.log(currentCombo);
        console.log(currentCombo.length)

        if (currentCombo.length > 2) {
          return;
        }

        if (currentCombo.length === 2) {
          if (currentCombo[0] === currentCombo[1]) {
            return;
          }

          if (potentialWinningCombos.includes(currentCombo)) {
            let count = tie + 1;
            playerMove = true;
            setX(true);
            setTie(count);
            const timer = setTimeout(() => {
              switch (currentCombo) {
                case '12':
                  if (!moves.includes('3')) {
                    return;
                  }
                  setBox3('o');
                  setONums([...oNums, 3]);
                  setMoves(moves.filter(item => item !== '3'));
                  break;
                case '13':
                  if (!moves.includes('3')) {
                    return;
                  }
                  setBox2('o');
                  setONums([...oNums, 3]);
                  setMoves(moves.filter(item => item !== '3'));
                  break;
                case '14':
                  if (!moves.includes('7')) {
                    return;
                  }
                  setBox7('o');
                  setONums([...oNums, 7]);
                  setMoves(moves.filter(item => item !== '7'));
                  break;
                case '15':
                  if (!moves.includes('9')) {
                    return;
                  }
                  setBox9('o');
                  setONums([...oNums, 9]);
                  setMoves(moves.filter(item => item !== '9'));
                  break;
                case '17':
                  if (!moves.includes('4')) {
                    return;
                  }
                  setBox4('o');
                  setONums([...oNums, 4]);
                  setMoves(moves.filter(item => item !== '4'));
                  break;
                case '19':
                  if (!moves.includes('5')) {
                    return;
                  }
                  setBox5('o');
                  setONums([...oNums, 5]);
                  setMoves(moves.filter(item => item !== '5'));
                  break;
                case '23':
                  if (!moves.includes('1')) {
                    return;
                  }
                  setBox1('o');
                  setONums([...oNums, 1]);
                  setMoves(moves.filter(item => item !== '1'));
                  break;
                case '25':
                  if (!moves.includes('8')) {
                    return;
                  }
                  setBox8('o');
                  setONums([...oNums, 8]);
                  setMoves(moves.filter(item => item !== '8'));
                  break;
                case '28':
                  if (!moves.includes('5')) {
                    return;
                  }
                  setBox5('o');
                  setONums([...oNums, 5]);
                  setMoves(moves.filter(item => item !== '5'));
                  break;
                case '35':
                  if (!moves.includes('7')) {
                    return;
                  }
                  setBox7('o');
                  setONums([...oNums, 7]);
                  setMoves(moves.filter(item => item !== '7'));
                  break;
                case '36':
                  if (!moves.includes('9')) {
                    return;
                  }
                  setBox9('o');
                  setONums([...oNums, 9]);
                  setMoves(moves.filter(item => item !== '9'));
                  break;
                case '37':
                  if (!moves.includes('5')) {
                    return;
                  }
                  setBox5('o');
                  setONums([...oNums, 5]);
                  setMoves(moves.filter(item => item !== '5'));
                  break;
                case '39':
                  if (!moves.includes('6')) {
                    return;
                  }
                  setBox6('o');
                  setONums([...oNums, 6]);
                  setMoves(moves.filter(item => item !== '6'));
                  break;
                case '45':
                  if (!moves.includes('6')) {
                    return;
                  }
                  setBox6('o');
                  setONums([...oNums, 6]);
                  setMoves(moves.filter(item => item !== '6'));
                  break;
                case '46':
                  if (!moves.includes('5')) {
                    return;
                  }
                  setBox5('o');
                  setONums([...oNums, 5]);
                  setMoves(moves.filter(item => item !== '5'));
                  break;
                case '47':
                  if (!moves.includes('1')) {
                    return;
                  }
                  setBox1('o');
                  setONums([...oNums, 1]);
                  setMoves(moves.filter(item => item !== '1'));
                  break;
                case '56':
                  if (!moves.includes('4')) {
                    return;
                  }
                  setBox4('o');
                  setONums([...oNums, 4]);
                  setMoves(moves.filter(item => item !== '4'));
                  break;
                case '57':
                  if (!moves.includes('3')) {
                    return;
                  }
                  setBox3('o');
                  setONums([...oNums, 3]);
                  setMoves(moves.filter(item => item !== '3'));
                  break;
                case '58':
                  if (!moves.includes('2')) {
                    return;
                  }
                  setBox2('o');
                  setONums([...oNums, 2]);
                  setMoves(moves.filter(item => item !== '2'));
                  break;
                case '59':
                  if (!moves.includes('1')) {
                    return;
                  }
                  setBox1('o');
                  setONums([...oNums, 1]);
                  setMoves(moves.filter(item => item !== '1'));
                  break;
                case '69':
                  if (!moves.includes('3')) {
                    return;
                  }
                  setBox3('o');
                  setONums([...oNums, 3]);
                  setMoves(moves.filter(item => item !== '3'));
                  break;
                case '78':
                  if (!moves.includes('9')) {
                    return;
                  }
                  setBox9('o');
                  setONums([...oNums, 9]);
                  setMoves(moves.filter(item => item !== '9'));
                  break;
                case '79':
                  if (!moves.includes('8')) {
                    return;
                  }
                  setBox8('o');
                  setONums([...oNums, 8]);
                  setMoves(moves.filter(item => item !== '8'));
                  break;
                case '89':
                  if (!moves.includes('7')) {
                    return;
                  }
                  setBox7('o');
                  setONums([...oNums, 7]);
                  setMoves(moves.filter(item => item !== '7'));
                  break;
              }
            }, 2500);
            return () => clearTimeout(timer);
          }
        }
        if (playerMove) {
          return;
        }
        currPlayer.forEach(item => {
          potential(currentCombo + item);
        })
      };
      potential();
    }

    console.log('2', x);

    const randomSpot = () => {
      let random = Math.floor(Math.random() * (moves.length - 1) + 1);
      playerMove = true;
      setX(true);

      const timer = setTimeout(() => {
        switch (moves[random]) {
          case '1':
            setBox1('o');
            setONums([...oNums, 1]);
            setMoves(moves.filter(item => item !== '1'));
            break;
          case '2':
            setBox2('o');
            setONums([...oNums, 2]);
            setMoves(moves.filter(item => item !== '2'));
            break;
          case '3':
            setBox3('o');
            setONums([...oNums, 3]);
            setMoves(moves.filter(item => item !== '3'));
            break;
          case '4':
            setBox4('o');
            setONums([...oNums, 4]);
            setMoves(moves.filter(item => item !== '4'));
            break;
          case '5':
            setBox5('o');
            setONums([...oNums, 5]);
            setMoves(moves.filter(item => item !== '5'));
            break;
          case '6':
            setBox6('o');
            setONums([...oNums, 6]);
            setMoves(moves.filter(item => item !== '6'));
            break;
          case '7':
            setBox7('o');
            setONums([...oNums, 7]);
            setMoves(moves.filter(item => item !== '7'));
            break;
          case '8':
            setBox8('o');
            setONums([...oNums, 8]);
            setMoves(moves.filter(item => item !== '8'));
            break;
          case '9':
            setBox9('o');
            setONums([...oNums, 9]);
            setMoves(moves.filter(item => item !== '9'));
            break;
        }
      }, 2500);
      return () => clearTimeout(timer);
    }

    console.log('3', x);
    if (x) {
      checkAllWinningCombos(oNums);
    } else {
      checkAllWinningCombos(xNums);
      checkPotentialWinningCombos(xNums);
      console.log('playerMove', playerMove)
      if (!playerMove) {
        randomSpot();
      }
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
    }
    setX(false);
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
                <>
                  {first &&
                    <SpeechBubble
                      first={first}
                      joeLine={joeLine}
                      handleJoeLine={handleJoeLine}
                      x={x}
                    />
                  }
                  <>
                  </>
                  {winner &&
                    <SpeechBubble
                      winner={winner}
                      first={first}
                      joeLine={joeLine}
                      handleJoeLine={handleJoeLine}
                      x={x}
                    />
                  }
                </>
                <>
                  {!first &&
                    <>
                      {!winner &&
                        <SpeechBubble
                          winner={winner}
                          first={first}
                          joeLine={joeLine}
                          handleJoeLine={handleJoeLine}
                          x={x}
                        />
                      }
                    </>
                  }
                </>
              </>
            }
          </>
          <>
            {!x &&
              <>
                <>
                  {winner &&
                    <SpeechBubble
                      winner={winner}
                      first={first}
                      joeLine={joeLine}
                      handleJoeLine={handleJoeLine}
                      x={x}
                    />
                  }
                </>
                <>
                  {!winner &&
                    <SpeechBubble
                      winner={winner}
                      first={first}
                      joeLine={joeLine}
                      handleJoeLine={handleJoeLine}
                      x={x}
                    />
                  }
                </>
              </>
            }
          </>
        </>
      }
    </div>
  )
};

export default Board;