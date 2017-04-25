import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Palette from '../Palette';

import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Vote from '../../pages/Vote';
import Meetings from '../../pages/Meetings';

import './App.css';

const App = () => (
  <Router className="app">
    <div>
      <Palette height="8px" />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/movies" component={Movies} />
      <Route path="/vote" component={Vote} />
      <Route path="/meetings" component={Meetings} />
    </div>
  </Router>
);

export default App;
