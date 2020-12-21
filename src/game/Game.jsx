import React, { useEffect, useState, useRef } from "react";
import "./Game.css";
import "bootstrap/dist/css/bootstrap.css";
import rockImg from "../Images/rock.png";
import paperImg from "../Images/paper.png";
import scissorImg from "../Images/scissor.png";

const Game = () => {
  const [userCount, setUserCount] = useState("");
  const [compCount, setCompCount] = useState("");
  const actionRef = useRef();

  useEffect(() => {
    setUserCount(0);
    setCompCount(0);
  }, []);

  const gameRound = () => {
    // access the ref of the user's choice
    console.log(actionRef.current.value);
    const userChoice = actionRef.current.value;
    // generate a random number for the computer's choice

    const choices = ["R", "P", "S"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerPlay = choices[randomNumber];

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
      <div className="row user-buttons">
        <div className="button rock col-sm-4">
          <button ref={actionRef} value="R" className="play-button">
            <img
              className="rock-image"
              src={rockImg}
              alt="rock icon"
              value="R"
              onClick={(e) => gameRound(e.target.value)}
            />
          </button>
        </div>
        <div className="button paper col-sm-4">
          <button ref={actionRef} value="P" className="play-button">
            <img
              className="paper-image"
              src={paperImg}
              alt="rock icon"
              value="R"
              onClick={(e) => gameRound(e.target.value)}
            />
          </button>
        </div>
        <div className="button scissor col-sm-4">
          <button ref={actionRef} value="S" className="play-button">
            <img
              className="scissor-image"
              src={scissorImg}
              alt="rock icon"
              value="R"
              onClick={(e) => gameRound(e.target.value)}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
