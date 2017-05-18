import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Page from '../Page';
import Loader from '../../components/Loader';
import './Login.css';

class Login extends Component {
  emailInput = null;
  passwordInput = null;

  handleLogin = () => {
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    this.props.logIn(email, password);
  };

  render() {
    const { pending } = this.props;
    return (
      <Page className="login login__page">
        <h1 className="login__header">Use your BambooHR e-mail to log in*</h1>
        <input className="login__input" type="text" placeholder="E-mail" ref={ref => this.emailInput = ref} />
        <input className="login__input" type="password" placeholder="Password" ref={ref => this.passwordInput = ref} />
        {
          pending ?
            <Loader /> :
            <button className="login__button" onClick={this.handleLogin}>Log in</button>
        }
        <p className="login__footer">* BambooHR is used as a 3rd party user data provider.</p>
      </Page>
    );
  }
}

Login.propsType = {
  pending: PropTypes.bool,
  error: PropTypes.string,
  logIn: PropTypes.func,
};

export default Login;
