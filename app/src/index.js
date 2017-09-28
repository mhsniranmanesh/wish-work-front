import React from 'react';
import ReactDOM from 'react-dom';
import DashboardButton from './DashboardButton/DashboardButton.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(
  <DashboardButton/>,
  document.getElementById('root')
);
