import React, {Component, PropTypes} from 'react';
import Navigation from './Navigation';

export default class BusinessProfile extends Component {
  static title = 'FILMUP - Make Your Dreams Matter'
  static description = 'A catalyst for student films filmmakers';

  trackingCode() {
    return ({ __html:
      `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=` +
      `function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;` +
      `e=o.createElement(i);r=o.getElementsByTagName(i)[0];` +
      `e.src='https://www.google-analytics.com/analytics.js';` +
      `r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));` +
      `ga('create','xxxxxxx-x','auto');ga('send','pageview');`,
    });
  }
  static props = {
    entry: PropTypes.string.isRequired
  };

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>{this.title}</title>
          <meta name="description" content={this.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" crossorigin="anonymous"/>
          <link rel="stylesheet" href="application.css" crossorigin="anonymous"/>
          <link rel="stylesheet" href="homepage.css" crossorigin="anonymous"/>
          <script>
          </script>
        </head>
        <body className="background-dark">
          <Navigation />
        <div className= "empty"></div>
          <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                  <div className="text-align-center">
                      <img className="img-circle" src="15.jpg" alt="128x128" style={{height: 162 + 'px'}}/>
                  </div>
                  <h1 className="mt-lg mb-xs text-align-center"><strong>Maryna Gils</strong></h1>
                  <h2 className="mt-xs mb-xs text-align-center">Production Company</h2>
                  <h2 className="mt-xs mb-xs text-align-center">Los Angles, Cali</h2>
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 text-align-center">
                        <button type="submit" className="btn btn-primary">Follow</button>
                        <button type="button" className="btn btn-primary">Message</button>
                    </div>
                  </div>
              </div>
          </div>
          <div className= "empty"></div>
          <div className= "empty"></div>
               <div className="content container">
                <div className="row">
                  <div className="col-md-4">
                    <section className="widget tiny" >
                      <header>
                          <div className="widget-controls">
                              <a data-widgster="fullscreen" title="Full Screen" href="#"><i className="glyphicon glyphicon-edit"></i></a>
                          </div>
                      </header>
                        <div className="body text-align-center" style={{verticalAlign:30 + 'px', marginTop:70 + 'px',marginBottom:60  + 'px'}} >
                          <h2 className="name" href="#">
                              <a href="#" style={{paddingTop:60 + 'px',paddingBottom:60 + 'px', paddingLeft:60 + 'px',paddingRight:60 + 'px', color: 'white'}}>ABOUT</a>
                          </h2>
                        </div>
                    </section>
                    <section className="widget tiny" >
                      <header>
                          <div className="widget-controls">
                              <a data-widgster="fullscreen" title="Full Screen" href="#"><i className="glyphicon glyphicon-edit"></i></a>
                          </div>
                      </header>
                        <div className="body text-align-center" style={{verticalAlign:30 + 'px', marginTop:70 + 'px',marginBottom:60  + 'px'}} >
                          <h2 className="name" href="#">
                              <a href="#" style={{paddingTop:60 + 'px',paddingBottom:60 + 'px', paddingLeft:60 + 'px',paddingRight:60 + 'px', color: 'white'}}>CAREERS</a>
                          </h2>
                        </div>
                    </section>
                  </div>
                      <div className="col-md-4">
                        <section className="widget tiny" >
                          <header>
                              <div className="widget-controls">
                                  <a data-widgster="fullscreen" title="Full Screen" href="#"><i className="glyphicon glyphicon-edit"></i></a>
                              </div>
                          </header>
                            <div className="body text-align-center" style={{verticalAlign:30 + 'px', marginTop:70 + 'px',marginBottom:60  + 'px'}} >
                              <h2 className="name" href="#">
                                  <a href="#" style={{paddingTop:60 + 'px',paddingBottom:60 + 'px', paddingLeft:60 + 'px',paddingRight:60 + 'px', color: 'white'}}>PROJECTS</a>
                              </h2>
                            </div>
                        </section>
                          <section className="widget tiny" >
                            <header>
                                <div className="widget-controls">
                                    <a data-widgster="fullscreen" title="Full Screen" href="#"><i className="glyphicon glyphicon-edit"></i></a>
                                </div>
                            </header>
                              <div className="body text-align-center" style={{verticalAlign:30 + 'px', marginTop:70 + 'px',marginBottom:60  + 'px'}} >
                                <h2 className="name" href="#">
                                    <a href="#" style={{paddingTop:60 + 'px',paddingBottom:60 + 'px', paddingLeft:60 + 'px',paddingRight:60 + 'px', color: 'white'}}>WEBSITE</a>
                                </h2>
                              </div>
                          </section>
                      </div>
                      <div className="col-md-4">
                        <section className="widget tiny" >
                          <header>
                              <div className="widget-controls">
                                  <a data-widgster="fullscreen" title="Full Screen" href="#"><i className="glyphicon glyphicon-edit"></i></a>
                              </div>
                          </header>
                            <div className="body text-align-center" style={{verticalAlign:30 + 'px', marginTop:70 + 'px',marginBottom:60  + 'px'}} >
                              <h2 className="name" href="#">
                                  <a href="#" style={{paddingTop:60 + 'px',paddingBottom:60 + 'px', paddingLeft:60 + 'px',paddingRight:60 + 'px', color: 'white'}}>REEL</a>
                              </h2>
                            </div>
                        </section>
                        <section className="widget tiny" >
                          <header>
                              <div className="widget-controls">
                                  <a data-widgster="fullscreen" title="Full Screen" href="#"><i className="glyphicon glyphicon-edit"></i></a>
                              </div>
                          </header>
                            <div className="body text-align-center" style={{verticalAlign:30 + 'px', marginTop:70 + 'px',marginBottom:60  + 'px'}} >
                              <h2 className="name" href="#">
                                  <a href="#" style={{paddingTop:60 + 'px',paddingBottom:60 + 'px', paddingLeft:60 + 'px',paddingRight:60 + 'px', color: 'white'}}>CONTACT</a>
                              </h2>
                            </div>
                        </section>
                      </div>
                  </div>
                <div className="loader-wrap hiding hide">
                    <i className="fa fa-circle-o-notch fa-spin"></i>
                </div>
            </div>
        <script src="lib/jquery/dist/jquery.min.js"></script>
        <script src="lib/jquery-pjax/jquery.pjax.js"></script>
        <script src="lib/bootstrap-sass/assets/javascripts/bootstrap.min.js"></script>
        <script src="lib/underscore/underscore.js"></script>

        <script src="app.js"></script>
        <script src="settings.js"></script>
        <script src={this.props.entry}></script>
        <script dangerouslySetInnerHTML={this.trackingCode()} />
          <script src="lib/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
          <script src="lib/select2/select2.min.js"></script>
          <script src="lib/jquery.maskedinput/dist/jquery.maskedinput.min.js"></script>
          <script src="lib/moment/moment.js"></script>
                  <script src="grid-live.js"></script>
          <script src="lib/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
          <script src="lib/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js"></script>
          <script src="forms-wizard.js"></script>
        </body>

      </html>
    );
  }
}
