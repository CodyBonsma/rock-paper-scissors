import React, { useEffect, useState } from "react";

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

    if (type === computerPlay) {
      console.log("It's a draw");
    } else if (type === "R" && computerPlay === "P") {
      console.log("Paper beats rock");
      setCompCount(compCount + 1);
    } else if (type === "R" && computerPlay === "S") {
      console.log("Rock beats scissors");
      setUserCount(userCount + 1);
    } else if (type === "P" && computerPlay === "R") {
      console.log("Paper beats rock");
      setUserCount(userCount + 1);
    } else if (type === "P" && computerPlay === "S") {
      console.log("Scissors cut paper");
      setCompCount(compCount + 1);
    } else if (type === "S" && computerPlay === "P") {
      console.log("Scissors cut paper");
      setUserCount(userCount + 1);
    } else if (type === "S" && computerPlay === "R") {
      console.log("Rock smashes scissors");
      setCompCount(compCount + 1);
    } else {
      console.log("please choose a valid option");
    }
  };

  return (
    <div className="container">
      <h2>This will hold the game logic</h2>
      <div className="innerContainer">
        <p>
          SCOREBOARD user: {userCount} vs comp: {compCount}
        </p>
      </div>
      <div className="button rock">
        <button value="R" onClick={(e) => gameRound(e.target.value)}>
          Rock
        </button>
      </div>
      <div className="button paper">
        <button value="P" onClick={(e) => gameRound(e.target.value)}>
          Paper
        </button>
      </div>
      <div className="button scissor">
        <button value="S" onClick={(e) => gameRound(e.target.value)}>
          Scissors
        </button>
      </div>
    </div>
  );
};

export default Game;
