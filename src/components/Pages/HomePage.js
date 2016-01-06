import React, {Component, PropTypes} from 'react';
import UnAuthenticatedNavigation from '../Elements/UnAthenticatedNavigation.js';
export default class HomePage extends Component {

  static title = 'FILMUP - Make Your Dreams Matter';
  static description = 'A catalyst for student films filmmakers';

  static props = {
    entry: PropTypes.string.isRequired
  };

  render() {
    return (
      <html>
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <title>{this.title}</title>
        <meta name="description" content={this.description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
              crossorigin="anonymous"/>
        <link rel="stylesheet" href="application.css" crossorigin="anonymous"/>
        <link rel="stylesheet" href="home.css" crossorigin="anonymous"/>
        <script>
        </script>
      </head>
      <body className="background-dark " style={{paddingBottom: 0 + 'px'}}>
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
      <div className= "container" id="whatwedo">
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
      <footer className="footer" style={{background:'black'}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="copyright font-alt white">© 2015 <a className="white" href="#home">FilmUp</a>, All Rights Reserved.</p>
            </div>
            <div className="col-sm-6">
              <div className="footer-social-links">
                <a href="#"><i className="fa fa-facebook white"></i></a>
                <a href="#"><i className="fa fa-twitter white"></i></a>
                <a href="#"><i className="fa fa-dribbble white"></i></a>
                <a href="#"><i className="fa fa-skype white"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <script src="lib/jquery/dist/jquery.min.js"></script>
      <script src="lib/jquery-pjax/jquery.pjax.js"></script>
      <script src="lib/bootstrap-sass/assets/javascripts/bootstrap.min.js"></script>
      <script src="lib/underscore/underscore.js"></script>

      <script src="app.js"></script>
      <script src="settings.js"></script>
      <script src={this.props.entry}></script>
      </body>

      </html>
    );
  }
}
