import { Component } from "react";
import "./Game.css";

class Game extends Component {
  constructor() {
    super();

    this.state = {
      goal: "",
      score: 0,
    };

    this.randomNum = this.randomNum.bind(this);
    this.scoreOne = this.scoreOne.bind(this);
    this.scoreTwo = this.scoreTwo.bind(this);
    this.scoreThree = this.scoreThree.bind(this);
  }

  randomNum() {
    this.setState({ goal: Math.ceil(Math.random() * 30) });
  }

  scoreOne() {
    this.setState({ score: this.state.score + 1 });
  }

  scoreTwo() {
    this.setState((state) => {
      return { score: state.score + 1 };
    });
    this.setState((state) => {
      return { score: state.score + 1 };
    });
  }

  scoreThree() {
    this.setState((state) => {
      return { score: state.score + 1 };
    });
    this.setState((state) => {
      return { score: state.score + 1 };
    });
    this.setState((state) => {
      return { score: state.score + 1 };
    });
  }

  render() {
    let result = "";
    if (this.state.goal < this.state.score) {
      result = "You Lost";
    } else if (this.state.goal === this.state.score) {
      result = "You Won";
    }
    return (
      <div className="container">
        <h1>Goal is : {this.state.goal} </h1>
        <button onClick={this.randomNum}>Random Number</button>
        <h2>Score is : {this.state.score} </h2>
        <h3>{result}</h3>
        <div className="buttons">
          <button onClick={this.scoreOne}>Power is 1</button>
          <button onClick={this.scoreTwo}>Power is 2</button>
          <button onClick={this.scoreThree}>Power is 3 </button>
        </div>
      </div>
    );
  }
}

export default Game;
