import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "react-router";
import Game from "./game/Game";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path={["/", "/home"]} component={Home} />
          <Route path="/game" component={Game} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
