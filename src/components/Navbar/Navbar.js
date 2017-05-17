import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

import Title from '../Title';
import User from '../User';

const Navbar = ({ user }) => (
  <div className="navbar">
    <Title />
    <nav className="navbar__navigation">
      <NavLink exact to="/">home</NavLink>
      <NavLink to="/movies">movies</NavLink>
      <NavLink to="/vote">vote</NavLink>
      <NavLink to="/meetings">meetings</NavLink>
      {!user && <NavLink to="/login">login</NavLink>}
    </nav>
    {user && <User displayName={user.displayName} photoUrl={user.photoUrl} workEmail={user.workEmail} />}
  </div>
);

export default Navbar;
