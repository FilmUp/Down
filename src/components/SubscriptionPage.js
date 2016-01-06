import React, {Component, PropTypes} from 'react';

export default class SubscriptionPage extends Component {
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
          <link rel="stylesheet" href="details.css" crossorigin="anonymous"/>
          <script>
          </script>
        </head>
        <body>
          <div className="home">
                    <div className="empty" style={{height: 100 + 'px'}}></div>

                    <div className= "row">
                        <div className= "col-lg-11 col-md-10 col-sm-10 col-xs-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                            <span className= "white open four">PLEASE PICK A SERVICE TO CONTINUE</span>
                        </div>
                    </div>

                    <div className= "row">
                        <div className= "col-lg-3 col-md-5 col-sm-10 col-xs-10 col-lg-offset-3 col-md-offset-1 col-sm-offset-1 col-xs-offset-1">
                            <a href = "/feed" className= "none ">
                                <div className= "subscribe center white open wid">
                                    <span className= "four martop">STANDARD</span>
                                    <hr className= "third"/>
                                    <span className= "eight">FREE</span>
                                </div>
                                 <div className= "subbott open">
                                     <span className= "center" dangerouslySetInnerHTML= {{__html: 'PROFILE CREATION &#8729; SCRIPT SUBMITAL'}}></span>
                                         <span className= "center">PROFILE VIEWING</span>
                                </div>
                            </a>
                        </div>

                        <div className= "col-lg-3 col-md-5 col-sm-10 col-xs-10 col-sm-offset-1 col-xs-offset-1">
                            <a href = "/feed" className= "none ">
                                <div className= "subscribe center white open wid">
                                    <span>All ACCESS</span>
                                    <span className= "four">PREMIUM</span>
                                    <hr className= "third"/>
                                    <span className= "mon">$</span><span className= "eight">10</span><span className= "year">/ MONTH</span>
                                </div>
                                <div className= "subbott open">
                                    <span className= "center" dangerouslySetInnerHTML= {{__html: 'PROFILE CREATION &#8729; PROJECT CREATION'}}></span>
                                    <span className= "center" dangerouslySetInnerHTML= {{__html: 'PROJECT COLLABORATION &#8729; PROFILE VIEWING'}}></span>
                                    <span className= "center" dangerouslySetInnerHTML= {{__html: 'DIRECT MESSAGING &#8729; SUBMITAL DISCOUNT'}}></span>
                                </div>
                            </a>
                        </div>
                    </div>
          <div className="empty"></div>
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
