import React from 'react';
import ReactDOM from 'react-dom';
import DashboardButton from '../components/DashboardButton/DashboardButton.js';
import MainNavBar from '../containers/MainNavBar/constants.js'


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(
  <MainNavBar/>,
  document.getElementById('root')
);
