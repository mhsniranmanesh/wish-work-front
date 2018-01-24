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
// import * as x from '../../actions/projectSubmitLocalForDashboard';
//import { withRouter } from 'react-router-dom';
import deepEqual from 'deep-equal';


const LANGUAGES = require('./Datas/Languages.js');

class Dashboard extends React.Component{
  constructor(props , context){
    super(props , context);
    this.state = { translationTo : "" , translationFrom : "" ,
        projectSkillTag : "" , translationFatherTag : false ,
        is_general: false , is_medical : false , is_technical : false , is_law : false ,
        profileInfo:Object.assign({} , props.profileInfo[0]) , loading:true};

        this.IsLaw = this.IsLaw.bind(this);
        this.IsMedical = this.IsMedical.bind(this);
        this.IsTechnical = this.IsTechnical.bind(this);
        this.IsGeneral = this.IsGeneral.bind(this);
        this.submitProject = this.submitProject.bind(this);
        this.gotoNotifications = this.gotoNotifications.bind(this);
        this.gotoRecomendedProjects = this.gotoRecomendedProjects.bind(this);
        this.updateValueTT = this.updateValueTT.bind(this);
        this.updateValueTF = this.updateValueTF.bind(this);
        this.getOptions = this.getOptions.bind(this);
  }

    submitProject(){
        // console.log(this.props.actions2);
        //this.props.actions2.projectSubmitLocalForDashboard(this.state);
        // console.log(this.props.actions2);
        // console.log(this.props.actions);
        // console.log(this.props.profileInfo);
        // console.log(this.props);
        // console.log(this.state);
        console.log(this.state.is_general);
        if(this.state.is_general){
            console.log(this.state.projectSkillTag);
            this.context.router.history.push({
                pathname:'/project/submit',
                search : this.state.translationFrom +' ' + this.state.translationTo + ' ' + '1'
            });
        }
        else if(this.state.is_law){
            this.context.router.history.push({
                pathname:'/project/submit',
                search : this.state.translationFrom +' ' + this.state.translationTo + ' ' + '2'
            });
        }
        else if(this.state.is_medical){
            this.context.router.history.push({
                pathname:'/project/submit',
                search : this.state.translationFrom +' ' + this.state.translationTo + ' ' + '3'
            });
        }
        else if(this.state.is_technical){
            this.context.router.history.push({
                pathname:'/project/submit',
                search : this.state.translationFrom +' ' + this.state.translationTo + ' ' + '4'
            });
        }
        else {
            this.context.router.history.push({
                pathname:'/project/submit',
                search : this.state.translationFrom +' ' + this.state.translationTo
            });
        }

    }
    IsTechnical(){
        this.setState({is_technical: true , is_general : false , is_law: false , is_medical: false , translationFatherTag : true});

    }

    IsGeneral(){
        this.setState({is_general: true , is_technical: false , is_medical: false , is_law: false , translationFatherTag : true});
    }

    IsMedical(){
        this.setState({is_general: false , is_technical: false , is_medical: true , is_law: false , translationFatherTag : true});

    }

    IsLaw(){
        this.setState({is_general: false , is_technical: false , is_medical: false , is_law: true , translationFatherTag : true});

    }

    getOptions(){
        // setTimeout(function() {
        //     SchoolsDataService.getSchools(function(data) {
        //         callback(null, {
        //             options: data.schools,
        //             complete: true,
        //         });
        //     });
        // }, 500);
    }
    componentDidMount() {
        // if(this.props.profileInfo[0]){
        //     this.setState({loading: false})
        // }
    }
    // shouldComponentUpdate(nextProps){
    //     console.log('update');
    //     return !deepEqual( nextProps.profileInfo , this.props.profileInfo);
    // }

    componentWillReceiveProps(nextProps){
        if(this.props.profileInfo != nextProps.profileInfo ) {
            console.log(nextProps.profileInfo[0]);
            //inja az halate bler dar biad
            this.setState({profileInfo: Object.assign({}, nextProps.profileInfo[0])});
            this.setState({loading: false})
        }
    }
    componentWillMount(){
// aval bler bashe
        if(this.props.profileInfo[0]){
            this.setState({loading: false})
        }
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
        if(this.state.loading){
            return (
                <div className="content-wrapper py-3">
                    <div className="container-fluid">
                            <div className="center-loading">

                            </div>
                            <div className="load-4">
                                <div className="ring-1">
                                </div>
                        </div>
                    </div>
                </div>
            );
        }
    return(
      <div>
        <div className="content-wrapper py-3">
            <div className="container-fluid">
                <div className="row">


                    <div className="col-sm-5">
                        <ProfileInfoForDashboard profileInfo={this.state.profileInfo} />

                        <DashboardProjectSubmission upVTF={this.updateValueTF} upVTT={this.updateValueTT}
                                                    translationFrom={this.state.translationFrom}
                                                    translationTo={this.state.translationTo}
                                                    myFunc={this.submitProject} index={this.state.index}
                                                    is_general={this.state.is_general} IsGeneral={this.IsGeneral}
                                                    is_technical={this.state.is_technical} IsTechnical={this.IsTechnical}
                                                    is_medical={this.state.is_medical} IsMedical={this.IsMedical}
                                                    is_law={this.state.is_law} IsLaw={this.IsLaw}
                        />
                    </div>
                    <div className="col-sm-7">
                        <NotificationsListForDashboard Notifications={this.props.Notifications} myFunc={this.gotoNotifications}/>
                        <ProjectsListForDashboard Projects={this.state.profileInfo.suggested_projects} myFunc={this.gotoRecomendedProjects}/>
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
    Notifications : PropTypes.object.isRequired,
  //  PSD : PropTypes.array.isRequired,
   // projectSubmitLocalForDashboard : PropTypes.func.isRequired,
   // actions2 : PropTypes.object.isRequired,
};


function mapStateToProps(state , ownProps){

    return{
        profileInfo : state.profileInfo,
        recomendedProject : state.recomendedProject,
        Notifications : state.Notifications,
  };
}
function mapDispatchToProps(dispatch){
  return{
  actions : bindActionCreators( profileInfo , recomendedProject ,  Notifications , dispatch  ),
   //actions2 : bindActionCreators(x , dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);
