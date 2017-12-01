import React from 'react';
import PropTypes from 'prop-types';
import MainPublic from '../routes/routes.js';
import Header from './common/Header.js';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';


class App extends React.Component {
    constructor(props , context){
        super(props , context);


    }
    render(){
        return(
            <div>
                <Header/>
                <MainPublic />
            </div>
        );
    }
}


App.PropTypes = {
    routes: PropTypes.object.isRequired,
};

function mapStateToProps(state , ownProps){
    return {
    };
}


export default withRouter(connect(mapStateToProps)(App));