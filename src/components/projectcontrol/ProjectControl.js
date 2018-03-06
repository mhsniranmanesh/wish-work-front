import React from 'react';
import MileStones from './MileStones';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Modal , ModalBody , ModalFooter} from 'reactstrap';
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
            helpToWishWorkModal:false, donateValue:0 , validPrice:true , showErrorForDonate:false  ,
            message:"" , modalCancelProject:false , cancelIdProject:"" , finalModalForCanceling:false , anvaeBaze:"active" ,
            mohlateErsal:"" , mohlateBazNegari:"" , laghv:"" , bishtar:"" , modalForErrors:false,loading:false,lastMileStoneModal:false
        };
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
        this.goToSubmitProject = this.goToSubmitProject.bind(this);
        this.modalCancelProject = this.modalCancelProject.bind(this);
        this.modalCancelProjectToggle = this.modalCancelProjectToggle.bind(this);
        this.toPersianNum = this.toPersianNum.bind(this);
        this.cancelProjectSendToServer = this.cancelProjectSendToServer.bind(this);
        this.setIdForCanceling = this.setIdForCanceling.bind(this);
        this.okCanceling = this.okCanceling.bind(this);
        this.toggleOkCanceling = this.toggleOkCanceling.bind(this);
        this.onClickAnvaeBaze = this.onClickAnvaeBaze.bind(this);
        this.onClickMohlateErsal = this.onClickMohlateErsal.bind(this);
        this.onClickMohlateBazNegari = this.onClickMohlateBazNegari.bind(this);
        this.onClickLaghv = this.onClickLaghv.bind(this);
        this.onClickBishtar = this.onClickBishtar.bind(this);
        this.loading = this.loading.bind(this);
        this.lastMileStone = this.lastMileStone.bind(this);
        this.lastMileStoneModalToggle = this.lastMileStoneModalToggle.bind(this);
    }
    lastMileStoneModalToggle(){
        this.setState({lastMileStoneModal: !this.state.lastMileStoneModal})
    }
    loading(){
        this.setState({loading : !this.state.loading})
    }
    onClickBishtar(){
        this.setState({anvaeBaze:"" , mohlateErsal:"" , mohlateBazNegari:"" , laghv:"" , bishtar:"active"})
    }
    onClickLaghv(){
        this.setState({anvaeBaze:"" , mohlateErsal:"" , mohlateBazNegari:"" , laghv:"active" , bishtar:""})
    }
    onClickMohlateBazNegari(){
        this.setState({anvaeBaze:"" , mohlateErsal:"" , mohlateBazNegari:"active" , laghv:"" , bishtar:""})
    }
    onClickAnvaeBaze(){
        this.setState({anvaeBaze:"active" , mohlateErsal:"" , mohlateBazNegari:"" , laghv:"" , bishtar:""})
    }
    onClickMohlateErsal(){
        this.setState({anvaeBaze:"" , mohlateErsal:"active" , mohlateBazNegari:"" , laghv:"" , bishtar:""})
    }
    toggleOkCanceling(){
        this.setState({finalModalForCanceling: !this.state.finalModalForCanceling})
    }
    okCanceling(){
        this.setState({modalCancelProject:false});
        this.setState({finalModalForCanceling:true})
    }
    setIdForCanceling(id){
        this.setState({cancelIdProject:id})
    }
    cancelProjectSendToServer(){
        this.props.actions.cancelProject(this.state.cancelIdProject).then(
            () => this.okCanceling()
        ).catch(err =>{
            throw (err)
        })
        // console.log(this.state.cancelIdProject , 'this.state.cancelIdProject');
    }
    toPersianNum( num, dontTrim ) {

        var i = 0,

            dontTrim = dontTrim || false,

            num = dontTrim ? num.toString() : num.toString().trim(),
            len = num.length,

            res = '',
            pos,

            persianNumbers = typeof persianNumber == 'undefined' ?
                ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'] :
                persianNumbers;

        for (; i < len; i++)
            if (( pos = persianNumbers[num.charAt(i)] ))
                res += pos;
            else
                res += num.charAt(i);

        return res;
    }

    modalCancelProjectToggle(){
        this.setState({modalCancelProject : !this.state.modalCancelProject})
    }
    modalCancelProject(){
        this.setState({modalCancelProject : true})
    }
    goToSubmitProject(){
        this.context.router.history.push({
            pathname: '/project/submit'
        });
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
                this.props.actions.transActionPerformForDonate(price*10 , 2).then(
                    () => this.goToPayPage()
                )
            }
            else {
                this.setState({showErrorForDonate : true , message:"وجه کافی ندارید، لطفا در صورت تمایل واریز کنید."})
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
    /////after submit , pulesho kam kon!

    nextMileStoneBegin(){
        // this.props.actions.pay =>
        this.setState({haveEnoughCash: !this.state.haveEnoughCash});
        this.props.actions.nextMileStoneBegin(this.state.mileStoneId).then(
        ).catch(
            err=>{
                throw (err)
            }
        )
    }
    lastMileStone(){
        this.setState({lastMileStoneModal:!this.state.lastMileStoneModal});
        this.props.actions.nextMileStoneBegin(this.state.mileStoneId).then(
        ).catch(
            err=>{
                throw (err)
            })
    }

    ////
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
            this.setState({downloadFile: true, mileStoneId: id, priceForCashIn:priceForCashIn})
        }
        else{
            this.setState({ mileStoneId: id})
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
        this.setState({loading:true});
        this.props.actions.sendUploadedFileByFreelancerAction(sendData).then(
            () => this.loading
        ).catch(
            err=>{
                throw (err);
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
          <Modal isOpen={this.state.lastMileStoneModal} toggle={this.lastMileStoneModalToggle}>
              <ModalBody >
                  شما پول این بازه را قبلا پرداخت کرده اید، برای دریافت فایل خود بر روی تایید کلیک نمایید.
              </ModalBody>
              <ModalFooter>
                  <button className="btn btn-rec btn-primary" onClick={this.lastMileStone}>تایید</button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalForErrors}>
              <ModalBody>
                  خطا در اتصال به سرور، لطفا اتصال به اینترنت خود را بررسی کنید
              </ModalBody>
          </Modal>
          <Modal isOpen={this.state.finalModalForCanceling} toggle={this.toggleOkCanceling}>
              <ModalBody>
                  پروژه ی شما لغو شد، در صورت عدم صحیح پروژه وجه شما تا ۴۸ ساعت آینده به حسابتان واریز می گردد
              </ModalBody>
              <ModalFooter>
                  <button className="btn btn-rec btn-primary" onClick={this.toggleOkCanceling}>باشه</button>
              </ModalFooter>
          </Modal>
          <Modal isOpen={this.state.modalCancelProject} toggle={this.modalCancelProjectToggle}>
              <ModalBody>
                  آیا برای لغو پروژه اطمینان دارید؟
                  در صورت لغو پروژه درصورت دریافت فایل بازه ای که انجام شده است، اگر که صحیح انجام شده باشد، به فریلنسر شما پرداخته می شود.
                  در غیر این صورت وجه شما بازگردانده می شود.
              </ModalBody>
              <ModalFooter>
                  <button className="btn btn-rec btn-primary" onClick={this.cancelProjectSendToServer}>لغو پروژه</button>
                  <button className="btn btn-rec btn-secondary" onClick={this.modalCancelProjectToggle}>می خواهم ادامه دهم</button>

              </ModalFooter>
          </Modal>
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
                  <button aria-hidden="true" className="btn btn-rec btn-primary" onClick={this.toggleDonate}>راضی نبودم</button>
                </div>
                <div className="col-sm-5"></div>
                <div className="col-sm-2 mb-1">
                  <button className="btn btn-rec btn-primary" onClick={this.goToCashInForDonate}>واریز</button>
                  {this.state.showErrorForDonate?<Errors message={this.state.message}/>:(null)}
                </div>
              </div>
          </Modal>
          <Modal isOpen={this.state.downloadFile} toggle={this.toggle}>
              <ModalBody >
                    <span className="form-header-fontsize">برای دانلود فایل خود باید ابتدا وجه مایل استون بعدی را بپردازید</span>
              </ModalBody>
        <button className="btn btn-rec btn-primary col-sm-2" onClick={this.okAndCheckBalanceInModal}>باشه</button>
          </Modal>
          <Modal isOpen={this.state.dontHaveEnoughCash} toggle={this.toggle2}>
              <ModalBody>شما وجه کافی ندارید، برای پرداخت وجه بر روی کلیک کنید</ModalBody>
              <button className="btn btn-rec btn-primary col-sm-3" onClick={this.goToCashIn} >پرداخت وجه</button>
          </Modal>
          <Modal isOpen={this.state.haveEnoughCash} toggle={this.toggle3}>
              <ModalBody className="from-header-fontsize">
                <div>شما دارای وجه کافی می باشید</div>
                <div>برای مشاهده فایل، بازنگری آنها و شروع مرحله بعد تأیید کنید تا مبلغ {this.state.priceForCashIn*1000} تومان از حساب شما کاسته شود</div>
                <div>اگر از کار راضی نبودید با لغو همکاری بعد از بررسی و داوری توسط ویش ورک، در صورت فقدان کیفیت ، مبلغ شما طی ۴۸ ساعت آینده به حساب شما واریز می شود</div>
              </ModalBody>
                <button className="btn btn-rec btn-primary col-sm-3" onClick={this.nextMileStoneBegin}>تایید</button>
          </Modal>
              <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-8 d-block">
                      <div className="dash-con dash-new-project con-body mb-4">
                          <h5 className="form-title-fontsize">کنترل پروژه</h5>
                          <div className="dash-divider"/>
                          <label className="col-form-label form-header-fontsize">زمان بندی پروژه شما</label>
                          {this.state.loadSuccess? <MileStones
                                      loading={this.state.loading}
                                      anvaeBaze={this.state.anvaeBaze}
                                      mohlateErsal={this.state.mohlateErsal}
                                      mohlateBazNegari={this.state.mohlateBazNegari}
                                      laghv={this.state.laghv}
                                      bishtar={this.state.bishtar}
                                      onClickAnvaeBaze={this.onClickAnvaeBaze}
                                      onClickMohlateErsal={this.onClickMohlateErsal}
                                      onClickMohlateBazNegari={this.onClickMohlateBazNegari}
                                      onClickLaghv={this.onClickLaghv}
                                      onClickBishtar={this.onClickBishtar}
                                      goToSubmitProject={this.goToSubmitProject}
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
                                      modalCancelProject={this.modalCancelProject}
                                      toPersianNum={this.toPersianNum}
                                      setIdForCanceling={this.setIdForCanceling}

                          />:(null)}
                      </div>
                  </div>
                  <div className="col-sm-4 contacts-section">
                      {this.state.loadSuccess? <ProjectsList
                          cancelIdProject={this.state.cancelIdProject}
                          AsClientProject={this.state.AsClientProject}
                          AsFreelancerProject={this.state.AsFreelancerProject}
                          changeView={this.changeView}
                          activeProjectList={this.state.activeProjectList}
                          numberSee={this.state.numberSee}
                          setIdForCanceling={this.setIdForCanceling}
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
