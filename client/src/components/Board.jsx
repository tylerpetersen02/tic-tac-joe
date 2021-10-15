import React, { useEffect, useState } from 'react';
import axios from 'axios';
import X from './X.jsx';
import O from './O.jsx';
import SpeechBubble from './SpeechBubble.jsx';

const Board = (props) => {

  const openMoves = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const [x, setX] = useState(true);
  const [playerStart, setPlayerStart] = useState(true);
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
  const [joeMove, setJoeMove] = useState(true);
  const [previousCombos, setPreviousCombos] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [winner, setWinner] = useState(false);
  const [tie, setTie] = useState(0);
  const [first, setFirst] = useState(true);
  const [joeLine, setJoeLine] = useState('');
  const reset = props.gameReset;
  let gameOver = false;
  console.log(tie)

  useEffect(() => {
    if (props.joeStart) {
      console.log('joe first')
      setX(!x);
      setJoeMove(!joeMove);
    }
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
    setPreviousCombos([]);
    setToggle(true);
    setTie(0);
    setFirst(true);
    gameOver = false;
  }, [])

  const handleJoeLine = (line) => {
    setJoeLine(line);
  }

  const checkAllWinningCombos = currPlayer => {
    console.log('checking tie', tie)
    if (
      (
        currPlayer.includes('1') &&
        currPlayer.includes('2') &&
        currPlayer.includes('3')
      ) ||
      (
        currPlayer.includes('4') &&
        currPlayer.includes('5') &&
        currPlayer.includes('6')
      ) ||
      (
        currPlayer.includes('7') &&
        currPlayer.includes('8') &&
        currPlayer.includes('9')
      ) ||
      (
        currPlayer.includes('1') &&
        currPlayer.includes('4') &&
        currPlayer.includes('7')
      ) ||
      (
        currPlayer.includes('2') &&
        currPlayer.includes('5') &&
        currPlayer.includes('8')
      ) ||
      (
        currPlayer.includes('3') &&
        currPlayer.includes('6') &&
        currPlayer.includes('9')
      ) ||
      (
        currPlayer.includes('1') &&
        currPlayer.includes('5') &&
        currPlayer.includes('9')
      ) ||
      (
        currPlayer.includes('3') &&
        currPlayer.includes('5') &&
        currPlayer.includes('7')
      )
    ) {

      if (x) {
        setJoeLine("Robots are superior!");
        setWinner("JoeBot wins!");
        gameOver = true;
      } else {
        setJoeLine("Error! Error! *beep boop*");
        setWinner("You win!");
        gameOver = true;
      }
    } else if (tie === 9) {
      setJoeLine("A Tie? Cannot compute!");
      setWinner("It's a tie!")
      gameOver = true;
    }

    return;
  };


  const checkPotentialWinningCombos = (currPlayerO, currPlayerX) => {

    let combo = '';
    const potentialWinningCombos = [
      '12', '13', '14', '15', '17', '19',
      '23', '25', '28', '35', '36', '37',
      '39', '45', '46', '47', '56', '57',
      '58', '59', '69', '78', '79', '89'
    ]

    const potential = function (bothMoves) {

      const findCombos = (bothMoves) => {
        bothMoves = bothMoves.sort();
        let joePlaceTile = false;
        for (var i = 0; i < bothMoves.length; i++) {

          if (joePlaceTile) {
            return;
          }
          // save point
          for (var j = i + 1; j < bothMoves.length; j++) {

            let curr = bothMoves[i].concat(bothMoves[j]);
            console.log(curr)
            if (
              potentialWinningCombos.includes(curr)
            ) {
              combo = curr;
              setPreviousCombos([...previousCombos, combo]);

              if (moves.includes(findThirdSpot(combo))) {
                console.log('combo', combo)
                const timer = setTimeout(() => {

                  switch (combo) {
                    case '12':
                      if (moves.includes('3')) {
                        setBox3('o');
                        setONums([...oNums, '3']);
                        setMoves(moves.filter(item => item !== '3'));
                        joePlaceTile = true;
                        break;
                      }
                    case '13':
                      if (moves.includes('2')) {
                        setBox2('o');
                        setONums([...oNums, '2']);
                        setMoves(moves.filter(item => item !== '2'));
                        joePlaceTile = true;
                        break;
                      }
                    case '14':
                      if (moves.includes('7')) {
                        setBox7('o');
                        setONums([...oNums, '7']);
                        setMoves(moves.filter(item => item !== '7'));
                        joePlaceTile = true;
                        break;
                      }
                    case '15':
                      if (moves.includes('9')) {
                        setBox9('o');
                        setONums([...oNums, '9']);
                        setMoves(moves.filter(item => item !== '9'));
                        joePlaceTile = true;
                        break;
                      }
                    case '17':
                      if (moves.includes('4')) {
                        setBox4('o');
                        setONums([...oNums, '4']);
                        setMoves(moves.filter(item => item !== '4'));
                        joePlaceTile = true;
                        break;
                      }
                    case '19':
                      if (moves.includes('5')) {
                        setBox5('o');
                        setONums([...oNums, '5']);
                        setMoves(moves.filter(item => item !== '5'));
                        joePlaceTile = true;
                        break;
                      }
                    case '23':
                      if (moves.includes('1')) {
                        setBox1('o');
                        setONums([...oNums, '1']);
                        setMoves(moves.filter(item => item !== '1'));
                        joePlaceTile = true;
                        break;
                      }
                    case '25':
                      if (moves.includes('8')) {
                        setBox8('o');
                        setONums([...oNums, '8']);
                        setMoves(moves.filter(item => item !== '8'));
                        joePlaceTile = true;
                        break;
                      }
                    case '28':
                      if (moves.includes('5')) {
                        setBox5('o');
                        setONums([...oNums, '5']);
                        setMoves(moves.filter(item => item !== '5'));
                        joePlaceTile = true;
                        break;
                      }
                    case '35':
                      if (moves.includes('7')) {
                        setBox7('o');
                        setONums([...oNums, '7']);
                        setMoves(moves.filter(item => item !== '7'));
                        joePlaceTile = true;
                        break;
                      }
                    case '36':
                      if (moves.includes('9')) {
                        setBox9('o');
                        setONums([...oNums, '9']);
                        setMoves(moves.filter(item => item !== '9'));
                        joePlaceTile = true;
                        break;
                      }
                    case '37':
                      if (moves.includes('5')) {
                        setBox5('o');
                        setONums([...oNums, '5']);
                        setMoves(moves.filter(item => item !== '5'));
                        joePlaceTile = true;
                        break;
                      }
                    case '39':
                      if (moves.includes('6')) {
                        setBox6('o');
                        setONums([...oNums, '6']);
                        setMoves(moves.filter(item => item !== '6'));
                        joePlaceTile = true;
                        break;
                      }
                    case '45':
                      if (moves.includes('6')) {
                        setBox6('o');
                        setONums([...oNums, '6']);
                        setMoves(moves.filter(item => item !== '6'));
                        joePlaceTile = true;
                        break;
                      }
                    case '46':
                      if (moves.includes('5')) {
                        setBox5('o');
                        setONums([...oNums, '5']);
                        setMoves(moves.filter(item => item !== '5'));
                        joePlaceTile = true;
                        break;
                      }
                    case '47':
                      if (moves.includes('1')) {
                        setBox1('o');
                        setONums([...oNums, '1']);
                        setMoves(moves.filter(item => item !== '1'));
                        joePlaceTile = true;
                        break;
                      }
                    case '56':
                      if (moves.includes('4')) {
                        setBox4('o');
                        setONums([...oNums, '4']);
                        setMoves(moves.filter(item => item !== '4'));
                        joePlaceTile = true;
                        break;
                      }
                    case '57':
                      if (moves.includes('3')) {
                        setBox3('o');
                        setONums([...oNums, '3']);
                        setMoves(moves.filter(item => item !== '3'));
                        joePlaceTile = true;
                        break;
                      }
                    case '58':
                      if (moves.includes('2')) {
                        setBox2('o');
                        setONums([...oNums, '2']);
                        setMoves(moves.filter(item => item !== '2'));
                        joePlaceTile = true;
                        break;
                      }
                    case '59':
                      if (moves.includes('1')) {
                        setBox1('o');
                        setONums([...oNums, '1']);
                        setMoves(moves.filter(item => item !== '1'));
                        joePlaceTile = true;
                        break;
                      }
                    case '69':
                      if (moves.includes('3')) {
                        setBox3('o');
                        setONums([...oNums, '3']);
                        setMoves(moves.filter(item => item !== '3'));
                        joePlaceTile = true;
                        break;
                      }
                    case '78':
                      if (moves.includes('9')) {
                        setBox9('o');
                        setONums([...oNums, '9']);
                        setMoves(moves.filter(item => item !== '9'));
                        joePlaceTile = true;
                        break;
                      }
                    case '79':
                      if (moves.includes('8')) {
                        setBox8('o');
                        setONums([...oNums, '8']);
                        setMoves(moves.filter(item => item !== '8'));
                        joePlaceTile = true;
                        break;
                      }
                    case '89':
                      if (moves.includes('7')) {
                        setBox7('o');
                        setONums([...oNums, '7']);
                        setMoves(moves.filter(item => item !== '7'));
                        joePlaceTile = true;
                        break;
                      }
                  }

                  setTie(tie + 1);
                }, 2500);
                return () => clearTimeout(timer);
              } else {
                combo = '';
                continue;
              }
            }
          }
        }
      }
      findCombos(bothMoves);

      return;
    };
    potential(currPlayerO);

    if (!combo) {
      potential(currPlayerX);
    }

    if (
      !combo
    ) {
      if (
        moves.includes('5')
      ) {
        chooseMiddle();
      } else if (
        !moves.includes('5') &&
        oNums.length === 0
      ) {
        chooseCorner();
      } else if (
        !moves.includes('5') &&
        oNums.length === 1 &&
        (
          (xNums.includes('2') && xNums.includes('4')) ||
          (xNums.includes('2') && xNums.includes('6')) ||
          (xNums.includes('4') && xNums.includes('8')) ||
          (xNums.includes('6') && xNums.includes('8'))
        )
      ) {
        playBlockingCorner();
      } else if (
        !moves.includes('5') &&
        oNums[0] !== '5' &&
        oNums.length === 1
      ) {
        playAdjacentCorner();
      } else {
        randomSpot();
      }
    }

    setJoeMove(true);
    setX(true);

    setToggle(!toggle);

    return;
  }


  // Chooses middle if not taken
  const chooseMiddle = () => {

    const timer = setTimeout(() => {
      setBox5('o');
      setMoves(moves.filter(item => item !== '5'));
      setONums([...oNums, '5']);
      setTie(tie + 1);
    }, 2500);
    return () => clearTimeout(timer);
  }


  // Plays corner to block a trap
  const playBlockingCorner = () => {
    console.log('blocking')
    let combo = xNums.join('');

    const timer = setTimeout(() => {
      switch (combo) {
        case '24':
          setBox1('o');
          setONums([...oNums, '1']);
          setMoves(moves.filter(item => item !== '1'));
          break;
        case '26':
          setBox3('o');
          setONums([...oNums, '3']);
          setMoves(moves.filter(item => item !== '3'));
          break;
        case '48':
          setBox7('o');
          setONums([...oNums, '7']);
          setMoves(moves.filter(item => item !== '7'));
          break;
        case '68':
          setBox9('o');
          setONums([...oNums, '9']);
          setMoves(moves.filter(item => item !== '9'));
      }

      setTie(tie + 1);
    }, 2500);
    return () => clearTimeout(timer);
  }


  // Chooses a corner first move if middle taken
  const chooseCorner = () => {
    console.log('corner')
    const corners = ['1', '3', '7', '9']
    const random = Math.floor(Math.random() * (corners.length - 1) + 1);
    setMoves(moves.filter(item => item !== corners[random]));
    setONums([...oNums, corners[random]]);

    const timer = setTimeout(() => {
      switch (corners[random]) {
        case '1':
          setBox1('o');
          break;
        case '3':
          setBox3('o');
          break;
        case '7':
          setBox7('o');
          break;
        case '9':
          setBox9('o');
          break;
      }

      setTie(tie + 1);
    }, 2500);
    return () => clearTimeout(timer);
  }


  // Play a tile in an adjacent corner to move on second turn
  const playAdjacentCorner = () => {
    console.log('adjacent')
    const random = Math.floor(Math.random() * 2);

    const timer = setTimeout(() => {
      if (random === 0) {
        switch (oNums[0]) {
          case '1':
            setBox3('o');
            setONums([...oNums, '3']);
            setMoves(moves.filter(item => item !== '3'));
            break;
          case '3':
            setBox1('o');
            setONums([...oNums, '1']);
            setMoves(moves.filter(item => item !== '1'));
            break;
          case '7':
            setBox1('o');
            setONums([...oNums, '1']);
            setMoves(moves.filter(item => item !== '1'));
            break;
          case '9':
            setBox3('o');
            setONums([...oNums, '3']);
            setMoves(moves.filter(item => item !== '3'));
        }
      } else {
        switch (oNums[0]) {
          case '1':
            setBox7('o');
            setONums([...oNums, '7']);
            setMoves(moves.filter(item => item !== '7'));
            break;
          case '3':
            setBox9('o');
            setONums([...oNums, '9']);
            setMoves(moves.filter(item => item !== '9'));
            break;
          case '7':
            setBox9('o');
            setONums([...oNums, '9']);
            setMoves(moves.filter(item => item !== '9'));
            break;
          case '9':
            setBox7('o');
            setONums([...oNums, '7']);
            setMoves(moves.filter(item => item !== '7'));
        }
      }
      setTie(tie + 1);
    }, 2500);
    return () => clearTimeout(timer);
  }


  // Finds the blocking/winning move if there is one
  const findThirdSpot = (str) => {
    console.log(str);
    let final;
    let split = str.split('').sort();
    let first = Number(split[0]);
    let second = Number(split[1]);

    if (first === 5) {
      final = 10 - second;
    } else if (second === 5) {
      final = 10 - first;
    } else if (first + 1 === second) {
      if (
        first === 2 ||
        first === 4 ||
        first === 6 ||
        first === 8
      ) {
        final = (first * 2) - second;
      } else {
        final = (second * 2) - first;
      }
    } else if (second - first === 3) {
      if (
        first === 4 ||
        first === 6
      ) {
        final = (first * 2) - second;
      } else {
        final = (second * 2) - first;
      }
    } else {
      final = (first + second) / 2;
    }

    final = final.toString();
    console.log(final);
    return final;
  }


  // Joe chooses a random spot
  const randomSpot = () => {
    let random;

    if (moves.length > 1) {
      random = Math.floor(Math.random() * (moves.length - 1) + 1);
    } else {
      random = 0;
    }
    setMoves(moves.filter(item => item !== moves[random]));
    setONums([...oNums, moves[random]]);
    console.log('random move', moves[random])
    const timer = setTimeout(() => {
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
      setTie(tie + 1);
    }, 2500);
    return () => clearTimeout(timer);
  }


  // Player places their tile
  const placeTile = (e) => {
    let id = e.currentTarget.id;

    if (!moves.includes(id)) {
      return;
    }

    if (
      x &&
      xNums.length === oNums.length ||
      xNums.length < oNums.length
    ) {

      setMoves(moves.filter(item => item !== id));
      setXNums([...xNums, id]);
      setJoeMove(false);
      setFirst(false);
      setX(false);
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
    setTie(tie + 1);
  }

  useEffect(() => {
    props.sendWinner(winner);
  }, [winner])

  useEffect(() => {
    checkAllWinningCombos(oNums);
    checkAllWinningCombos(xNums);
    console.log(joeMove, x, gameOver)
    if (!joeMove && !x && !gameOver) {
      checkPotentialWinningCombos(oNums, xNums);
    }
  }, [x, toggle, xNums, oNums, tie])


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