import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

import Title from '../Title';

const Navbar = () => (
  <div className="navbar">
    <Title />
    <nav className="navbar__navigation">
      <NavLink exact to="/">home</NavLink>
      <NavLink to="/movies">movies</NavLink>
      <NavLink to="/vote">vote</NavLink>
      <NavLink to="/meetings">meetings</NavLink>
      <NavLink to="/login">login</NavLink>
      <NavLink to="/registration">register</NavLink>
    </nav>
  </div>
);

export default Navbar;
