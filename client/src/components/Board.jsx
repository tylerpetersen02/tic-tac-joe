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
  const [playerMove, setPlayerMove] = useState(false);
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
      setTie(0);
      setFirst(true);
      props.gameResetFinal();
    }
  }

  const checkAllWinningCombos = currPlayer => {
    let checkWinner = 3;

    const winningCombos = [
      '123', '456', '789', '147',
      '258', '369', '159', '357'
    ]

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

  useEffect(() => {
    checkAllWinningCombos(xNums);
    checkAllWinningCombos(oNums);

    const checkPotentialWinningCombos = (currPlayer) => {
      const potentialWinningCombos = [
        '12', '13', '14', '15', '17', '19',
        '23', '25', '28', '35', '36', '37',
        '39', '45', '46', '47', '56', '57',
        '58', '59', '69', '78', '79', '89'
      ]
      const potential = function (currentCombo) {
        currentCombo = currentCombo || '';
        if (currentCombo.length > 2) {
          return;
        }

        if (currentCombo.length === 2) {
          if (currentCombo[0] === currentCombo[1]) {
            return;
          }

          if (potentialWinningCombos.includes(currentCombo)) {
            console.log('potential combo', currentCombo)
            const timer = setTimeout(() => {
              switch (currentCombo) {
                case '12':
                  if (!moves.includes('3')) {
                    break;
                  }
                  setBox3('o');
                  setONums([...oNums, '3']);
                  setMoves(moves.filter(item => item !== '3'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '13':
                  if (!moves.includes('3')) {
                    break;
                  }
                  setBox2('o');
                  setONums([...oNums, '3']);
                  setMoves(moves.filter(item => item !== '3'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '14':
                  if (!moves.includes('7')) {
                    break;
                  }
                  setBox7('o');
                  setONums([...oNums, '7']);
                  setMoves(moves.filter(item => item !== '7'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '15':
                  if (!moves.includes('9')) {
                    break;
                  }
                  setBox9('o');
                  setONums([...oNums, '9']);
                  setMoves(moves.filter(item => item !== '9'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '17':
                  if (!moves.includes('4')) {
                    break;
                  }
                  setBox4('o');
                  setONums([...oNums, '4']);
                  setMoves(moves.filter(item => item !== '4'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '19':
                  if (!moves.includes('5')) {
                    break;
                  }
                  setBox5('o');
                  setONums([...oNums, '5']);
                  setMoves(moves.filter(item => item !== '5'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '23':
                  if (!moves.includes('1')) {
                    break;
                  }
                  setBox1('o');
                  setONums([...oNums, '1']);
                  setMoves(moves.filter(item => item !== '1'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '25':
                  if (!moves.includes('8')) {
                    break;
                  }
                  setBox8('o');
                  setONums([...oNums, '8']);
                  setMoves(moves.filter(item => item !== '8'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '28':
                  if (!moves.includes('5')) {
                    break;
                  }
                  setBox5('o');
                  setONums([...oNums, '5']);
                  setMoves(moves.filter(item => item !== '5'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '35':
                  if (!moves.includes('7')) {
                    break;
                  }
                  setBox7('o');
                  setONums([...oNums, '7']);
                  setMoves(moves.filter(item => item !== '7'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '36':
                  if (!moves.includes('9')) {
                    break;
                  }
                  setBox9('o');
                  setONums([...oNums, '9']);
                  setMoves(moves.filter(item => item !== '9'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '37':
                  if (!moves.includes('5')) {
                    break;
                  }
                  setBox5('o');
                  setONums([...oNums, '5']);
                  setMoves(moves.filter(item => item !== '5'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '39':
                  if (!moves.includes('6')) {
                    break;
                  }
                  setBox6('o');
                  setONums([...oNums, '6']);
                  setMoves(moves.filter(item => item !== '6'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '45':
                  if (!moves.includes('6')) {
                    break;
                  }
                  setBox6('o');
                  setONums([...oNums, '6']);
                  setMoves(moves.filter(item => item !== '6'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '46':
                  if (!moves.includes('5')) {
                    break;
                  }
                  setBox5('o');
                  setONums([...oNums, '5']);
                  setMoves(moves.filter(item => item !== '5'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '47':
                  if (!moves.includes('1')) {
                    break;
                  }
                  setBox1('o');
                  setONums([...oNums, '1']);
                  setMoves(moves.filter(item => item !== '1'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '56':
                  if (!moves.includes('4')) {
                    break;
                  }
                  setBox4('o');
                  setONums([...oNums, '4']);
                  setMoves(moves.filter(item => item !== '4'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '57':
                  if (!moves.includes('3')) {
                    break;
                  }
                  setBox3('o');
                  setONums([...oNums, '3']);
                  setMoves(moves.filter(item => item !== '3'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '58':
                  if (!moves.includes('2')) {
                    break;
                  }
                  setBox2('o');
                  setONums([...oNums, '2']);
                  setMoves(moves.filter(item => item !== '2'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '59':
                  if (!moves.includes('1')) {
                    break;
                  }
                  setBox1('o');
                  setONums([...oNums, '1']);
                  setMoves(moves.filter(item => item !== '1'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '69':
                  if (!moves.includes('3')) {
                    break;
                  }
                  setBox3('o');
                  setONums([...oNums, '3']);
                  setMoves(moves.filter(item => item !== '3'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '78':
                  if (!moves.includes('9')) {
                    break;
                  }
                  setBox9('o');
                  setONums([...oNums, '9']);
                  setMoves(moves.filter(item => item !== '9'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '79':
                  if (!moves.includes('8')) {
                    break;
                  }
                  setBox8('o');
                  setONums([...oNums, '8']);
                  setMoves(moves.filter(item => item !== '8'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
                case '89':
                  if (!moves.includes('7')) {
                    break;
                  }
                  setBox7('o');
                  setONums([...oNums, '7']);
                  setMoves(moves.filter(item => item !== '7'));
                  setPlayerMove(true);
                  setTie(tie + 1);
                  setX(true);
                  return;
              }
            }, 2500);
            return () => clearTimeout(timer);
          }
        }
        // if (!playerMove) {
        //   joeBot.forEach(item => {
        //     potential(currentCombo + item);
        //   });
        // }
        if (!playerMove) {
          currPlayer.forEach(item => {
            potential(currentCombo + item);
          });
        }
        console.log('playerMover combo', playerMove);
        return;
      };
      potential();

      return;
    }


    const randomSpot = () => {
      console.log('random')

      const timer = setTimeout(() => {
        let random = Math.floor(Math.random() * (moves.length - 1) + 1);

        switch (moves[random]) {
          case '1':
            setBox1('o');
            break;
          case '2':
            setBox2('o');
            break;
          case '3':
            setBox3('o');
            break;
          case '4':
            setBox4('o');
            break;
          case '5':
            setBox5('o');
            break;
          case '6':
            setBox6('o');
            break;
          case '7':
            setBox7('o');
            break;
          case '8':
            setBox8('o');
            break;
          case '9':
            setBox9('o');
            break;
        }
        setMoves(moves.filter(item => item !== moves[random]));
        setONums([...oNums, moves[random]]);
        setPlayerMove(true);
        setX(true);
      }, 2500);
      return () => clearTimeout(timer);
    }


    console.log('playerMove : ', playerMove, ' x : ', x)

    if (!playerMove && !x) {
      console.log('first', oNums.length, xNums.length)
      checkPotentialWinningCombos(xNums);
    }

    console.log('playerMove2 : ', playerMove, ' x2 : ', x)
    if (!playerMove && !x) {
      if (moves.includes('5')) {
        const timer = setTimeout(() => {
          setBox5('o');
          setMoves(moves.filter(item => item !== '5'));
          setONums([...oNums, '5']);
          setPlayerMove(true);
          setX(true);
        }, 2500);
        return () => clearTimeout(timer);
      } else {
        console.log('random', oNums.length, xNums.length)
        randomSpot();
      }
    }
    console.log('last', oNums.length, xNums.length)
    console.log('----------------------------------------')
    return;
  }, [x])

  useEffect(() => {
    props.sendWinner(winner);
  }, [winner])


  const placeTile = (e) => {
    let id = e.currentTarget.id;

    if (!moves.includes(id)) {
      return;
    }

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
      setPlayerMove(false);
      setX(false);
      console.log('___________')
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