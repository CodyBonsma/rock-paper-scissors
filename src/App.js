import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-router";
import Game from "./game/Game";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router basename="/rock-paper-scissors">
      <div className="App">
        <Switch>
          <Route path="/game" component={Game} />
          <Route path={["/", "/home"]} component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
