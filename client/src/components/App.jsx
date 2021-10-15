import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Board from './Board.jsx';
import Winner from './Winner.jsx';
import JoeBot from './JoeBot.jsx';

const App = (props) => {

  const [joeBot, setJoeBot] = useState(false);
  const [speechBubble, setSpeechBubble] = useState(false);
  const [speech, setSpeech] = useState('');
  const [friend, setFriend] = useState(false);
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);
  const [winnerModule, setWinnerModule] = useState(false);
  const [winner, setWinner] = useState('');
  const [gameReset, setGameReset] = useState(false);
  const [joeStart, setJoeStart] = useState(false);

  useEffect(() => {
    setGameReset(false);
  }, [gameReset])


  const handleJoeBot = () => {
    setJoeBot(!joeBot);
    setFriend(false);
  }

  const handleFriend = () => {
    setFriend(!friend);
    setJoeBot(false);
  }

  const handleEasy = () => {
    setEasy(!easy);
    setMedium(false);
    setHard(false);
  }

  const handleMedium = () => {
    setMedium(!medium);
    setEasy(false);
    setHard(false);
  }

  const handleHard = () => {
    setHard(!hard);
    setEasy(false);
    setMedium(false);
  }

  const handleWinner = (winner) => {
    setWinner(winner);
    setWinnerModule(!winnerModule);
  }

  const reset = () => {
    setWinner('');
    setWinnerModule(false);
    setJoeStart(!joeStart);
    setGameReset(!gameReset);
  }

  const handleNewGame = () => {
    gameReset(false);
  }

  return (
    <div>
      <h1 className="glow">WELCOME TO TIC-TAC-JOE</h1>
      <div className="mid_background">
        {winnerModule &&
          <>
            <h3>Do you have what it takes to beat the reigning AI champ <strong>JoeBot</strong>?</h3>
            <div className="selections">
              <div className="challenger">
                {!friend &&
                  <>
                    {!joeBot &&
                      <button onClick={handleJoeBot} className="button">I'm ready!</button>
                    }
                    {joeBot &&
                    <>
                      {!joeStart &&
                      <h2 className="banner">You move first!</h2>
                      }
                      {joeStart &&
                      <h2 className="banner">JoeBot will start!</h2>
                      }
                      </>
                    }
                  </>
                }
              </div>
              {/* {joeBot &&
                <div className="difficulty">
                  {!easy &&
                    <button onClick={handleEasy} className="button2">Easy</button>
                  }
                  {easy &&
                    <button onClick={handleEasy} className="easy">Easy</button>
                  }
                  {!medium &&
                    <button onClick={handleMedium} className="button2">Medium</button>
                  }
                  {medium &&
                    <button onClick={handleMedium} className="medium">Medium</button>
                  }
                  {!hard &&
                    <button onClick={handleHard} className="button2">Hard</button>
                  }
                  {hard &&
                    <button onClick={handleHard} className="hard">Hard</button>
                  }
                </div>
              } */}
            </div>
          </>
        }
        {!winnerModule &&
          <Winner winner={winner} reset={reset} />
        }
      </div>
      {!gameReset &&
        <Board sendWinner={handleWinner} joeStart={joeStart} gameReset={gameReset} joeBot={joeBot}/>
      }
      {/* {joeBot &&
        <JoeBot />
      } */}
    </div>
  )
};

export default App;