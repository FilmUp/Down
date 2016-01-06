import React, {Component, PropTypes} from 'react';

/**
*
* This is a pretty dumb component that takes no properties.
* I can probably further extract some things to make this
* and the what we do section adhere more to DRY.
*/
export default class HomePageWhoWeAreSection extends Component {
  render () {
    return (
      <div className= "container-fluid background-white" id="whoweare">
        <div className="empty"></div>
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12  col-xs-offset-0">
            <span className="text-align-center"><h1 className="dark-blue">WHO WE ARE</h1></span>
            <br/>
          </div>
        </div>
        <div className= "row center">
          <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-sm-offset-0 col-xs-12  col-xs-offset-0">
            <span className="text-align-center">
              <h2 className="dark-blue">
                FilmUp, LLC is the film industry’s newest cutting edge connection and collaboration platform. We have developed a multifaceted, comprehensive online database which provides a full-spectrum of opportunities for film industry’s novices and professionals. Successful films require a wide-spectrum of expertise including: producers, directors, editors, musical composers, graphic designers, and many other industry professionals. FilmUp’s platform allows individuals to create a profile and share ideas through an online think-tank model. The platform does not stop at talent search, but includes a state-of-the-art online system that allows students and professionals to connect and collaborate on filmmaking projects. We are committed to developing and maintaining a network of filmmakers that are dedicated to inspiring the world through film.
              </h2>
            </span>
            <br/>
          </div>
        </div>
        <div className="empty"></div>
      </div>
    );
  }
}
