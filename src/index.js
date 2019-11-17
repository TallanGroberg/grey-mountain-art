import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from './providers/ThemeProvider'
import {BrowserRouter as Router } from 'react-router-dom'
ReactDOM.render(
  
  <Router>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>


, document.getElementById('root'));


serviceWorker.unregister();
