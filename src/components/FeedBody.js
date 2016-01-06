import React, {Component, PropTypes} from 'react';
import Navigation from './Navigation';
import AuthenticatedComponent from './AuthenticatedComponent.js';
import AuthService from '../services/AuthService'
import LoginStore from '../stores/LoginStore'

export default AuthenticatedComponent( class FeedBody extends Component {
  static props = {
    entry: PropTypes.string.isRequired
  };

  trackingCode() {
    return ({
      __html: `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=` +
      `function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;` +
      `e=o.createElement(i);r=o.getElementsByTagName(i)[0];` +
      `e.src='https://www.google-analytics.com/analytics.js';` +
      `r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));` +
      `ga('create','xxxxxxx-x','auto');ga('send','pageview');`
    });
  }

render(){
  return (
    <body className="background-dark">
    <Navigation />
    <div className="content container">
      <div className="row widget-container">
        <div className="col-md-5">
          <section className="widget tiny-x2">
            <header>
              <h4>
                TRAILER OF THE WEEK
              </h4>
            </header>
            <div className="body">
              <ul id="grid" class="row thumbnails">
                <a href="TRAILER VIDEO.mp4" class="thumbnail">
                  <img src="maxresdefault.jpg"  width="517" height="390" alt=""/>
                </a>
              </ul>
            </div>
          </section>
        </div>
        <div className="col-md-4">
          <section className="widget tiny">
            <header>
              <h4>
                Col-md-4
              </h4>
            </header>
            <div className="body">
              <ul id="grid" class="row thumbnails">
                <a href="REEL.mp4" class="thumbnail">
                  <img src="REEL.mp4" alt=""/>
                </a>
              </ul>
            </div>
          </section>
          <section className="widget tiny">
            <header>
              <h4>
                Col-md-4
              </h4>
            </header>
            <div className="body">
            </div>
          </section>
        </div>
        <div className="col-md-3">
          <section className="widget tiny">
            <header>
              <h4>
                Col-md-3
              </h4>
            </header>
            <div className="body">
            </div>
          </section>
          <section className="widget tiny">
            <header>
              <h4>
                Col-md-3
              </h4>
            </header>
            <div className="body">
            </div>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 widget-container">
          <section className="widget" id="news-widget" data-widgster-load="server/php/widgets/news.php">
            <header>
              <h5>
                News <span className="badge badge-success">17</span>
              </h5>
              <span className="text-muted">spinning refresh button & close prompt</span>
              <div className="widget-controls">
                <a data-widgster="expand" title="Expand" href="#"><i className="glyphicon glyphicon-plus"></i></a>
                <a data-widgster="collapse" title="Collapse" href="#"><i
                  className="glyphicon glyphicon-minus"></i></a>
                <a data-widgster="load" title="I am spinning!" href="#"><i
                  className="glyphicon glyphicon-refresh"></i></a>
                <a data-widgster="close" title="Close" href="#"><i className="glyphicon glyphicon-remove"></i></a>
              </div>
            </header>
            <div className="body">
              <ul className="news-list stretchable">
                <li>
                              <span className="icon background-warning">
                                  <i className="fa fa-star"></i>
                              </span>
                  <div className="news-item-info">
                    <h4 className="name"><a href="#">First Human Colony on Mars</a></h4>
                    <p>
                      "First 700 people will take part in building first human settlement outside of Earth.
                      That's awesome, right?"
                    </p>
                    <div className="time">Mar 20, 18:46</div>
                  </div>
                </li>
                <li>
                              <span className="icon background-info">
                                  <i className="fa fa-microphone"></i>
                              </span>
                  <div className="news-item-info">
                    <h4 className="name"><a href="#">Light Blue reached $300</a></h4>
                    <p>
                      Light Blue Inc. shares just hit $300 price. "This was inevitable. It should
                      have happen sooner or later" - says NYSE expert.
                    </p>
                    <div className="time">Sep 25, 11:59</div>
                  </div>
                </li>
                <li>
                              <span className="icon background-lime">
                                  <i className="fa fa-eye"></i>
                              </span>
                  <div className="news-item-info">
                    <h4 className="name"><a href="#">No more spying</a></h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="time">Mar 20, 18:46</div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="news-close-modal" className="modal fade" tabindex="-1" role="dialog"
                 aria-labelledby="news-close-modal-label" aria-hidden="true" style={{display: 'none'}}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 className="modal-title" id="news-close-modal-label">Sure?</h4>
                  </div>
                  <div className="modal-body">
                    Do you really want to unrevertably remove this super news widget?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">No</button>
                    <button type="button" className="btn btn-danger" id="news-widget-remove">Yes, remove widget
                    </button>
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
    <script dangerouslySetInnerHTML={this.trackingCode()}/>
    <script src="lib/bootstrap-select/dist/js/bootstrap-select.min.js"></script>
    <script src="lib/select2/select2.min.js"></script>
    <script src="lib/jquery.maskedinput/dist/jquery.maskedinput.min.js"></script>
    <script src="lib/moment/moment.js"></script>
    <script src="js/grid-live.js"></script>
    <script src="lib/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
    <script src="lib/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js"></script>
    <script src="js/forms-wizard.js"></script>
    <script src="lib/magnific-popup/dist/jquery.magnific-popup.min.js"></script>
    <script src="js/component-gallery.js"></script>
    </body>
  );
}
});
