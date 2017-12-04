import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import "../static/css/bootstrap.min.css"
import "../static/css/bootstrap-rtl.min.css";
import "../static/css/fontiran.css"
import "react-bootstrap-select";
import "font-awesome/css/font-awesome.min.css";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../static/css/wish.css';
import '../static/css/wish-dash.css';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.js';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';


const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
    console.log('Here We are!');
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