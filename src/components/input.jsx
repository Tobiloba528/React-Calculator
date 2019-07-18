import React, { Component } from 'react';
import "./input.css";

class Input extends Component {
    state = {  }
    render() { 
        return (
          <div id="input" style={{ width: "100%" }}>
            {this.props.children}
          </div>
        );
    }
}
 
export default Input;