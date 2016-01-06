import React, {Component, PropTypes} from 'react/addons';
import AuthenticatedComponent from '../AuthenticatedComponent.js';
import AuthService from '../../services/AuthService'
import LoginStore from '../../stores/LoginStore'
import ReactMixin from 'react-mixin';

export default class LoginForm extends Component {
  super() {
    this.state = {
      user: '',
      password: ''
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password)
      .catch(function (err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
      });
  }

  render() {
    return (
      <section className="widget login-widget">
        <header className="text-align-center">
          <h4>Login to your account</h4>
        </header>
        <div className="body">
          <form className="no-margin"
                action="/feed" method="get">
            <fieldset>
              <div className="form-group">
                <label for="email">Email</label>
                <div className="input-group">
                    <span className="input-group-addon">
                      <i className="fa fa-user"></i>
                    </span>
                  <input id="email" type="email" className="form-control input-lg input-transparent"
                         placeholder="Your Email"/>
                </div>
              </div>
              <div className="form-group">
                <label for="password">Password</label>

                <div className="input-group input-group-lg">
                    <span className="input-group-addon">
                      <i className="fa fa-lock"></i>
                    </span>
                  <input id="password" type="password" className="form-control input-lg input-transparent"
                         placeholder="Your Password"/>
                </div>
              </div>
            </fieldset>
            <div className="form-actions">
              <button type="submit" className="btn btn-block btn-lg btn-primary" onClick={this.login.bind(this)}>
                <small>Sign In</small>
              </button>
              <a className="forgot" href="#">Forgot Username or Password?</a>
              <div className="horizontalRule" style={{height:1 + 'px'}}/>
              <a className="forgot" href="/s">I'd like to register</a>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
ReactMixin(LoginForm.prototype, React.addons.LinkedStateMixin);
