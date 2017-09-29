import './../../designs/vendor/bootstrap/css/bootstrap.min.css';
import './../../designs/vendor/bootstrap-rtl/css/bootstrap-rtl.min.css';
import './../../designs/vendor/font-awesome/css/font-awesome.min.css';
import './../../designs/css/fontiran.css';
import './../../designs/css/wish.css';
// import './../../designs/js/wish.js';
import './../../designs/img/nav-logo.png';

import React from 'react';
import ReactDOM from 'react-dom';
import DashboardButton from '../components/DashboardButton/DashboardButton.js';
import MainNavBar from '../containers/MainNavBar/MainNavBar.js'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(
  <MainNavBar/>,
  document.getElementById('root')
);
