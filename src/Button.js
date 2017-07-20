import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
      
    return (
      <div className="Button">
          <h1 className="Button-head">Ich bin ein Button</h1>
          <button>
              <strong>{this.props.label}</strong>
           </button>
      </div>
    );
  }
}

export default Button; 