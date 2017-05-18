import { LOGGING_IN, LOGGING_OUT, LOGGED_IN, LOGGED_OUT } from './actions';

const userState = {
  details: null,
  pending: false,
  error: '',
};

export default (state = userState, action) => {
  switch(action.type) {
    case (LOGGING_IN):
    case (LOGGING_OUT):
      return { ...state, pending: true };
    case (LOGGED_IN):
      return { ...state, pending: false, details: action.user };
    case (LOGGED_OUT):
      return { ...state, pending: false, details: null };
    default:
      return state;
  }
};
