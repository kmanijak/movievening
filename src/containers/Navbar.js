import { connect } from 'react-redux';
import { getUserDetails } from '../modules/user';
import Navbar from '../components/Navbar';

const mapStateToProps = state => ({
  user: getUserDetails(state),
});

export default connect(mapStateToProps)(Navbar);
