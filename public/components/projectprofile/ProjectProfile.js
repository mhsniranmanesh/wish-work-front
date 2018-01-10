import React from 'react';
import ProjectDetail from './ProjectDetail'
import AddBid from './AddBid'
import BidsList from './BidsList';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {Bids} from '../../actions/Bids';
import * as projectActions from '../../actions/projectDetail';
import Button from './Button';

class ProjectProfile extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        projectDetail: "",
        amountOfMileStones: 0,
        Length: 0,
        bid_description: '',
        bid_price: '',
        ModalState: 'modal',
        showError: false,
        profileInfo: Object.assign({}, props.profileInfo),
        isLoggedIn: false,
        delivery_duration: '',
        ownerOfProject: false,
        showBidsList: false,
        priceForCash: "",
        validPrice: false,
        validTime: false,
        cashinModalState: false,
      };

      // delivery_duration: Array [ "This field is required." ]
      // number_of_milestones: Array [ "This field is required." ]
      // price: Array [ "This field is required." ]
      this.valueOfMileStones = this.valueOfMileStones.bind(this);
      this.CheckLength = this.CheckLength.bind(this);
      this.BidPrice = this.BidPrice.bind(this);
      this.DeliveryTime = this.DeliveryTime.bind(this);
      this.BidDescription = this.BidDescription.bind(this);
      this.ModalSubmit = this.ModalSubmit.bind(this);
      this.FinalSubmitBid = this.FinalSubmitBid.bind(this);
      this.size = this.size.bind(this);
      this.clicksubmit = this.clicksubmit.bind(this);
      this.goToCash = this.goToCash.bind(this);
      this.validateBidAmount = this.validateBidAmount.bind(this);
      this.persianToEnglish = this.persianToEnglish.bind(this);
      this.roundBidAmount = this.roundBidAmount.bind(this);
      this.validateDeliveryTime = this.validateDeliveryTime.bind(this);
      this.DeliveryTime = this.DeliveryTime.bind(this);
      this.roundDeliveryTime = this.roundDeliveryTime.bind(this);
      this.modalCashEnough = this.modalCashEnough.bind(this);
      this.returnFalse = this.returnFalse.bind(this)
    }
    returnFalse(e){
      e.preventDefault();
      return false
    }
    modalCashEnough(){
      this.setState({
        cashinModalState: !this.state.cashinModalState,
      });
    }

    persianToEnglish(value){
      var newValue = "";
      for(var i=0; i<value.length; i++){
        var char = value.charCodeAt(i);
        if(char >= 1776 && char <= 1785){ //for persian digits
          var newChar = char - 1728;
          newValue = newValue + String.fromCharCode(newChar);
        }
        else if(char >= 1632 && char <= 1641){ // for arabic and unix digits
          var newChar = char - 1584;
          newValue = newValue + String.fromCharCode(newChar);
        }
        else{
          newValue = newValue + String.fromCharCode(char);
        }
      }
      return newValue;
    }
  /////////////////////////////////////////////////////////////////////////////////////////////////////
     validateBidAmount(price){
      const pr = /^\d+$/;
      return pr.test(price);
    }

    validateDeliveryTime(time){
      const tm = /^\d+$/;
      return tm.test(time);
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////


    goToCash(y) {
      //this.setState({priceForCash : x});
      //console.log(y, 'y');
      let price = y.toString();
      // console.log(price, 'this is price');
      // console.log(this.state.priceForCash, 'price of freelancer');
      //console.log(bid_price , 'bid_price')
      this.context.router.history.push({
        pathname: '/account/cash',
        search: price
      });
    }
    clicksubmit() {
      this.setState({
        showError: false,
        ModalState: 'modal'
      });
      alert('your bid submit')
    }
    FinalSubmitBid() {
      this.state.Length = Number(this.state.Length);
      // console.log('this.state.projectDetail.uuid', this.state.projectDetail.uuid);
      // console.log(this.state.projectDetail, 'complete project detail')
      var sendData = {
        project_id: this.state.projectDetail.uuid,
        number_of_milestones: this.state.Length,
        price: this.state.bid_price,
        delivery_duration: this.state.delivery_duration,
        has_default_bid_controller: false,
      };
      this.props.actions.addBidToProject(sendData)
        .then(
          () => this.clicksubmit())
        .catch(err => {
          console.log(err)
        })
    }

    ModalSubmit() {
      if (this.state.bid_description === '') {
        this.setState({
          showError: true,
          message: "توضیحی در رابطه با پیشنهاد خود بدهید، این بخش برای مشتری بسیار تاثیر گذار است"
        });
      } else if (this.state.bid_price === '') {
        this.setState({
          showError: true,
          message: "لطفا قیمت پیشنهادی خود را ارائه دهید."
        });
      }
      else if(this.state.bid_price !=='' && !this.state.validPrice){
        this.setState({
          showError: true,
          message: "لطفا مبلغ خود را به عدد وارد کنید"
        });
      }
        else if (this.state.delivery_duration ===''){
          this.setState({
          showError: true,
          message: "لطفا زمان پیشنهادی خود را مشخص کنید"
        });
        }
        else if(this.state.delivery_duration !=='' && !this.state.validTime){
          this.setState({
            showError: true,
            message: "لطفا زمان پیشنهادی را به عدد وارد کنید"
          });
        }
       else if (this.state.Length < 2) {
        this.setState({
          showError: true,
          message: "لطفا تعداد بازه های زمانی را بیشتر از ۲ انتخاب کنید!"
        });
      } else {
        this.state.bid_price = Number(this.state.bid_price);
        this.state.delivery_duration = Number(this.state.delivery_duration);
        this.FinalSubmitBid()
      }
    }

    BidDescription(event) {
      this.setState({
        bid_description: event.target.value
      })
    }


/////////////////////////////////////////////////////////////////////////////////////////////////
    BidPrice(event) {
      let price = event.target.value;
      price = this.persianToEnglish(price);
      const trueOrFalsePriceValid = this.validateBidAmount(price);
      this.setState({
        bid_price: price , validPrice: trueOrFalsePriceValid
      })

    }

    roundBidAmount(event){
      let numb = Number(this.state.bid_price);
      numb = (Math.ceil(numb));
      const trueOrFalsePriceValid2 = this.validateBidAmount(numb);

      if(isNaN(numb)){
        numb = '';
      }
      event.target.value = numb;
      this.setState({bid_price: numb , validPrice: trueOrFalsePriceValid2})

    }
////////////////////////////////////////////////////////////////////////////////////////////////////
    DeliveryTime(event) {
      let time = event.target.value;
      time = this.persianToEnglish(time);
      const trueOrFalseTimeValid = this.validateDeliveryTime(time);
      this.setState({
        delivery_duration: time , validTime: trueOrFalseTimeValid
      });
    }

    roundDeliveryTime(event){
      let numb = Number(this.state.delivery_duration);
      numb = (Math.ceil(numb));
      const trueOrFalseTimeValid2 = this.validateDeliveryTime(numb);
      if(isNaN(numb)){
        numb = '';
      }
      event.target.value = numb;
      this.setState({
        delivery_duration: numb , validTime: trueOrFalseTimeValid2
      });
    }

//////////////////////////////////////////////////////////////////////////////////////////////

    CheckLength() {
      if (this.state.amountOfMileStones < 2) {
        this.setState({
          showError: true,
          message: "لطفا تعداد بازه های زمانی را بیشتر از ۲ انتخاب کنید!"
        });
      } else if (this.state.amountOfMileStones > 4) {
        this.setState({
          showError: true,
          message: "تعداد بازه های زمانی نباید بیشتر از ۴ باشد."
        });
      } else {

        this.setState({
          showError: false,
          Length: this.state.amountOfMileStones
        });
      }
    }

    valueOfMileStones(event) {
      this.setState({
        amountOfMileStones: event.target.value
      })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.Length != this.state.Length){
    //         return 1
    //     }
    // }
    size(obj) {
      let x = 0,
        key;
      for (key in obj) {
        if (obj.hasOwnProperty(key)) x++;
      }
      return x;
    };

    componentWillMount() {
      //console.log('this.props:', this.props.location.pathname.slice(10));

      this.props.actions.projectDetail(this.props.location.pathname.slice(10));
    }

    componentWillReceiveProps(nextProps) {
      var sizeD = this.size(nextProps.projectDetail);
      if (this.props.projectDetail[sizeD - 1] != nextProps.projectDetail[sizeD - 1]) {
        // console.log(nextProps.profileDetail);
        // console.log(sizeD, 'sizeD');
        //inja az halate bler dar biad
        this.setState({
          projectDetail: Object.assign({}, nextProps.projectDetail[sizeD - 1])
        });
        this.setState({
          showBidsList: true
        });
        if (this.props.profileInfo.username == nextProps.projectDetail[sizeD - 1].client) {
          console.log('profileInfo.username', this.props.profileInfo.username, 'projectDetail.client', nextProps.projectDetail[sizeD - 1].client);
          this.setState({
            ownerOfProject: true
          });
          this.setState({
            isLoggedIn: true
          });
          // console.log(this.state.ownerOfProject);
        }
        this.setState({
          projectDetail: Object.assign({}, nextProps.projectDetail[sizeD - 1])
        });
      }
      if (this.props.profileInfo != nextProps.profileInfo) {
        this.setState({
          profileInfo: Object.assign({}, nextProps.profileInfo)
        });
        this.setState({
              isLoggedIn: true
        });
        if (sizeD > 0) {
          if (nextProps.profileInfo.username == this.props.projectDetail[sizeD - 1].client) {
            this.setState({
              isLoggedIn: true
            });
            this.setState({
              ownerOfProject: true
            });
          }

        }


      }
    }

    componentDidMount() {}

    render() {
      return (
        <section className = "profile" >
        <div className = "container" >
        <div className = "row" >
        <div className = "col-sm-8" >
        <ProjectDetail Detail = {
          this.state.projectDetail
        }/>
        <div className = "con mb-4" > {
          this.state.showBidsList ? <BidsList isLoggedIn = {
            this.state.isLoggedIn
          }
          ownerOfProject = {
            this.state.ownerOfProject
          }
          Bids = {
            this.state.projectDetail.project_bids
          }
          priceForCash = {
            this.state.priceForCash
          }
          goToCash = {
            this.goToCash
          }
          cashinModalState={
            this.state.cashinModalState
          }
          modalCashEnough={
            this.modalCashEnough
          }/>
          : null}
        </div>
          </div>
                {this.state.ownerOfProject ?
                    <Button
                        myFunc=""
                        name="hi"
                        budget={
                            this.state.projectDetail.budget
                        }
                        TimeLimit={
                            this.state.projectDetail.time_limit
                        }
                    />
                    :
                    <AddBid
                        returnFalse={this.returnFalse}
                        isLoggedIn={this.state.isLoggedIn}
                        TimeLimit={
                            this.state.projectDetail.time_limit
                        }
                        amountOfMileStones={
                            this.state.amountOfMileStones
                        }
                        valueOfMileStones={
                            this.valueOfMileStones
                        }
                        Length={
                            this.state.Length
                        }
                        CheckLength={
                            this.CheckLength
                        }
                        ModalState={
                            this.state.ModalState
                        }
                        BidDescription={
                            this.BidDescription
                        }
                        BidPrice={
                            this.BidPrice
                        }
                        roundBidAmount={
                            this.roundBidAmount
                        }
                        DeliveryTime={
                            this.DeliveryTime
                        }
                        roundDeliveryTime={
                            this.roundDeliveryTime
                        }
                        ModalSubmit={
                            this.ModalSubmit
                        }
                        message={
                            this.state.message
                        }
                        showError={
                            this.state.showError
                        }
                        budget={
                            this.state.projectDetail.budget
                        }
                        delivery_duration={
                            this.state.delivery_duration
                        }/>
            }

        </div>
      </div>
    </section>
        )
      }
    }


    ProjectProfile.contextTypes = {
      router: PropTypes.object.isRequired
    };

    ProjectProfile.PropTypes = {
      actions: PropTypes.object.isRequired,
      projectActions: PropTypes.array.isRequired,
    };

    function mapStateToProps(state, ownProps) {
      const projectSlug = ownProps.location.pathname.slice(10); // from the path `/projects/:id`
      console.log('ownProps', projectSlug);
      return {
        projectDetail: state.projectDetail,
        profileInfo: state.profileInfo
      }
    }

    function mapDispatchToProps(dispatch) {
      return {
        actions: bindActionCreators(projectActions, dispatch)
      }
    }

export default connect(mapStateToProps , mapDispatchToProps)(ProjectProfile);
