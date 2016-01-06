import React, { Component, PropTypes } from 'react';

const propTypes = {
  imports: PropTypes.array.isRequired
};

class Body extends Component {
  render() {
    return <body style={this.props.style}>
    {this.props.children}
    {this.props.imports}
    </body>
  }
}

Body.propTypes = propTypes;
export default Body;
