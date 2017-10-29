import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
// import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router } from 'react-router-dom';
import routes from './routes.js';
import "react-bootstrap-select";
import './styles/wish.css';
import './styles/wish-dash.css';
// import {loadCourses} from './actions/courseActions';
// import {loadAuthors} from './actions/authorActions';
//import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/toastr/build/toastr.min.css';
import propTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.js';


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

render((
    <BrowserRouter>
    <App/>
    </BrowserRouter>)
,
  document.getElementById('root')
);
