import React, {Component, PropTypes} from 'react';

import Page from '../Containers/Page.js';
import Body from '../Containers/Body.js';
import JavaScriptImport from '../Elements/JavaScriptImport.js';
import HomePageWhoWeAreSection from '../Components/HomePageWhoWeAreSection.js';
import HomePageWhatWeDoSection from '../Components/HomePageWhatWeDoSection.js';
import HomePageLogoSection from '../Components/HomePageLogoSection.js';

const imports = ["lib/jquery/dist/jquery.min.js",
  "lib/jquery/dist/jquery.min.js",
  "lib/jquery-pjax/jquery.pjax.js",
  "lib/bootstrap-sass/assets/javascripts/bootstrap.min.js",
  "lib/underscore/underscore.js",
  "app.js",
  "settings.js",
];
export default class HomePage extends Component {

  static title = 'FILMUP - Make Your Dreams Matter';
  static description = 'A catalyst for student films filmmakers';

  static props = {
    entry: PropTypes.string.isRequired
  };

  renderBody() {
    return <Body style={{paddingBottom: 0 + 'px'}}>
      <HomePageLogoSection />
      <HomePageWhoWeAreSection />
      <HomePageWhatWeDoSection />
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
        {imports.map(function(imp) {
          return <JavaScriptImport link={imp} />
        })}
        <JavaScriptImport link={this.props.entry} />
    </Body>

  }

  renderHeader() {
    return <head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <title>{this.title}</title>
      <meta name="description" content={this.description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        crossorigin="anonymous"/>
      <link rel="stylesheet" href="application.css" />
      <link rel="stylesheet" href="home.css" />
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
