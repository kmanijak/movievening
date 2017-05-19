import React from 'react';
import './User.css';

const User = ({ displayName, photoUrl, onLogoutClick }) => (
  <div className="user">
    <p className="user__name">{displayName}</p>
    <img className="user__photo" src={photoUrl} alt={displayName} />
    <button className="user__logout" onClick={onLogoutClick}>log out</button>
  </div>
);

export default User;
