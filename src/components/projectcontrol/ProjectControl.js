import React from 'react';
import MileStones from './MileStones';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as ControlProjectActions from '../../actions/mileStoneActions';
import * as ProfileInfoActions from '../../actions/profileInfo';
import ProjectsList from './projectsList';

class ProjectControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {AsFreelancerProject:"" , AsClientProject:"", fileIsUpload:false,
            loadSuccess:false , file:"" , mileStoneId:"" , milestone_id:""};
        this.size = this.size.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.sendUploadedFileByFreelancer = this.sendUploadedFileByFreelancer.bind(this);

    }
    sendUploadedFileByFreelancer(){
        console.log(this.state.milestone_id , 'mileStoneIdmileStoneId');
        var sendData = {
            file : this.state.file,
            milestone_id: this.state.milestone_id
        };
        this.props.actions.sendUploadedFileByFreelancerAction(sendData).then().catch(
            err=>{
                throw (err)
            }
        )
    }
    uploadFile(e , id){
        e.preventDefault();
        this.setState({fileIsUpload : true});
        let reader = new FileReader();
        let file = e.target.files[0];
        this.setState({file : file , mileStoneid: id});
        this.setState({milestone_id: id});
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
        if(x>0) {
            for (var i = 0; i < this.props.profileInfo[x - 1].client_projects.length; i++) {
                if (this.props.profileInfo[x - 1].client_projects[i].is_started) {
                    this.setState({AsClientProject: Object.assign({}, this.props.profileInfo[x - 1].client_projects[i])})
                }

            }
            for (var j = 0; j < this.props.profileInfo[x - 1].freelancer_projects.length; j++) {

                if (this.props.profileInfo[x - 1].freelancer_projects[j].is_started) {
                    this.setState({AsFreelancerProject: Object.assign({}, this.props.profileInfo[x - 1].freelancer_projects[j])})
                }
            }
            this.setState({loadSuccess: true});
        }
    }
    componentWillReceiveProps(nextProps){
        var size = this.size(nextProps.profileInfo);
        var clientp = [],
            freelancerp = [];
        if(this.props.profileInfo != nextProps.profileInfo) {
            for(var i=0,t=0 ; i<nextProps.profileInfo[size-1].client_projects.length ;i++){
                if(nextProps.profileInfo[size-1].client_projects[i].is_started){
                    clientp[t] = nextProps.profileInfo[size-1].client_projects[i];
                    this.setState({AsClientProject : clientp});
                    t++;
                }
            }
            for (var j = 0,z=0; j < nextProps.profileInfo[size - 1].freelancer_projects.length; j++) {
                if(nextProps.profileInfo[size-1].freelancer_projects[j].is_started){
                    freelancerp[z] = nextProps.profileInfo[size-1].freelancer_projects[j];
                    this.setState({AsFreelancerProject : freelancerp});
                    z++;
                }
            }
            this.setState({loadSuccess: true});
            console.log(this.state.AsClientProject , 'AsClientProject');
        }
    }
  render(){
    return(
      <div className="content-wrapper py-3">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-8 d-block">
                      <div className="dash-con dash-new-project con-body mb-4">
                          <h5 className="form-title-fontsize">کنترل پروژه</h5>
                          <div className="dash-divider"/>
                          <label className="col-form-label form-header-fontsize">زمان بندی پروژه شما</label>
                          {this.state.loadSuccess? <MileStones
                                      AsClientProject={this.state.AsClientProject}
                                      AsFreelancerProject={this.state.AsFreelancerProject}
                                      uploadFile={this.uploadFile}
                                      fileIsUpload={this.state.fileIsUpload}
                                      mileStoneid={this.state.mileStoneid}
                                      sendUploadedFileByFreelancer={this.sendUploadedFileByFreelancer}

                          />:(null)}
                      </div>
                  </div>
                  <div className="col-sm-4 contacts-section">
                      {this.state.loadSuccess? <ProjectsList
                          AsClientProject={this.state.AsClientProject}
                          AsFreelancerProject={this.state.AsFreelancerProject}
                        />
                      :(null)
                       }
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
ProjectControl.PropTypes = {
    sendUploadedFileByFreelancerAction: PropTypes.func.isRequired,
    actions : PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        profileInfo: state.profileInfo
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ControlProjectActions, dispatch)

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectControl);
