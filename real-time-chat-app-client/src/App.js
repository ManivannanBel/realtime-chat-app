import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './componenets/Join/Join';
import Chat from './componenets/Chat/Chat';

const App = () => (
  <Router>
    <Route path="/" exact component={Join}/>
    <Route path="/chat" component={Chat}/>
  </Router>
);

export default App;
