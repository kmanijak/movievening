import { login, logout } from '../http';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGING_OUT = 'LOGGING_OUT';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_IN_FAILED = 'LOGGED_IN_FAILED';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGGED_OUT_FAILED = 'LOGGED_OUT_FAILED';

export const loggingIn = () => ({
  type: LOGGING_IN,
});

export const loggingOut = () => ({
  type: LOGGING_OUT,
});

export const loggedIn = user => ({
  type: LOGGED_IN,
  user,
});

export const loggedInFailed = error => ({
  type: LOGGED_IN_FAILED,
  error,
});

export const loggedOut = () => ({
  type: LOGGED_OUT,
});

export const loggedOutFailed = error => ({
  type: LOGGED_OUT_FAILED,
  error,
});

export const logIn = (email, password, onSuccess = () => {}, onFailure = () => {}) => dispatch => {
  dispatch(loggingIn());
  login(email, password)
    .then(user => {
      dispatch(loggedIn(user));
      onSuccess();
    })
    .catch(error => {
      dispatch(loggedInFailed(error));
      onFailure();
    })
};

export const logOut = (onSuccess = () => {}, onFailure = () => {}) => dispatch => {
  dispatch(loggingOut());
  logout()
    .then(user => {
      dispatch(loggedOut(user));
      onSuccess();
    })
    .catch(error => {
      dispatch(loggedOutFailed(error));
      onFailure();
    })
};
