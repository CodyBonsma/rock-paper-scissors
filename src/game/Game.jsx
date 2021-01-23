import React, { useEffect, useState, useRef } from "react";
import "./Game.css";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "../Modal/Modal";
import rockImg from "../Images/rock.png";
import paperImg from "../Images/paper.png";
import scissorImg from "../Images/scissor.png";

const Game = () => {
  const [userCount, setUserCount] = useState("");
  const [compCount, setCompCount] = useState("");
  const [compPlay, setCompPlay] = useState("");
  const [compAnimation, setCompAnimation] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const actionRef = useRef("");

  useEffect(() => {
    clearGame();
  }, []);

  // create two conditionals for a user win and comp win

  if (userCount === 5) {
    console.log("User wins!");
    setModalMessage("You won!");
    setIsOpen(true);
    setUserCount(0);
    setCompCount(0);
  } else if (compCount === 5) {
    console.log("You lost!");
    setModalMessage("You lost...");
    setIsOpen(true);
    setUserCount(0);
    setCompCount(0);
  }

  const clearGame = () => {
    setUserCount(0);
    setCompCount(0);
  };

  const gameRound = (event) => {
    // access the ref of the user's choice
    console.log(event);
    const userChoice = event;
    // generate a random number for the computer's choice

    const choices = ["R", "P", "S"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerPlay = choices[randomNumber];
    setCompPlay(computerPlay);

    if (computerPlay === "R") {
      setCompAnimation(rockImg);
    } else if (computerPlay === "P") {
      setCompAnimation(paperImg);
    } else if (computerPlay === "S") {
      setCompAnimation(scissorImg);
    }

    // show the computer's move with timeout
    setTimeout(() => {
      setCompPlay("");
    }, 3000);

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
      <div className="row col">
        <div className="col-sm-5 scoreboard-you">
          <h3 id="scoreboard-title">user</h3>
        </div>
        <div className="col-sm-2 scoreboard">
          <p>
            {userCount} : {compCount}
          </p>
        </div>
        <div className="col-sm-5 scoreboard-comp">
          <h3 id="scoreboard-title">comp</h3>
        </div>
      </div>

      {/* // DO THIS 3X TIMES AT LEAST BETCH */}
      <Modal
        score={(userCount, compCount)}
        outcome={modalMessage}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />

      <div className="row comp-play">
        <div className="col comp-section">
          <div>
            {compPlay ? (
              <p>
                computer plays <br />
                <img
                  className="computer-play rock-image"
                  src={compAnimation}
                  alt="computer play image"
                />
                {/* <h2>{compAnimation}</h2> */}
              </p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="row user-buttons">
        <div className="button shadowmane rock col-sm-4">
          <img
            className="rock-image"
            src={rockImg}
            alt="rock icon"
            ref={actionRef}
            value="R"
            onClick={() => gameRound("R")}
          />
        </div>
        <div className="button shadowmane paper col-sm-4">
          <img
            className="paper-image"
            src={paperImg}
            alt="paper icon"
            ref={actionRef}
            value="P"
            onClick={() => gameRound("P")}
          />
        </div>
        <div className="button shadowmane scissor col-sm-4">
          <img
            className="scissor-image"
            src={scissorImg}
            alt="scissor icon"
            ref={actionRef}
            value="S"
            onClick={() => gameRound("S")}
          />
        </div>
      </div>
      <div className="row lower-navigation">
        <div className="col-sm-2" />
        <div className="col-sm-4">
          <button id="game-button" onClick={() => (window.location.href = "/")}>
            Home
          </button>
        </div>
        <div className="col-sm-4">
          <button id="game-button" onClick={() => clearGame()}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
