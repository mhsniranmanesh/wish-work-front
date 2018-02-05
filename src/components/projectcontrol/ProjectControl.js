import React from 'react';
import MileStones from './MileStones';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Modal , ModalBody} from 'reactstrap';
import {bindActionCreators} from 'redux';
import * as ControlProjectActions from '../../actions/mileStoneActions';
import * as ProfileInfoActions from '../../actions/profileInfo';
import ProjectsList from './ProjectsList';

class ProjectControl extends React.Component{
    constructor(props){
        super(props);
        this.state = {AsFreelancerProject:"" , AsClientProject:"", fileIsUpload:false, profileInfo:"",
            loadSuccess:false , file:"" , mileStoneId:"" , milestone_id:"" , dontHaveEnoughCash:false , haveEnoughCash:false
            , downloadFile:false, attachmentId:"" , priceForCashIn:0 , reviseValue:"" ,numberSee:0};
        this.size = this.size.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.sendUploadedFileByFreelancer = this.sendUploadedFileByFreelancer.bind(this);
        this.downloadFileModal = this.downloadFileModal.bind(this);
        this.toggle = this.toggle.bind(this);
        this.okAndCheckBalanceInModal = this.okAndCheckBalanceInModal.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.nextMileStoneBegin = this.nextMileStoneBegin.bind(this);
        this.reviseOnChange = this.reviseOnChange.bind(this);
        this.submitFeedBack = this.submitFeedBack.bind(this);
        this.changeView = this.changeView.bind(this);

    }
    changeView(number){
        this.setState({numberSee: number})
    }
    submitFeedBack(id){
        var Send = {
            milestone_attachment_id: id,
            client_feedback : this.state.reviseValue
        };
        this.props.actions.sendFeedBack(Send).then().catch(err=>{throw (err)})

    }
    reviseOnChange(e){
        this.setState({reviseValue: e.target.value})
    }
    nextMileStoneBegin(){

    }
    toggle3(){
        this.setState({haveEnoughCash: !this.state.haveEnoughCash})
    }
    toggle2(){
        this.setState({dontHaveEnoughCash : !this.state.dontHaveEnoughCash})
    }
    toggle(){
        this.setState({
            downloadFile : !this.state.downloadFile
        });
    }
    downloadFileModal(priceForCashIn , id){
        console.log('HelloId' , id);
        if(priceForCashIn !== 'its the end') {
            this.setState({downloadFile: true, attachmentId: id, priceForCashIn:priceForCashIn})
        }
        else{
        }
    }
    okAndCheckBalanceInModal(){
        if(this.state.profileInfo.balance >= this.state.priceForCashIn){
            this.setState({haveEnoughCash : true , downloadFile:false})
        }
        else {
            this.setState({dontHaveEnoughCash: true , downloadFile:false})
        }
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
        var clientp = [];
        var freelancerp = [];
        if(x>0) {
            this.setState({profileInfo: this.props.profileInfo[x-1]});
            for(var i=0,t=0 ; i<this.props.profileInfo[x-1].client_projects.length ;i++){
                if(this.props.profileInfo[x-1].client_projects[i].is_started){
                    clientp[t] = this.props.profileInfo[x-1].client_projects[i];
                    this.setState({AsClientProject : clientp});
                    t++;
                }
            }
            for (var j = 0,z=0; j < this.props.profileInfo[x - 1].freelancer_projects.length; j++) {
                if(this.props.profileInfo[x-1].freelancer_projects[j].is_started){
                    freelancerp[z] = this.props.profileInfo[x-1].freelancer_projects[j];
                    this.setState({AsFreelancerProject : freelancerp});
                    z++;
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
            this.setState({profileInfo : nextProps.profileInfo[size-1]});
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
          <Modal isOpen={this.state.downloadFile} toggle={this.toggle}>
              <ModalBody >
                  برای دانلود فایل خود باید ابتدا وجه مایل استون بعدی را بپردازید
              </ModalBody>
        <button onClick={this.okAndCheckBalanceInModal}>باشه</button>
          </Modal>
          <Modal isOpen={this.state.dontHaveEnoughCash} toggle={this.toggle2}>
              <ModalBody>شما وجه کافی ندارید</ModalBody>
          </Modal>
          <Modal isOpen={this.state.haveEnoughCash} toggle={this.toggle3}>
              <ModalBody> شما دارای وجه کافی می باشید، برای پرداخت خودکار وجه{this.state.priceForCashIn}تومان ، دیدن فایل خود ، بازنگری فایل خود و نیز شروع کار مرحله ی بعد فریلنسر بر روی تایید کلیک کنید.</ModalBody>
                <button onClick={this.nextMileStoneBegin}>تایید</button>
          </Modal>
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
                                      downloadFileModal={this.downloadFileModal}
                                      reviseOnChange={this.reviseOnChange}
                                      reviseValue={this.state.reviseValue}
                                      submitFeedBack={this.submitFeedBack}
                                      numberSee={this.state.numberSee}

                          />:(null)}
                      </div>
                  </div>
                  <div className="col-sm-4 contacts-section">
                      {this.state.loadSuccess? <ProjectsList
                          AsClientProject={this.state.AsClientProject}
                          AsFreelancerProject={this.state.AsFreelancerProject}
                          changeView={this.changeView}
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
