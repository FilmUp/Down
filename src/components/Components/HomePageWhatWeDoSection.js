import React, {Component, PropTypes} from 'react';

/**
*
* This is a pretty dumb component that takes no properties.
* I can probably further extract some things to make this
* and the who we are section adhere more to DRY.
*/
export default class HomePagWhatWeDoSection extends Component {
  render () {
    return (
      <div className= "container background-dark" id="whatwedo">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12  col-xs-offset-0">
            <div className="empty"></div>
            <span className="text-align-center"><h1>WHAT WE DO</h1></span>
            <br/>
          </div>
        </div>
        <div className= "row center">
          <div className= "col-lg-3 col-md-3 col-sm-12 col-xs-12 col-lg-offset-0 col-md-offset-0">
            <img src = "FilmUp_Web_HomePage_Connect.png" alt = "Connect" width = "125%"/>
            <span className="text-align-center"><h1>CONNECT</h1></span>
          </div>

          <div className= "col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <img src = "FilmUp_Web_HomePage_Collaborate.png" alt = "Connect" width = "100%"/>
            <div className= "empty" style={{height:65 + 'px'}}></div>
            <span className="text-align-center"><h1>COLLABORATE</h1></span>
          </div>
          <div className= "col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <img src = "FilmUp_Web_HomePage_Create.png" alt = "Connect" width = "125%"/>
            <span className="text-align-center"><h1>CREATE</h1></span>
          </div>
          <div className= "col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <img src = "FilmUp_Web_HomePage_Inspire.png" alt = "Connect" width = "125%"/>
            <span className="text-align-center"><h1>INSPIRE</h1></span>
          </div>
        </div>
        <div className="empty"></div>
      </div>
    );
  }
}
