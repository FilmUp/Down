import React, {Component, PropTypes} from 'react';

export default class HomePage extends Component {
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
  }

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
          <link rel="stylesheet" href="homepage.css" crossorigin="anonymous"/>
          <script>
          </script>
        </head>
        <body>
          <div className="base home">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                        <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <p>MENU</p>
                                        <div id = "rightFloat">
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                        </div>
                                </button>
                        </div>
                        <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/feed">Feed</a></li>
                                        <li><a href="/details">Subscription</a></li>
                                </ul>
                                <div className="navbar-header navbar-right">
                            </div>
                        </div>
                </nav>
                <div className= "container">
                    <div className= "empty"></div>
                    <div className= "row">
                            <div className= "col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                                <div className= "center">
                                    <img src = "FilmUp_Logo_Knockout_White.png" alt = "FILMUP" width = "70%"/>
                                </div>
                            </div>
                    </div>
                    <div className= "row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                                <div className= "center logo-top">
                                    <span className= "white dos open thin">WHERE STUDENTS AND PROFESSIONALS CONNECT</span>
                                    <br/>
                                    <span className= "white dos open thin">TO CREATE GREAT FILMS AND ENACT CHANGE.</span>

                                </div>
                            </div>
                    </div>
                    <div className="empty"></div>
                    <div className="center white open">
                        <span>LEARN MORE</span>
                        <br/>
                        <img className= "martop" src = "down.svg" alt = " " width = "35px"/>
                    </div>
                </div>

            <div className= "container">
                    <div className= "empty"></div>
                    <div className= "empty"></div>
                    <div className= "row center">
                        <div className= "col-lg-2 col-md-2 col-sm-12 col-xs-12 col-lg-offset-2 col-md-offset-2">
                            <img src = "task.svg" alt = "Connect" width = "100%"/>
                        </div>

                        <div className= "col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <img src = "task.svg" alt = "Connect" width = "100%"/>
                        </div>
                        <div className= "col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <img src = "task.svg" alt = "Connect" width = "100%"/>
                        </div>
                        <div className= "col-lg-2 col-md-2 col-sm-12 col-xs-12">
                            <img src = "task.svg" alt = "Connect" width = "100%"/>
                        </div>
                </div>
            </div>

            <div className= "container">
                <div className= "empty"></div>
                <div className= "empty"></div>
                <div className= "empty"></div>
                <div className= "row center">
                    <div className= "col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <span className= "white four open thin">MORE INFO</span>
                    </div>
                </div>
            </div>
          </div>

          <script src={this.props.entry}></script>
          <script dangerouslySetInnerHTML={this.trackingCode()} />
          <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" crossorigin="anonymous"></script>
        </body>
      </html>
    );
  }
}
