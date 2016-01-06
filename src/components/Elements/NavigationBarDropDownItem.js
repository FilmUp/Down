import React, {Component, PropTypes} from 'react';
import Link from '../Link';

const propTypes = {
  title : PropTypes.string.isRequired,
  icon: PropTypes.element,
  items: PropTypes.array.isRequired
};

class NavigationBarDropDownItem extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * Given an icon, link and text returns a Dropdown sub-item
   */
  static renderDropDownNavigationItem(to, text, classN, image, height ) {
    let img;
    if (image){
      img = <img src={image} height={height} />
    }
    return <li role="presentation">
      <Link to={to} className={classN}>
        {img}
        <div className="details">
          <div className="sender">{text}</div>
        </div>
      </Link>
    </li>
  }

  /**
   * @returns Given a list of dropdownitem properties return a list of dropdown items
   */
  static renderDropDownNavigationList(items) {
    return items.map(function(to, text, classN, icon, iconHeight) {
      return NavbarItemsListContainer.renderDropDownItem(to, text, classN, icon, iconHeight);
    });
  }

  render() {
    return (
      <li className="dropdown">
        <a href="#" title={this.props.title} className="dropdown-toggle" data-toggle="dropdown">
          {this.props.title}
          {this.props.icon}
        </a>
        <ul id="messages-menu" className="dropdown-menu messages" role="menu">
          {NavigationBarDropDownItem.renderDropDownNavigationList(this.props.items)}
        </ul>
      </li>
    );
  }
}

NavigationBarDropDownItem.propTypes = propTypes;
export default NavigationBarDropDownItem;
