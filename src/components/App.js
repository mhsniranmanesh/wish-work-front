import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header.js';
import Main from '../routes.js';
import Header2 from './common/Header2.js';
import '../styles/font-awesome/css/font-awesome.min.css';
import '../styles/bootstrap.min.css';
import '../styles/bootstrap-select.min.css';
import '../styles/dataTables.bootstrap4.css';
import '../styles/bootstrap-rtl.min.css';
// import '.MainNavBarAction.js';
import 'reactstrap/dist/reactstrap.min.js';
import 'reactstrap/dist/reactstrap.cjs.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-bootstrap';

class App extends React.Component {
  render(){
    return(
      <div>
        <Header2/>
        <Main/>
      </div>
      );
    }
}

App.PropTypes = {
  routes: PropTypes.object.isRequired
};

module.exports = App;
