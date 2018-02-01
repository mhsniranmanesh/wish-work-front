import React from 'react';
import MileStones from './MileStones';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {bindActionCreators} from 'redux';
import * as ControlProjectActions from '../../actions/mileStoneActions';
import * as ProfileInfoActions from '../../actions/profileInfo';

class ProjectControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number_of_milestones: 3
        };
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps){

    }
  render(){
    return(
      <div className="content-wrapper py-3">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-8 d-block mx-auto">
                      <div className="dash-con dash-new-project con-body mb-4">
                          <h5 className="form-title-fontsize">کنترل پروژه</h5>
                          <div className="dash-divider"/>
                          <label className="col-form-label form-header-fontsize">زمان بندی پروژه شما</label>
                          <MileStones number={this.state.number_of_milestones}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
        projectDetail: state.projectDetail,
        profileInfo: state.profileInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProfileInfoActions ,ControlProjectActions, dispatch)

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectControl);
