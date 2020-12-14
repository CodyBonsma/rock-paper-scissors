import React, { useEffect, useState } from "react";

const Game = () => {
  const [userCount, setUserCount] = useState("");
  const [compCount, setCompCount] = useState("");

  useEffect(() => {
    setUserCount(0);
    setCompCount(0);
  }, []);



  return (
    <div className="container">
      <h2>This will hold the game logic</h2>
      <div className="innerContainer">
        <p>
          SCOREBOARD user: {userCount} vs comp: {compCount}
        </p>
      </div>
      <div className="button rock">
        <button onClick={()=> setUserCount(userCount + 1)}>Rock</button>
      </div>
      <div className="button paper">
        <button>Paper</button>
      </div>
      <div className="button scissor">
        <button>Scissors</button>
      </div>
    </div>
  );
};

export default Game;
