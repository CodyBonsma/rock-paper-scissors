import React from "react";
import "./Home.css"

const Home = () => {
  return (

    <div className="container main-nav">
      <h2 id="front-title">Rock Paper Scissors</h2>
      <hr/>
      <div className="card text-center home-tron">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="/game" className="btn btn-go">
            Start Game
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
