import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Palette from '../Palette';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Movies from '../../pages/Movies';
import Vote from '../../pages/Vote';
import Meetings from '../../pages/Meetings';

import './App.css';

const App = () => (
  <div className="app">
    <Palette height="8px" />
    <Router>
      <div className="content">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/movies" component={Movies} />
        <Route path="/vote" component={Vote} />
        <Route path="/meetings" component={Meetings} />
      </div>
    </Router>
  </div>
);

export default App;
