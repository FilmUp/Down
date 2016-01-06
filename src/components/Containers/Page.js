import React, { Component, PropTypes } from 'react';

const propTypes = {
  header: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired
};

class Page extends Component {
  render() {
    return <html>
    {this.props.header}
    {this.props.body}
    </html>
  }
}

Body.propTypes = propTypes;
export default Page;
