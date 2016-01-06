import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

const propTypes = {
  pullStyle: React.PropTypes.oneOf(['navbar-right', 'navbar-left']).isRequired,
  navStyle: React.PropTypes.oneOf(['navbar-right', 'navbar-left']).isRequired,
  items: React.PropTypes.array
};

class NavigationList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    var names = ('nav', 'navbar-bar', this.props.pullStyle, this.props.navStyle);
    return <ul className={names}>

    </ul>
  }

}
