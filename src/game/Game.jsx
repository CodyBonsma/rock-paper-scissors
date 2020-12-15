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

    if (type === computerPlay) {
      console.log("It's a draw");
    } else if (type === "R" && computerPlay === "P") {
      console.log("Paper beats rock");
    } else if (type === "R" && computerPlay === "S") {
      console.log("Rock beats scissors");
    } else if (type === "P" && computerPlay === "R") {
      console.log("Paper beats rock");
    } else if (type === "P" && computerPlay === "S") {
      console.log("Scissors cut paper");
    } else if (type === "S" && computerPlay === "P") {
      console.log("Scissors cut paper");
    } else if (type === "S" && computerPlay === "R") {
      console.log("Rock smashes scissors");
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
