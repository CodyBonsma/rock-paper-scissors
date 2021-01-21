import React, { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [pane, setPane] = useState(false);

  const togglePane = () => {
    console.log("clicked toggle");
    setPane(true);
  };

  return (
    <div className="container main-nav">
      <h2 id="front-title">Rock Paper Scissors</h2>
      <hr />

      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                role="tab"
                data-toggle="tab"
                href="#start"
              >
                Active
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => togglePane()}
                role="tab"
                href="#info"
                data-toggle="tab"
              >
                Link
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
              <a href="#" class="btn btn-primary">
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
