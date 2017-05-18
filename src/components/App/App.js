import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../../containers/Navbar';
import Palette from '../Palette';

import Home from '../../pages/Home';
import Movies from '../../pages/Movies';
import Voting from '../../pages/Voting';
import Meetings from '../../pages/Meetings';
import Login from '../../containers/Login';

import './App.css';

const App = () => (
  <div className="app">
    <Palette height="8px" />
    <Router>
      <div className="content">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/vote" component={Voting} />
        <Route path="/meetings" component={Meetings} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  </div>
);

export default App;
