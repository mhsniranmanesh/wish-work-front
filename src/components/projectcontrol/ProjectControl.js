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
        this.state = {AsFreelancerProject:"" , AsClientProject:""};
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
        if(x>0){
            for(var i=0 ; i<this.props.profileInfo[x-1].client_projects.length ; i++){
                if(this.props.profileInfo[x-1].client_projects[i].is_started){
                    this.setState({AsClientProject : Object.assign({},this.props.profileInfo[x-1].client_projects[i] )})
                }
            }
        }
    }
    componentWillReceiveProps(nextProps){
        var size = this.size(nextProps.profileInfo);
        if(this.props.profileInfo != nextProps.profileInfo) {
            for(var i=0 ; i<nextProps.profileInfo[size-1].client_projects.length ; i++){
                if(nextProps.profileInfo[size-1].client_projects[i].is_started){
                    this.setState({AsClientProject : Object.assign({},nextProps.profileInfo[size-1].client_projects[i] )})
                }
            }
            console.log(this.state.AsClientProject , 'AsClientProject');
        }
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
                          <MileStones number={this.state.number_of_milestones}
                                      AsClientProject={this.state.AsClientProject}
                          />
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
        profileInfo: state.profileInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ProfileInfoActions ,ControlProjectActions, dispatch)

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectControl);
