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
import {getSubmittedProjects} from "./actions/projectSubmit";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../static/css/wish.css';
import '../static/css/wish-dash.css';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.js';
import axios from 'axios';
//import {Authentication} from './promises/authentication';



if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
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
function goToSignIn(err) {
    if(err){
        window.location.href = '/signin/'
    }
}

Authentication().then(() => {
    console.log('ok' , axios.defaults.headers.common['Authorization'] );
    const store = configureStore();
    // store.dispatch(profileInfo()).then().catch(
    //     err => {goToSignIn(err)}
    // )
    ;
    // store.dispatch(projectSubmitLocalForDashboard())
    store.dispatch(profileInfo());
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

