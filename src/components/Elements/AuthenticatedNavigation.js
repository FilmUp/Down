import React, {Component, PropTypes} from 'react';
import Navigation from '../Navigation.js';
export default class AuthenticatedNavigation extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="nav navbar-nav navbar-right pull-right">
          <li className="dropdown">
            <a href="#" title="Messages" id="messages" className="dropdown-toggle"
               data-toggle="dropdown">
              <p>MENU</p>
            </a>
            <ul id="messages-menu" className="dropdown-menu messages" role="menu">
              <li role="presentation">
                <a href="#" className="message">
                  <div className="details">
                    <div className="sender">Home</div>
                  </div>
                </a>
              </li>
              <li role="presentation">
                <a href="#" className="message">
                  <div className="details">
                    <div className="sender">Feed</div>
                  </div>
                </a>
              </li>
              <li role="presentation">
                <a href="#" className="message">
                  <div className="details">
                    <div className="sender">Subscription</div>
                  </div>
                </a>
              </li>
              <li role="presentation">
                <a href="#" className="message">
                  <div className="details">
                    <div className="sender">Subscription</div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }

}
