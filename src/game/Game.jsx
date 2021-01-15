import React, { useEffect, useState, useRef } from "react";
import "./Game.css";
import "bootstrap/dist/css/bootstrap.css";
import rockImg from "../Images/rock.png";
import paperImg from "../Images/paper.png";
import scissorImg from "../Images/scissor.png";

const Game = () => {
  const [userCount, setUserCount] = useState("");
  const [compCount, setCompCount] = useState("");
  const [compPlay, setCompPlay] = useState("");
  const [compAnimation, setCompAnimation] = useState("");
  const actionRef = useRef("");

  if (userCount === 5 || compCount === 5) {
    setUserCount(0);
    setCompCount(0);
    alert("Game over!");
  }

  useEffect(() => {
    setUserCount(0);
    setCompCount(0);
  }, []);

  const clearGame = () => {
      setUserCount(0);
      setCompCount(0);
  }

  const gameRound = (event) => {
    // access the ref of the user's choice
    console.log(event)
    const userChoice = event;
    // generate a random number for the computer's choice

    const choices = ["R", "P", "S"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerPlay = choices[randomNumber];
    setCompPlay(computerPlay);

    if (computerPlay === "R") {
      setCompAnimation('ROCK');
    } else if (computerPlay === "P") {
      setCompAnimation('PAPER');
    } else if (computerPlay === "S") {
      setCompAnimation('SCISSORS');
    }

    // show the computer's move with timeout
    setTimeout(() => {
      setCompPlay("");
    }, 5000);

    console.log("COMP PLAY", computerPlay);

    switch (userChoice + computerPlay) {
      case "RS":
      case "PR":
      case "SP":
        console.log("USER WINS");
        setUserCount(userCount + 1);
        break;

      case "RP":
      case "PS":
      case "SR":
        console.log("COMPUTER WINS");
        setCompCount(compCount + 1);
        break;

      case "PP":
      case "RR":
      case "SS":
        console.log("It's a draw");
        break;

      default:
        console.log("Nothing to report");
    }
  };

  return (
    <div className="innerContainer container">
      <p className="scoreboard">
        SCOREBOARD user: {userCount} vs comp: {compCount}
      </p>
      <div className="row comp-play">
        <div className="col comp-section">
          <div>
            {compPlay ? (
              <h3>
                computer plays <br />
                {/* <img
                  className="computer-play rock-image"
                  src={compAnimation}
                  alt="computer play image"
                /> */}
                <h2>{compAnimation}</h2>
              </h3>
            ) : null}
          </div>
        </div>
      </div>
      <div className="row user-buttons">
        <div className="button rock col-sm-4">
          <img
            className="rock-image"
            src={rockImg}
            alt="rock icon"
            ref={actionRef}
            value="R"
            onClick={() => gameRound('R')}
          />
        </div>
        <div className="button paper col-sm-4">
          <img
            className="paper-image"
            src={paperImg}
            alt="paper icon"
            ref={actionRef}
            value="P"
            onClick={() => gameRound('P')}
          />
        </div>
        <div className="button scissor col-sm-4">
          <img
            className="scissor-image"
            src={scissorImg}
            alt="scissor icon"
            ref={actionRef}
            value="S"
            onClick={() => gameRound('S')}
          />
        </div>
      </div>
      <div className="row lower-navigation">
          <div className="col-sm-2"/>
          <div className="col-sm-4">
              <button><a href="/">Home</a></button>
          </div>
          <div className="col-sm-4">
              <button onClick={() => clearGame()}>Clear</button>
          </div>
      </div>
    </div>
  );
};

export default Game;
