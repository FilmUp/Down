import React from 'react';
import Link from '../Link';
import NavigationBarItem from './NavigationBarItem.js';

class NavbarItemsListContainer extends Component {

  /**
   *
   * @param items
   * @returns takes a list of items and returns a list of navigation items.
   */
  static renderNavigationLinkList(items) {
    return items.map(function() {
      return NavivationBarItem.renderNavigationLinkItem(to, title, image, height, styling);
    });
  }
}

export default NavbarItemsListContainer;
