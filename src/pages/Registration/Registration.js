import React, { Component } from 'react';
import Page from '../Page';
import Error from '../../components/Error';
import './Registration.css';

const wrongEmailError = 'Provided e-mail doesn\'t match BambooHR e-mails';
const passwordMatchingError = 'Passwords don\'t match';
const passwordStrengthError = 'Password is too weak';

class Registration extends Component {
  state = {
    pending: false,
    error: ''
  };

  emailInput = null;
  passwordInput = null;
  repeatedPasswordInput = null;

  validate = () => {
    const password = this.passwordInput.value;
    const repeatedPassword = this.repeatedPasswordInput.value;

    if (password !== repeatedPassword) {
      this.setState({ error: passwordMatchingError, pending: false });
      return;
    }

    if (password.length < 3) {
      this.setState({ error: passwordStrengthError, pending: false });
      return;
    }

    this.handleRegister();
  };

  handleRegister = () => {

  };

  clearError = () => {
    this.setState({ error: '' });
  };

  render() {
    const { error } = this.state;

    return (
      <Page className="registration registration__page">
        <h1 className="registration__header">Use your BambooHR email to register*</h1>
        <input className="registration__input" type="text" placeholder="E-mail" ref={ref => this.emailInput = ref} onChange={this.clearError} />
        <input className="registration__input" type="password" placeholder="Password" ref={ref => this.passwordInput = ref} onChange={this.clearError} />
        <input className="registration__input" type="password" placeholder="Repeat password" ref={ref => this.repeatedPasswordInput = ref} onChange={this.clearError} />
        <button className="registration__button" onClick={this.validate}>Register</button>
        <p className="login__footer">* BambooHR is used as a database of Grand Parade employees and a user detail provider.</p>
        {error && <Error error={error} />}
      </Page>
    );
  }
}

export default Registration;
