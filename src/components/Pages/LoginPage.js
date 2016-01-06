import React, { Component, PropTypes } from 'react';
import Page from '../Containers/Page';

const propTypes = {
  body: PropTypes.element.isRequired
};

const title = "FilmUp | Login";
const description = "FilmUp | Make yoir Film Matter";
const imports = ["", "", ""];
class LoginPage extends Component {
  renderBody() {
    return (
      <LoginForm />

    )
  }

  renderHeader() {
    return <head>

    </head>
  }

  render() {
    return <Page>
      {renderHeader()}
      {renderBody()}
    </Page>
  }
}

Body.propTypes = propTypes;
export default Page;
