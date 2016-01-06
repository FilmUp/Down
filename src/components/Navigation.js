import React, {Component, PropTypes} from 'react';

export default class Navigation extends Component {
  render() {
    return (
      <div className="wrap">
        <div className="logo">
          <h4><a href="/feed"> <strong>FILMUP</strong></a></h4>
        </div>
        <header className="page-header">
          <div className="navbar">
            <ul className="nav navbar-nav navbar-right pull-right">
              <li>
                <a href="#"style={{width:40 + 'px'}}>
                  <img src="nav/FilmUp_Web_Feed_AccountSettings_Graphic_Gray.png" alt="Settings" height="25"></img>
                </a>
              </li>
              <li>
                <a href="/BusinessProfile"style={{width:40 + 'px'}}>
                  <img src="nav/FilmUp_Web_Feed_Profile_Graphic_Gray.png" alt="Profile" height="25"></img>
                </a>
              </li>
              <li>
                <a href="/BusinessProfile"style={{width:40 + 'px'}} title="Messaging">
                  <img src="nav/FilmUp_Web_Feed_Messaging_Graphic_Gray.png"  height="25"></img>
                </a>
              </li>
              <li className="dropdown">
                <a href="#"
                   title="Messages" id="messages"
                   className="dropdown-toggle"
                   data-toggle="dropdown" >MENU
                  <i className="fa fa-bars"></i>
                </a>
                <ul id="messages-menu" className="dropdown-menu messages" role="menu">
                  <li role="presentation">
                    <a href="/project" className="message">
                      <img src="nav/FilmUp_Web_Feed_ProjectSubmit_Graphic_Gray.png" height="30"></img>
                        <div className="details">
                          <div className="sender">Project Submit</div>
                        </div>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#" className="message">
                      <img src="nav/FilmUp_Web_Feed_Jobs_Graphic_Gray.png" height="30"></img>
                        <div className="details">
                          <div className="sender">Jobs</div>
                        </div>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#" className="message">
                      <img src="nav/FilmUp_Web_Feed_Connect_Graphic_Gray.png" height="30"></img>
                      <div className="details">
                        <div className="sender">Connect</div>
                      </div>
                    </a>
                  </li>
                  <li role="presentation">
                    <a href="#" className="message">
                      <img src="nav/FilmUp_Web_Feed_Messaging_Graphic_Gray.png" height="30"></img>
                      <div className="details">
                        <div className="sender">Messaging</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
