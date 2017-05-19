import { LOGGING_IN, LOGGING_OUT, LOGGED_IN, LOGGED_OUT } from './actions';

const userState = {
  details: {
    _id: "591c2f113f501b47beef415d",
    displayName: "Karol Manijak",
    firstName: "Karol",
    lastName: "Manijak",
    preferredName: null,
    gender: "Male",
    jobTitle: "Senior Dev FrontEnd",
    workEmail: "karol.manijak@grandparade.co.uk",
    photoUploaded: true,
    photoUrl: "https://29abcff691c8f2892a87-5a1a1f338620ed4046650b983e35bd47.ssl.cf3.rackcdn.com/photos/106-0-1.jpg",
    __v: 0,
  },
  pending: false,
  error: '',
};

// const userState = {
//   details: null,
//   pending: false,
//   error: '',
// };

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
