import React, {Component, PropTypes} from 'react';

const propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  height: PropTypes.object,
  styling: PropTypes.object
};

class NavigationBarItem extends Component {

  constructor(props) {
    super(props);
  }

  /**
   *
   * @param to
   * @param title
   * @param image
   * @param height
   * @param styling
   * @returns returns a singular navigation item with or without an image.
   */
  static renderNavigationLinkItem(to, title, image, height, styling) {
    let img;
    if (image){
      img = <img src={image} height={height} />
    }
    return <li>
      <Link to={to} style={styling} title={title}>
        {img}
      </Link>
    </li>
  }

  render() {
    return renderNavigationLinkItem(this.props.to, this.props.title, this.props.image, this.props.height, this.props.styling);
  }
}

NavigationBarItem.propTypes = propTypes;
export default NavigationBarItem;


