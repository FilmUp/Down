import React, {Component} from 'react';

const propTypes = {
  link: PropTypes.string.isRequired
};

class NavigationLogo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="logo">
      <h4>
        <Link to={this.props.link}>
          <strong>FILMUP</strong>
        </Link>
       </h4>
    </div>
  }
}

NavigationLogo.propTypes = propTypes;
export default NavigationLogo;
