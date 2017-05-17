import React, { Component } from 'react';
import Page from '../Page';
import Error from '../../components/Error';
import { login } from '../../modules/http'
import './Login.css';

class Login extends Component {
  state = {
    pending: false,
    error: false
  };

  usernameInput = null;
  passwordInput = null;

  handleLogin = () => {
    this.setState({ pending: true });

    const username = this.usernameInput.value;
    const password = this.passwordInput.value;

    login(username, password)
      .then(() => {
        this.props.history.push('/movies');
      })
      .catch(() => {
        this.setState({ pending: false, error: true });
        this.passwordInput.value = '';
      })
  };

  render() {
    return (
      <Page className="login login__page">
        <h1 className="login__header">Use your BambooHR credentials to log in*</h1>
        {this.state.error && <Error error="Couldn't log in. Try again" />}
        <input className="login__input" type="text" placeholder="Login" ref={ref => this.usernameInput = ref} />
        <input className="login__input" type="password" placeholder="Password" ref={ref => this.passwordInput = ref} />
        <button className="login__button" onClick={this.handleLogin}>Log in</button>
        <p className="login__footer">* BambooHR is used only as 3rd party authentication service.</p>
      </Page>
    );
  }
}

export default Login;
