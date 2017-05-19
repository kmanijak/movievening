import { connect } from 'react-redux';
import { getUserDetails, logOut } from '../modules/user';
import Navbar from '../components/Navbar';

const mapStateToProps = state => ({
  user: getUserDetails(state),
});

const mapDispatchToProps = (dispatch, { history }) => ({
  logOut: () => {
    const routeChange = () => history.push('/login');

    dispatch(logOut(routeChange))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
