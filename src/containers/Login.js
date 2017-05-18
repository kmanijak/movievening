import { connect } from 'react-redux';
import { logIn, isPending, getError } from '../modules/user';
import Login from '../pages/Login';

const mapStateToProps = state => ({
  pending: isPending(state),
  error: getError(state),
});

const mapDispatchToProps = dispatch => ({
  logIn: (email, password) => dispatch(logIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
