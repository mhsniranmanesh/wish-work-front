import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as profileInfo from '../../actions/profileInfo.js';
import {bindActionCreators} from 'redux';
import * as recomendedProject from '../../actions/recomendedProjectForFreelancer.js';
import DashboardProjectSubmission from "./DashboardProjectSubmisson";
import ProjectsListForDashboard from './ProjectsListForDashboard';
import NotificationsListForDashboard from "./NotificationsListForDashboard";
import Notifications from '../../actions/Notifications';


class Dashboard extends React.Component{
  constructor(props , context){
    super(props , context);

    this.gotoRecomendedProjects = this.gotoRecomendedProjects.bind(this);
    this.submitProject = this.submitProject.bind(this);
    this.gotoNotifications = this.gotoNotifications.bind(this);
  }
  // profileRow(profileInfo , index){
  //   return <div key={index}>{profileInfo.first_name +' '+ profileInfo.last_name}</div>;
  // }
    submitProject(event){
        event.preventDefault();
        this.context.router.history.push('/projectsubmition');
    }

    gotoRecomendedProjects(event){
        event.preventDefault();
        this.context.router.history.push('/recomendedprojects');
    }

    gotoNotifications(event){
        event.preventDefault();
        this.context.router.history.push('/notifspage');
    }

  render(){
    return(
      <div>

      <div className="content-wrapper py-3">
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-5">
                  <div className="dash-con dash-profile mb-4">
                      <div className="row">
                          <div className="mx-auto">
                              <img src="http://via.placeholder.com/125x125" className="rounded-circle"/>
                              <h5> {this.props.profileInfo.first_name + ' ' + this.props.profileInfo.last_name} </h5>
                              <h6 className="dash-profile-stars">
                            <i className="fa fa-star shine-on"/>
                            <i className="fa fa-star shine-on"/>
                            <i className="fa fa-star shine-on"/>
                            <i className="fa fa-star-o shine-on"/>
                            <i className="fa fa-star-o shine-on"/>
                          </h6>
                          </div>
                      </div>
                  </div>
                 <DashboardProjectSubmission myFunc={this.submitProject}/>
              </div>
              <div className="col-sm-7">

                  <NotificationsListForDashboard Notifications={this.props.Notifications} myFunc={this.gotoNotifications}/>
                  <ProjectsListForDashboard Projects={this.props.recomendedProject} myFunc={this.gotoRecomendedProjects}/>

              </div>
          </div>
      </div>
  </div>
      </div>
    );
  }
}

Dashboard.contextTypes = {
    router: PropTypes.object.isRequired
};

Dashboard.PropTypes = {
    profileInfo: PropTypes.array.isRequired,
    recomendedProject: PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired,
    Notifications : PropTypes.object.isRequired
};

function mapStateToProps(state , ownProps){
  return{
        profileInfo : state.profileInfo,
        recomendedProject : state.recomendedProject,
        Notifications : state.Notifications
  };
}
function mapDispatchToProps(dispatch){
  return{
  actions : bindActionCreators(profileInfo , recomendedProject , Notifications , dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);
