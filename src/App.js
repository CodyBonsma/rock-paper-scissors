import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./game/Game";
import Home from "./Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          <Route exact path={"/game"}>
            <Game />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
