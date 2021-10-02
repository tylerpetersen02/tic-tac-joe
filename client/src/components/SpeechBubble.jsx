import React, { useEffect, useState } from 'react';

const SpeechBubble = (props) => {

  useEffect(() => {

    if (props.first) {
      props.handleJoeLine("A human is challenging me?");
    } else if (!props.winner) {
      if (!props.x) {

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
          props.handleJoeLine(currLine);
        };

        line();
      }
    }

  }, [])

  return (
    <div className="speech_bubble">
      <>
        <>
          {props.first &&
            <div className="typewriter">
              <h3>{props.joeLine}</h3>
            </div>
          }
        </>
        <>
          {!props.first &&
            <>
              <>
                {!props.x &&
                  <div className="typewriter">
                    <h3>{props.joeLine}</h3>
                  </div>
                }
              </>
              <>
                {props.x &&
                  <div className="typewriter2">
                    <h3>{props.joeLine}</h3>
                  </div>
                }
              </>
            </>
          }
        </>
      </>
    </div >
  )
};

export default SpeechBubble;