import { connect } from 'react-redux';
import { logIn, isPending, getError } from '../modules/user';
import Login from '../pages/Login';

const mapStateToProps = state => ({
  pending: isPending(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch, { history }) => ({
  logIn: (email, password) => {
    const routeChange = () => history.push('/movies');

    dispatch(logIn(email, password, routeChange))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
