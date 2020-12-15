import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const Game = () => {
  const [userCount, setUserCount] = useState("");
  const [compCount, setCompCount] = useState("");

  useEffect(() => {
    setUserCount(0);
    setCompCount(0);
  }, []);

  const gameRound = (type) => {
    console.log(type);
    // generate a random number for the computer's choice

    const choices = ["R", "P", "S"];
    let randomNumber = Math.floor(Math.random() * 3);
    let computerPlay = choices[randomNumber];

    console.log("COMP PLAY", computerPlay);

    switch (type + computerPlay) {
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
    <div className="container">
      <h2>This will hold the game logic</h2>
      <div className="innerContainer">
          <div className="row">
        <p>
          SCOREBOARD user: {userCount} vs comp: {compCount}
        </p>
      </div>
      <div className="button rock col-sm-3">
        <button value="R" onClick={(e) => gameRound(e.target.value)}>
          Rock
        </button>
      </div>
      <div className="button paper col-sm-3">
        <button value="P" onClick={(e) => gameRound(e.target.value)}>
          Paper
        </button>
      </div>
      <div className="button scissor col-sm-3">
        <button value="S" onClick={(e) => gameRound(e.target.value)}>
          Scissors
        </button>
      </div>
      </div>
    </div>
  );
};

export default Game;
