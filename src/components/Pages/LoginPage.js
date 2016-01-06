import React, { Component, PropTypes } from 'react';
import GoogleAnalytics from '../../core/GoogleAnalytics';
import Page from '../Containers/Page.js';
import Body from '../Containers/Body.js';
import JavaScriptImport from '../Elements/JavaScriptImport.js';
import LoginForm from '../Forms/LoginForm.js';

const propTypes = {
  body: PropTypes.element.isRequired
};

const title = "FilmUp | Login";
const description = "FilmUp | Make yoir Film Matter";
const imports = ["lib/jquery/dist/jquery.min.js",
  "lib/jquery-pjax/jquery.pjax.js",
  "lib/bootstrap-sass/assets/javascripts/bootstrap.min.js",
  "lib/underscore/underscore.js",
  "app.js",
  "settings.js"];

class LoginPage extends Component {
  renderBody() {
    return <Body>
        <div className="background-dark">
          <div className="single-widget-container">
            <LoginForm />
          </div>
        </div>
        {imports.map(function(imp) {
          return <JavaScriptImport link={imp} />
        })}
        <script dangerouslySetInnerHTML={GoogleAnalytics()} />
      </Body>
  }

  renderHeader() {
    return <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{this.props.title}</title>
      <meta name="description" content={this.props.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" crossorigin="anonymous"/>
      <link rel="stylesheet" href="application.css" />
      <script />
    </head>
  }

  render() {
    return <Page
      header={this.renderHeader()}
      body={this.renderBody()}
    />
  }
}

LoginPage.propTypes = propTypes;
export default LoginPage;
