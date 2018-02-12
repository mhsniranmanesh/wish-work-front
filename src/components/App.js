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
    this.state = {fetch:false};
    this.size = this.size.bind(this);

  }
    size (obj) {
        let x = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) x++;
        }
        return x;
    };
  componentWillMount(){
      var x = this.size(this.props.profileInfo);
      if (x > 0) {
        this.setState({fetch: true})
      }
  }
  componentWillReceiveProps(nextProps){
      var size = this.size(nextProps.profileInfo);
      if(this.props.profileInfo != nextProps.profileInfo ) {
          this.setState({fetch: true})
      }
  }
  render(){
    if(!this.state.fetch) {
        return (
            <div id="dashboard-loading" className="loading"></div>

    );
    }
      return(
          <div>
            <Header2/>
            <Main/>
          </div>
      )
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
