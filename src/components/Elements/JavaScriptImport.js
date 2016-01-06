import React, { Component, PropTypes } from 'react';

const propTypes = {
  link: PropTypes.string.isRequired
};

class JavaScriptImport extends Component {
  render() {
    return <script src={this.props.link}/>
  }
}

JavaScriptImport.propTypes = propTypes;
export default JavaScriptImport;
