import React from 'react';

import './User.css';

const User = ({ displayName, workEmail, photoUploaded, photoUrl, gender }) => (
  <div className="user">
    <p className="user__name">{displayName}</p>
    <img className="user__photo" src={photoUrl} alt={displayName} />
  </div>
);

export default User;
