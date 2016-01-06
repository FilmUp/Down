import React, {Component, PropTypes} from 'react';
import Navigation from './Navigation';
import SubmitProjectForm from './SubmitProjectForm.js';

export default class Feed extends Component {
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
          <script>
          </script>
        </head>
        <body className="background-dark">
        <Navigation />
        <div className="content container">
          <SubmitProjectForm />
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
          <script src="lib/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
          <script src="lib/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js"></script>
          <script src="forms-wizard.js"></script>
          <script src="forms-article.js"></script>

        </body>

      </html>
    );
  }
}
