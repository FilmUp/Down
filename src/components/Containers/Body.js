import React, { Component, PropTypes } from 'react';

const propTypes = {
  imports: PropTypes.array.isRequired
};

class Body extends Component {
  render() {
    return <body>
    {this.props.children}
    {this.props.imports}
    </body>
  }
}

Body.propTypes = propTypes;
export default Body;
