import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./game/Game";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router basename="/rock-paper-scissors">
      <div className="App">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/game" component={Game} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
