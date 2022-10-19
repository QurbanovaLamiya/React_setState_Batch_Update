import { Component, Fragment } from "react";
import "./App.css";
import Game from "./components/Game";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Game />
      </Fragment>
    );
  }
}

export default App;
