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
import ProfileInfoForDashboard from "./ProfileInfoForDashboard";

const LANGUAGES = require('./Datas/Languages.js')

class Dashboard extends React.Component{
  constructor(props , context){
    super(props , context);


    this.submitProject = this.submitProject.bind(this);
    this.gotoNotifications = this.gotoNotifications.bind(this);
  }


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
                        <ProfileInfoForDashboard profileInfo = {this.props.profileInfo} />
                        <DashboardProjectSubmission   myFunc={this.submitProject}/>
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
