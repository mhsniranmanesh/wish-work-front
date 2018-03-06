import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import "../static/css/bootstrap.min.css"
import "../static/css/bootstrap-rtl.min.css";
import "../static/css/fontiran.css"
import "react-bootstrap-select";
import "font-awesome/css/font-awesome.min.css";
// import 'bootstrap-fileinput';
import configureStore from './store/configureStore.js';
import {profileInfo} from './actions/profileInfo.js';
import {recomendedProject} from './actions/recomendedProjectForFreelancer';
import {Notifications} from "./actions/Notifications";
import {getSubmittedProjects} from "./actions/projectSubmit";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../static/css/wish.css';
import '../static/css/wish-dash.css';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.js';
import axios from 'axios';
import { syncHistoryWithStore } from 'react-router-redux';
//import {Authentication} from './promises/authentication';
const queryString = require('query-string');


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
  console.log(window.location.pathname , 'pathname');
    // console.log(this.props , 'console.log(location.search);');

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
            /*if setting null does not remove `Authorization` header then try
              delete axios.defaults.headers.common['Authorization'];
            */
            reject();
        }
    });

    // console.log('token is: ' , axios.defaults.headers.common['Authorization']);
}
function goToLogIn(err) {
    if(err){
        var parsed={};
        parsed.url = window.location.pathname.toString();
        const stringified = queryString.stringify(parsed);
        location.search = stringified;
        console.log(stringified , 'stringified');
        console.log( 'window.location');
        window.location.href = 'http://wishwork.ir/login/' + '?' + stringified;
    }
}

Authentication().then(() => {
    console.log('ok' , axios.defaults.headers.common['Authorization'] );
    // console.log(this.props , 'console.log(location.search);');
    const store = configureStore();
    store.dispatch(profileInfo()).then().catch(
        err => {goToLogIn(err)}
    );
    // store.dispatch(projectSubmitLocalForDashboard())
    // store.dispatch(profileInfo());
    store.dispatch(recomendedProject());
    store.dispatch(Notifications());
    store.dispatch(getSubmittedProjects());
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
});

