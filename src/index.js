import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import 'bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import "react-bootstrap-select";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/font-awesome/css/font-awesome.min.css';
import './styles/bootstrap-rtl.min.css';
import 'jquery/dist/jquery.min.js';
import configureStore from './store/configureStore.js';
import {profileInfo} from './actions/profileInfo.js';
import {recomendedProject} from './actions/recomendedProjectForFreelancer';
import {Notifications} from "./actions/Notifications";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/wish.css';
import './styles/wish-dash.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.js';


const store = configureStore();
store.dispatch(profileInfo());
store.dispatch(recomendedProject());
//store.dispatch(Notifications());


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

render((
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  )
,
  document.getElementById('root')
);


//import '../styles/bootstrap.min.css';
//import '../styles/bootstrap-select.min.css';
// import './styles/dataTables.bootstrap4.css';
// import '.MainNavBarAction.js';
// import 'reactstrap/dist/reactstrap.min.js';
// import 'reactstrap/dist/reactstrap.cjs.js';
//import 'react-bootstrap';
// import 'bootstrap';
// import "reactstrap";
// import {loadCourses} from './actions/courseActions';
// import {loadAuthors} from './actions/authorActions';
//import './styles/styles.css'; //Webpack can import CSS files too!
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/toastr/build/toastr.min.css';
//import 'bootstrap-rtl';
//import propTypes from 'prop-types';
// import 'babel-polyfill';
//import { Router } from 'react-router-dom';
//import routes from './routes.js';
// import configureStore from './store/configureStore';

