import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Navbar from './components/Navbar';
import About from './components/About';

export default (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Route exact path='/' component={App} />
      <Route exact path='/about' component={About}/>
    </div>
  </BrowserRouter>
);




