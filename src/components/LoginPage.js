import React, {Component, PropTypes} from 'react';
import Navigation from './Navigation.js'
import LoginForm from './Containers/LoginForm'
export default class LoginPage extends Component {
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
        <LoginForm />
      </html>
    );
  }
}
