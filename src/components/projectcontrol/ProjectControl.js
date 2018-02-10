import React from 'react';
import MileStones from './MileStones';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Modal , ModalBody} from 'reactstrap';
import {bindActionCreators} from 'redux';
import * as ControlProjectActions from '../../actions/mileStoneActions';
import * as ProfileInfoActions from '../../actions/profileInfo';
import ProjectsList from './ProjectsList';
import Errors from './Error';
import Error from "../profileinfo/Error";

class ProjectControl extends React.Component{
    constructor(props , context){
        super(props , context);
        this.state = {AsFreelancerProject:"" , AsClientProject:"", fileIsUpload:false, profileInfo:"",
            loadSuccess:false , file:"" , mileStoneId:"" , milestone_id:"" , dontHaveEnoughCash:false , haveEnoughCash:false
            , downloadFile:false, attachmentId:"" , priceForCashIn:0 , reviseValue:"" ,numberSee:0, activeProjectList : 0 ,
            helpToWishWorkModal:false, donateValue:0 , validPrice:true , showErrorForDonate:false };
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
        this.goToCashIn = this.goToCashIn.bind(this);
        this.donate = this.donate.bind(this);
        this.donateOnchange = this.donateOnchange.bind(this);
        this.validatePrice = this.validatePrice.bind(this);
        this.goToCashInForDonate = this.goToCashInForDonate.bind(this);
        this.goToPayPage = this.goToPayPage.bind(this);
        this.donate = this.donate.bind(this);
        this.toggleDonate = this.toggleDonate.bind(this);
    }
    toggleDonate(){
        this.setState({helpToWishWorkModal:false})
    }
    donate(){
        this.setState({helpToWishWorkModal: true})
    }
    goToCashInForDonate(){
            var validity = this.validatePrice(this.state.donateValue);
            if(validity){
                this.setState({showErrorForDonate : false});
                let price = this.state.donateValue;
                this.props.actions.transActionPerform(price*10).then(
                    () => this.goToPayPage()
                )
            }
            else {
                this.setState({showErrorForDonate : true})
            }

        // let price = this.state.donateValue;
        // this.props.actions.transActionPerform(price*10).then(
        //     () => this.goToPayPage()
        // )
    }
    goToPayPage(){
        window.location.assign(this.props.payLink.payment_url)
    }
    validatePrice(price){
        const pr = /^\d+$/ ;
        return pr.test(price) ;
    }
    donateOnchange(e){
        this.setState({donateValue : e.target.value})
    }
    // donate(){
    //     var validity = this.validatePrice(this.state.donateValue);
    //     if(validity){
    //         //action to pay
    //     }
    //     else {
    //         //lotfan mablagho adad bedin
    //     }
    // }
    goToCashIn(){
        let price = this.state.priceForCashIn.toString();
        this.context.router.history.push({
            pathname: '/account/cash',
            search: price
        });
    }
    changeView(number){
        this.setState({numberSee: number});
        this.setState({activeProjectList: number});
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
          <Modal  isOpen={this.state.helpToWishWorkModal} toggle={this.toggleDonate}>
              <ModalBody className="text-center form-header-fontsize">
                  <div>
                    پروژه ی شما به پایان رسید.
                  </div>
                  <div>
                    اگر از ما راضی بودید هر چقدر که دوست دارید حمایتمون کنید
                  </div>
                  <input className="m-2 cp-dash-donate-input detail-fontsize" placeholder="مبلغ مورد نظر"
                         value={this.state.donateValue} onChange={this.donateOnchange}/>
                       <span className="mr-1">تومان</span>
              </ModalBody>
              <div className="row">
                <div className="col-sm-4 mb-1">
                  <button data-dismiss="modal" aria-hidden="true" className="btn btn-rec btn-primary">راضی نبودم</button>
                </div>
                <div className="col-sm-5"></div>
                <div className="col-sm-2 mb-1">
                  <button className="btn btn-rec btn-primary" onClick={this.goToCashInForDonate}>واریز</button>
                  {this.state.showErrorForDonate?<Errors/>:(null)}
                </div>
              </div>
          </Modal>
          <Modal isOpen="true" toggle={this.toggle}>
              <ModalBody >
                    <span className="form-header-fontsize">برای دانلود فایل خود باید ابتدا وجه مایل استون بعدی را بپردازید</span>
              </ModalBody>
        <button className="btn btn-rec btn-primary col-sm-2" onClick={this.okAndCheckBalanceInModal}>باشه</button>
          </Modal>
          <Modal isOpen={this.state.dontHaveEnoughCash} toggle={this.toggle2}>
              <ModalBody>شما وجه کافی ندارید، برای پرداخت وجه بر روی کلیک کنید</ModalBody>
              <button onClick={this.goToCashIn} >پرداخت وجه</button>
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
                                      donate={this.donate}

                          />:(null)}
                      </div>
                  </div>
                  <div className="col-sm-4 contacts-section">
                      {this.state.loadSuccess? <ProjectsList
                          AsClientProject={this.state.AsClientProject}
                          AsFreelancerProject={this.state.AsFreelancerProject}
                          changeView={this.changeView}
                          activeProjectList={this.state.activeProjectList}
                          numberSee={this.state.numberSee}
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
ProjectControl.contextTypes = {
    router: PropTypes.object.isRequired
};
ProjectControl.PropTypes = {
    sendUploadedFileByFreelancerAction: PropTypes.func.isRequired,
    actions : PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
    return {
        profileInfo: state.profileInfo,
        payLink : state.payLink
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ControlProjectActions, dispatch)

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectControl);
