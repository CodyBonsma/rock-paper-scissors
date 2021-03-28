import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { ToggleButton } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [pane, setPane] = useState(true);

  // these functions toggle between tabs
  const toggleOptOne = () => {
    setPane(true);
  };

  const toggleOptTwo = () => {
    setPane(false);
  };

  return (
    <div className="container main-nav">
      <h2 id="front-title">Rock, Paper, Scissors</h2>
      <hr />

      <div className="card text-center home-tron">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => toggleOptOne()}
                role="tab"
                data-toggle="tab"
                href="#start"
              >
                Start
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => toggleOptTwo()}
                role="tab"
                href="#info"
                data-toggle="tab"
              >
                Info
              </a>
            </li>
          </ul>
        </div>

        {pane ? (
          <div className="tab-content">
            <div
              className="card-body tab-pane active"
              role="tabpanel"
              id="start"
            >
              <h4 className="card-title">
                Do you have the best hands on the interwebs?
              </h4>
              <p className="card-text">
                Try your moves against the computer in a classic game of rock,
                paper, scissors
              </p>
              {/* <Link to="/game"> */}
              <button
                onClick={() => (window.location.href = "/game")}
                className="btn btn-go"
              >
                Start Game
              </button>
              {/* </Link> */}
            </div>{" "}
          </div>
        ) : (
          <div className="card-body tab-pane" role="tabpanel" id="info">
            <p>
              Rock Paper Scissors is a zero sum game that is usually played by
              two people using their hands. The rules to play are pretty simple:
              Rock wins agains Scissors - Scissors wins against Paper - and
              Paper wins against Rock. Best out of 5, wins.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
