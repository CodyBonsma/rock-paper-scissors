import React, { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [pane, setPane] = useState(true);
  const [active, setActive] = useState(false);

  const toggleOptOne = () => {
    console.log("clicked this pane");
    setPane(true)
  }

  const toggleOptTwo = () => {
    console.log('clicked toggle dos')
    setPane(false)
  }

  return (
    <div className="container main-nav">
      <h2 id="front-title">Rock Paper Scissors</h2>
      <hr />

      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className="nav-link"
                active={active}
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
                active={active}
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
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="btn btn-go">
                Go somewhere
              </a>
            </div>{" "}
          </div>
        ) : (
          <div className="card-body tab-pane" role="tabpanel" id="info">
            <p>Hello info about the gimma</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
