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
import {ProjectsDone} from "./actions/ProjectsDone";
import {profileInfo} from "./actions/profileInfo";
import axios from 'axios';
import {freelancerDetail} from "./actions/freelancerDetail";

const store = configureStore();
store.dispatch(ProjectsDone());
if (process.env.NODE_ENV !== 'production') {
    console.log('Here We are!');
}
function Authentication() {
    return new Promise((resolve , reject) => {
        const token = localStorage.getItem('current_login_token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = 'JWT ' + token;
            resolve();
        }
        else {
            axios.defaults.headers.common['Authorization'] = null;
            /* if setting null does not remove `Authorization` header then try
               delete axios.defaults.headers.common['Authorization'];
            */
            resolve();

        }
    });
}

Authentication().then(() => {
    var a = axios.get('/api/v1/profiles/initial/');
    if(localStorage.getItem('current_login_token')) {
        store.dispatch(profileInfo());
        //show his profile!
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
    )
});