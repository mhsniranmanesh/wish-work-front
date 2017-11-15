import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import "../static/css/bootstrap.min.css"
import "../static/css/bootstrap-rtl.min.css";
import "../static/css/fontiran.css"
import "react-bootstrap-select";
import "font-awesome/css/font-awesome.min.css";
import configureStore from './store/configureStore.js';
import {profileInfo} from './actions/profileInfo.js';
import {recomendedProject} from './actions/recomendedProjectForFreelancer';

import {Notifications} from "./actions/Notifications";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../static/css/wish.css';
import '../static/css/wish-dash.css';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.js';



const store = configureStore();
store.dispatch(profileInfo());
store.dispatch(recomendedProject());
store.dispatch(Notifications());


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



