import React, { Component } from 'react';
import './Panel.css';

class Panel extends Component {
  render() {
    return (
        <div className="Panel">
            <h4 className="Panel-titel">{this.props.titel}</h4>
            <div className="Panel-content">{this.props.children}</div>
        </div>
    );
  }
}

Panel.propTypes = {
  /** Titel vom Panel */
  titel: React.PropTypes.string.isRequired
}
export default Panel;
