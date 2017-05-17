import { login, logout } from './http';

class UserContainer {
  user = {
    "_id": "591c2f113f501b47beef415d",
    "displayName": "Karol Manijak",
    "firstName": "Karol",
    "lastName": "Manijak",
    "preferredName": null,
    "gender": "Male",
    "jobTitle": "Senior Dev FrontEnd",
    "workEmail": "karol.manijak@grandparade.co.uk",
    "photoUploaded": true,
    "photoUrl": "https://29abcff691c8f2892a87-5a1a1f338620ed4046650b983e35bd47.ssl.cf3.rackcdn.com/photos/106-0-1.jpg",
    "__v": 0
  };

  login(email, password) {
    return new Promise((resolve, reject) => {
      login(email, password)
        .then(user => {
          this.user = user;
          console.log(user);
          resolve(user);
        })
        .catch(error => {
          reject(error);
        })
    })
  }

  logout() {
    this.user = null;

    return new Promise((resolve, reject) => {
      logout()
        .then(() => {
          resolve();
        })
        .catch(error => {
          reject(error);
        })
    })
  }

  isLoggedIn() {
    return Boolean(this.user);
  }

  getUser() {
    return this.user;
  }
}

export default new UserContainer();
