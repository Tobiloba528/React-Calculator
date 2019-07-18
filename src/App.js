import React, { Component } from "react";
import * as math from "mathjs";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";
import ClearButton from "./components/clearButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  handleClear = () => {
    this.setState({ input: "" });
  };

  handleEqual = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  handleMultiply = val => {
    if (val === "x") {
      this.setState({ input: this.state.input + val.replace("x", "*") });
    }
  };

  render() {
    return (
      <div id="calculator">
        <div style={{ width: "20%", margin: "0 auto", paddingTop: "30vh" }}>
        <h2 className="text-center text-info">This is Tobiloba's React Calculator</h2>
          <div className="row">
            <Input className="col-sm-12">{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} className="col-sm-4">
              7
            </Button>
            <Button handleClick={this.addToInput} className="col-sm-4">
              8
            </Button>
            <Button handleClick={this.addToInput} className="col-sm-4">
              9
            </Button>
            <Button handleClick={this.handleMultiply} className="col-sm-4">
              x
            </Button>
          </div>

          <div className="row">
            <Button handleClick={this.addToInput} className="col-sm-4">
              4
            </Button>
            <Button handleClick={this.addToInput} className="col-sm-4">
              5
            </Button>
            <Button handleClick={this.addToInput} className="col-sm-4">
              6
            </Button>
            <Button handleClick={this.addToInput} className="col-sm-4">
              -
            </Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} className="col-sm-4">
              1
            </Button>
            <Button handleClick={this.addToInput} className="col-sm-4">
              2
            </Button>
            <Button handleClick={this.addToInput} className="col-sm-4">
              3
            </Button>
            <Button handleClick={this.addToInput} className="col-sm-4">
              +
            </Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput} className="col-sm-4">
              0
            </Button>
            <Button handleClick={this.addToInput} className="col-sm-4">
              .
            </Button>
            <Button
              handleClick={() => {
                this.handleEqual();
              }}
              className="col-sm-4"
            >
              =
            </Button>
            <Button handleClick={this.addToInput} className="col-sm-4">
              /
            </Button>
          </div>
          <div className="row">
            <ClearButton handleClick={this.handleClear} className="col-sm-12">
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
