import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container main-nav">
      <h2 id="front-title">Rock Paper Scissors</h2>
      <hr />
      <div className="card text-center home-tron">
        <div className="card-header">
          <nav>
          <ul className="nav nav-tabs card-header-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" href="#start" data-bs-toggle="tab" role="tab">
                Start
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#info" data-bs-toggle="tab" role="tab">
                Info
              </a>
            </li>
          </ul>
          </nav>
        </div>

        <div className="tab-content" id="myTabContent">
          <div className="card-body tab-pane active" id="start" role="tabpanel">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="/game" className="btn btn-go">
              Start Game
            </a>
          </div>

          <div className="tab-pane fade" id="info" role="tabpanel">
            <p>this will be game info</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
