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
import * as PSLFD from '../../actions/projectSubmitLocalForDashboard';


const LANGUAGES = require('./Datas/Languages.js');

class Dashboard extends React.Component{
  constructor(props , context){
    super(props , context);
    this.state = {translationTo : "" , translationFrom : ""};

    this.submitProject = this.submitProject.bind(this);
    this.gotoNotifications = this.gotoNotifications.bind(this);
    this.gotoRecomendedProjects = this.gotoRecomendedProjects.bind(this);
    this.updateValueTT = this.updateValueTT.bind(this);
    this.updateValueTF = this.updateValueTF.bind(this);
  }


    submitProject(){
        this.props.actions.PSLFD(this.state);
        //this.props.kosnanat.translationTo = this.state.translationTo;
        //this.props.kosnanat.translationFrom = this.state.translationFrom;

        this.context.router.history.push('/project/submit');
    }

    gotoRecomendedProjects(event){
        event.preventDefault();
        this.context.router.history.push('/project/recommend');
    }

    gotoNotifications(event){
        event.preventDefault();
        this.context.router.history.push('/profile/notif');
    }

    updateValueTT (newValue) {
        if(newValue === null){
            this.setState({
                translationTo: ""
            });
        }
        else {
            this.setState({
                translationTo: newValue
            });
        }
    }
    updateValueTF(newValue) {
        if(newValue === null){
            this.setState({
                translationFrom: ""
            });
        }
        else {
            this.setState({
                translationFrom: newValue
            });
        }
    }

  render(){

    return(
      <div>
        <div className="content-wrapper py-3">
            <div className="container-fluid">
                <div className="row">


                    <div className="col-sm-5">
                        <ProfileInfoForDashboard profileInfo={this.props.profileInfo} />
                        <DashboardProjectSubmission upVTF={this.updateValueTF} upVTT={this.updateValueTT} translationFrom={this.state.translationFrom} translationTo={this.state.translationTo}  myFunc={this.submitProject}/>
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
    kosnanat : PropTypes.array.isRequired,
    recomendedProject: PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired,
    Notifications : PropTypes.object.isRequired,
    PS : PropTypes.object.isRequired,
    PSLFD : PropTypes.func.isRequired
};

function mapStateToProps(state , ownProps){
  return{
        profileInfo : state.profileInfo,
        recomendedProject : state.recomendedProject,
        Notifications : state.Notifications,
        PSLFD : state.PSLFD,

  };
}
function mapDispatchToProps(dispatch){
  return{
  actions : bindActionCreators(profileInfo , recomendedProject , Notifications , PSLFD , dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);
