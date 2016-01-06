import React, {Component, PropTypes} from 'react';
import UnAuthenticatedNavigation from '../Elements/UnAthenticatedNavigation.js';
/**
*
* This is a pretty dumb component that takes no properties.
* I can probably further extract some things to make this
* and the who we are section adhere more to DRY.
*/
export default class HomePageLogoSection extends Component {
  render () {
    return (
      <div className="" style={{backgroundImage:'url("bg.jpg")'}}>
        <header className="page-header" style={{margin:0 + 'px', padding: 20 + 'px'}}>
          <UnAuthenticatedNavigation />
        </header>
        <div className= "container" id="home" >
          <div className= "empty"></div>
          <div className= "row">
            <div className= "col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12  col-xs-offset-0">
              <div className= "center">
                <img src = "FilmUp_Logo_Knockout_White.png" alt = "FILMUP" width = "70%"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12  col-xs-offset-0">
              <div className= "center">
                <div className="empty"></div>
                <div className="center white open">
                  <span>LEARN MORE</span>
                  <br/>
                  <img className="martop" src="down.svg" width="35px"/>
                </div>
              </div>
            </div>
          </div>
          <div className= "empty"></div>
          <div className= "empty"></div>
        </div>
      </div>
    );
  }
}
