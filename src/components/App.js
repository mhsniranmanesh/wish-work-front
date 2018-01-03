import React from 'react';
import PropTypes from 'prop-types';
import Main from '../routes/routes.js';
import Header2 from './common/Header2.js';
import {connect} from 'react-redux';
import * as profileInfo from '../actions/profileInfo.js';
import { withRouter } from 'react-router-dom';
import financialManagement from './financialmanagement/FinancialManagement';

class App extends React.Component {
  constructor(props , context){
    super(props , context);


  }
  render(){
    return(
      <div>
        <Header2/>
        <Main />
      </div>
      );
    }
}

App.PropTypes = {
  routes: PropTypes.object.isRequired,
  profileInfo: PropTypes.array.isRequired
};

function mapStateToProps(state , ownProps){
  return{
    profileInfo : state.profileInfo
  };
}


export default withRouter(connect(mapStateToProps)(App));
