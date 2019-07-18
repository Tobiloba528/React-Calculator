import React, { Component } from 'react';

class Button extends Component {
    state = {  }

    IsOperator = val =>{
        return (
        //   isNaN(val) ||
          val === "+" ||
          val === "-" ||
          val === "x" ||
          val === "/"
        );
    }

    render() { 

        let classes ="btn btn-";

        return (
          <button
            onClick={() => this.props.handleClick(this.props.children)}
            style={{
              borderRadius: "0",
              border: "1px solid white",
              width: "25%"
            }}
            className ={classes += this.IsOperator(this.props.children) ? "info" : "primary"}
          >
            {this.props.children}
          </button>
        );
    }
}
 
export default Button;