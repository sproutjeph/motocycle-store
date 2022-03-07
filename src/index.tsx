import React from 'react';
import ReactDom from 'react-dom';
import './index.scss';
import App from './App';
import { AppProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDom.render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>,
  document.getElementById('root')
);
