import React, {Component, PropTypes} from 'react';
export default class SignUp extends Component {
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
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <section className="widget">
              <header>
                <h5 className="text-align-center">
                  Select Account Type
                </h5>
              </header>
              <div className="body">
                <div className="tabbable tabs-left">
                  <ul id="myTabLeft" className="nav nav-tabs">
                    <li className="active"><a href="#student-left" data-toggle="tab">Student</a></li>
                    <li ><a href="#business-left" data-toggle="tab">Business</a></li>
                  </ul>
                  <div id="myTabContentLeft" className="tab-content" >
                    <div className="tab-pane fade in active" id="student-left">
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
                              <label >School Name</label>
                              <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-university"></i>
                                            </span>
                                <input id="school"  className="form-control input-lg input-transparent"
                                       placeholder="School attend(ed|ing)"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label  >Location</label>
                              <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-plane"></i>
                                            </span>
                                <input id="location"  className="form-control input-lg input-transparent"
                                       placeholder="Your immediate location eg. City, Town"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label >Area of Study</label>
                              <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-book"></i>
                                            </span>
                                <input id="study"  className="form-control input-lg input-transparent"
                                       placeholder="What did you study?"/>
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
                    </div>
                    <div className="tab-pane fade" id="business-left">
                      <div className="body">
                        <form className="no-margin" action="/details" method="get">
                          <fieldset>
                            <div className="form-group">
                              <label for="Institution" >Company Name</label>
                              <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-university"></i>
                                        </span>
                                <input id="fname" type="name" className="form-control input-lg input-transparent"
                                       placeholder="Your Institution Name"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label  >Location</label>
                              <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="glyphicon glyphicon-plane"></i>
                                            </span>
                                <input id="location"  className="form-control input-lg input-transparent"
                                       placeholder="Your immediate location eg. City, Town"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <label >Area of Speciality</label>
                              <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-money"></i>
                                            </span>
                                <input id="specility"  className="form-control input-lg input-transparent"
                                       placeholder="How do you make money?"/>
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
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
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
      </body>

      </html>
  );
  }
  }
