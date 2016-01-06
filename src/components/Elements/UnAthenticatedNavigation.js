import React, {Component, PropTypes} from 'react';
import Navigation from '../Navigation.js';
export default class UnAthenticatedNavigation extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="nav navbar-nav navbar-left" >
          <li>
            <a href="#" className="menu-spacing white">
              <p className="white">ABOUT</p>
            </a>
          </li>
          <li>
            <a href="#" className="menu-spacing white" style={{width: 150 + 'px'}}>
              <p className="white">WHO WE ARE</p>
            </a>
          </li>
          <li>
            <a href="#whatwedo" className="menu-spacing white" style={{width: 150 + 'px'}}>
              <p className="white">WHAT WE DO</p>
            </a>
          </li>
          <li>
            <a href="#" className="menu-spacing white" style={{width: 120 + 'px'}}>
              <p className="white">CONTACT US</p>
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right pull-right hidden-xs">
          <li>
            <a href="/login" className="white">
              <p className="white">SIGN IN</p>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
