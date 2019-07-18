import React, { Component } from "react";

class ClearButton extends Component {
  state = {};
  render() {
    return (
      <button onClick={this.props.handleClick} style={{ width: "100%" }} className="btn btn-danger">
        {this.props.children}
      </button>
    );
  }
}

export default ClearButton;
