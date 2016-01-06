import React, {Component, PropTypes} from 'react';

export default class StudentSignUpPage extends Component {
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
          <link rel="stylesheet" href="signup.css" crossorigin="anonymous"/>
          <script>
          </script>
        </head>
        <body className="background-dark">
                <div className="single-widget-container">
                    <section className="widget login-widget">
                        <header className="text-align-center">
                            <h4>Login to your account</h4>
                        </header>
                        <div className="body">
                            <form className="no-margin" action="/feed" method="get">
                                <fieldset>
                                <div className="form-group">
                                    <label for="FirstName" >First Name</label>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-user"></i>
                                        </span>
                                        <input id="fname" type="name" className="form-control input-lg input-transparent"
                                               placeholder="Your FirstName"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="LastName" >First Name</label>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-user"></i>
                                        </span>
                                        <input id="lname" type="name" className="form-control input-lg input-transparent"
                                               placeholder="Your LastName"/>
                                    </div>
                                </div>
                                    <div className="form-group">
                                        <label for="email" >Email</label>
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-inbox"></i>
                                            </span>
                                            <input id="email" type="email" className="form-control input-lg input-transparent"
                                                   placeholder="Your Email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="password" >Password</label>

                                        <div className="input-group input-group-lg">
                                            <span className="input-group-addon">
                                                <i className="fa fa-lock"></i>
                                            </span>
                                            <input id="password" type="password" className="form-control input-lg input-transparent"
                                                   placeholder="Your Password"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="password" >Password Again</label>

                                        <div className="input-group input-group-lg">
                                            <span className="input-group-addon">
                                                <i className="fa fa-lock"></i>
                                            </span>
                                            <input id="password-again" type="password" className="form-control input-lg input-transparent"
                                                   placeholder="Your Password Again"/>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="form-actions">
                                    <button type="submit" className="btn btn-block btn-lg btn-primary">
                                        <small>SignUp</small>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
        <script src="lib/jquery/dist/jquery.min.js"></script>
        <script src="lib/jquery-pjax/jquery.pjax.js"></script>
        <script src="lib/bootstrap-sass/assets/javascripts/bootstrap.min.js"></script>
        <script src="lib/underscore/underscore.js"></script>

        <script src="app.js"></script>
        <script src="settings.js"></script>
        <script src={this.props.entry}></script>
        <script dangerouslySetInnerHTML={this.trackingCode()} />
        </body>

      </html>
    );
  }
}
