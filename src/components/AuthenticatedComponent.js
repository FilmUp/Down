import React from 'react';
import LoginStore from '../stores/LoginStore.js';
import Location from '../core/Location';
import Router from '../routes';
export default (ComposedComponent) => {
  return class AuthenticatedComponent extends React.Component {

    static willTransitionTo(transition) {
      if (!LoginStore.isLoggedIn()) {
        console.log('here');
        transition.redirect('/login', {}, {'nextPath' : transition.path});
      }
      console.log('not here');
    }

    constructor() {
      console.log('at line 16');
      super();
      this.state = this._getLoginState();
    }

    _getLoginState() {
      console.log('at line 22');
      return {
        userLoggedIn: LoginStore.isLoggedIn(),
        user: LoginStore.user,
        jwt: LoginStore.jwt
      };
    }

    componentWillMount() {
      console.log('at line 31');
      this.changeListener = this._onChange.bind(this);
      LoginStore.addChangeListener(this.changeListener);
      if (!LoginStore.isLoggedIn()) {
        //console.log(Router);
      }

    }

    _onChange() {
      this.setState(this._getLoginState());
    }

    componentWillUnmount() {
      console.log('at line 41');
      LoginStore.removeChangeListener(this.changeListener);
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          user={this.state.user}
          jwt={this.state.jwt}
          userLoggedIn={this.state.userLoggedIn} />
      );
    }
  }
};
