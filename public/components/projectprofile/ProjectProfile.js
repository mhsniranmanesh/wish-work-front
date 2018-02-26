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
import CountDown from './CountDown';
import {Modal , ModalHeader, ModalBody , ModalFooter} from 'reactstrap';
import Progress from 'react-progressbar'
import Errors from "./Errors";

class ProjectProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectDetail: "",
            amountOfMileStones: '',
            Length: 0,
            bid_description: '',
            bid_price: '',
            ModalState: '',
            notFoundPage:false,
            showError: false,
            showWarnings: false,
            profileInfo: Object.assign({}, props.profileInfo),
            isLoggedIn: false,
            delivery_duration: '',
            ownerOfProject: false,
            showBidsList: false,
            priceForCash: "",
            validPrice: false,
            validTime: false,
            time:"",
            cashinModalState: false,
            projectAdditional: "",
            progressNumber: 10,
            loading: false,
            intervalId: 0,
            userHasBid: false,
            freelancerIsSelected: false,
            isStartedModal:true,
            modalAcceptOrReject:true,
            toggleSecondModal:true,
            modalCM :"",
            notVerified:true,
            addBidModalForFreelancer:false,
            MLNumberForModal:0,
            myTime:0,
            myPrice:0,
            isMounted:false,
            ErrorModal:false,
            ErrorMsgModal: "",
            stateForMileStone1:false,
            stateForMileStone2:false,
            stateForMileStone3:false,
            stateForMileStone4:false,
            DisableMileStone1:true,
            DisableMileStone2:true,
            DisableMileStone3:true,
            DisableMileStone4:true,
            ClassMileStone1:" radio-disabled form-body-fontsize",
            ClassMileStone2:" radio-disabled form-body-fontsize",
            ClassMileStone3:" radio-disabled form-body-fontsize",
            ClassMileStone4:" radio-disabled form-body-fontsize",
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
        this.returnFalse = this.returnFalse.bind(this);
        this.deleteBid = this.deleteBid.bind(this);
        this.goToRegister = this.goToRegister.bind(this);
        this.SignUp = this.SignUp.bind(this);
        this.acceptBid = this.acceptBid.bind(this);
        this.goToFreelancerProfile = this.goToFreelancerProfile.bind(this);
        this.redirect = this.redirect.bind(this);
        this.progressNumber = this.progressNumber.bind(this);
        this.acceptBidFromFreelancer =this.acceptBidFromFreelancer.bind(this);
        this.rejectBidFromFreelancer = this.rejectBidFromFreelancer.bind(this);
        this.toggle = this.toggle.bind(this);
        this.ModalAccept = this.ModalAccept.bind(this);
        this.ModalError = this.ModalError.bind(this);
        this.ModalReject = this.ModalReject.bind(this);
        this.toggleSecondModal = this.toggleSecondModal.bind(this);
        this.toggleNotVerify = this.toggleNotVerify.bind(this);
        this.addBidModalForFreelancerShow = this.addBidModalForFreelancerShow.bind(this);
        this.toggleBid = this.toggleBid.bind(this);
        //this.counter = this.counter.bind(this);
        this.toPersianNum = this.toPersianNum.bind(this);
        this.is1MileStone = this.is1MileStone.bind(this);
        this.is2MileStone = this.is2MileStone.bind(this);
        this.is3MileStone = this.is3MileStone.bind(this);
        this.is4MileStone = this.is4MileStone.bind(this);
    }
    is1MileStone(){
        this.setState({ ModalState: 'modal',amountOfMileStones: 1 , stateForMileStone1:true ,stateForMileStone2:false , stateForMileStone3:false , stateForMileStone4:false })
    }
    is2MileStone(){
        this.setState({ModalState: 'modal',amountOfMileStones: 2 , stateForMileStone1:false ,stateForMileStone2:true , stateForMileStone3:false , stateForMileStone4:false })
    }
    is3MileStone(){
        this.setState({ModalState: 'modal',amountOfMileStones: 3 , stateForMileStone1:false ,stateForMileStone2:false , stateForMileStone3:true , stateForMileStone4:false })
    }
    is4MileStone(){
        this.setState({ModalState: 'modal',amountOfMileStones: 4 , stateForMileStone1:false ,stateForMileStone2:false , stateForMileStone3:false , stateForMileStone4:true })
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
    toggleBid(){
        this.setState({addBidModalForFreelancer : !this.state.addBidModalForFreelancer})
    }
    addBidModalForFreelancerShow(){
        this.setState({addBidModalForFreelancer: true})
    }
    toggleNotVerify(){
        this.setState({
            notVerified : !this.state.notVerified
        })
    }
    toggleSecondModal(){
        this.setState({toggleSecondModal: false})
    }
    ModalReject(){
        this.setState({modalAcceptOrReject:false});
        this.setState({modalCM: "پیشنهاد شما کنسل شد، ۱۰ ویش کوین بابت انصراف از شما کم شد"})
    }
    ModalError(){
        this.setState({ErrorModal: !this.state.ErrorModal})
    }
    ModalAccept(){
        this.setState({modalAcceptOrReject:false});
        this.setState({modalCM:"پروژه ی شما شروع شد، برای دسترسی به پروژه در قسمت داشبورد خود در قسمت پروژه بر روی کنترل پروژه کلیک کنید."})
    }
    toggle(){
        this.setState({
            isStartedModal: !this.state.isStartedModal
        });
    }
    acceptBidFromFreelancer(){
        this.props.actions.acceptBidFromFreelancer(this.state.projectDetail.uuid).then(
            () => this.ModalAccept()
        ).catch(err =>{
            this.ModalError()
        })
    }

    rejectBidFromFreelancer(){
        this.props.actions.rejectBidFromFreelancer(this.state.projectDetail.uuid).then(
            () => this.ModalReject()
        ).catch(err =>{
            this.ModalError()
        })

    }
    goToFreelancerProfile(slug) {
        this.context.router.history.push({
            pathname: '/profiles/' + slug,
        });
    }

    redirect() {
        let newState = Object.assign({} , this.state);
        newState.projectDetail.is_freelancer_selected = true;
        this.setState({newState});
        alert('شما فریلنسر خود را انتخاب کردید منتظر تایید او باشید');
    }

    deleteBid(x) {
        console.log('x', x);
        this.props.actions.deleteBid(x).then(
            console.log('Delete')
        ).catch(err => {
            console.log(err)
        })
    }

    acceptBid(id) {
        this.props.actions.selectBid(id).then(
            () => this.redirect()
        ).catch(err => {
                console.log(err)
            })
    }

    returnFalse(e) {
        e.preventDefault();
        return false
    }

    modalCashEnough() {
        this.setState({
            cashinModalState: !this.state.cashinModalState,
        });
    }

    persianToEnglish(value) {
        var newValue = "";
        for (var i = 0; i < value.length; i++) {
            var char = value.charCodeAt(i);
            if (char >= 1776 && char <= 1785) { //for persian digits
                var newChar = char - 1728;
                newValue = newValue + String.fromCharCode(newChar);
            }
            else if (char >= 1632 && char <= 1641) { // for arabic and unix digits
                var newChar = char - 1584;
                newValue = newValue + String.fromCharCode(newChar);
            }
            else {
                newValue = newValue + String.fromCharCode(char);
            }
        }
        return newValue;
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    validateBidAmount(price) {
        const pr = /^\d+$/;
        return pr.test(price);
    }

    validateDeliveryTime(time) {
        const tm = /^\d+$/;
        return tm.test(time);
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//TODO mahdudiate kalame dar pishnahade gheymat, ghesmate tozihat

    goToCash(y) {
        //this.setState({priceForCash : x});
        //console.log(y, 'y');
        let price = y.toString();
        // console.log(price, 'this is price');
        // console.log(this.state.priceForCash, 'price of freelancer');
        //console.log(bid_price , 'bid_price')
        // this.context.router.history.push({
        //     pathname: '/account/cash',
        //     search: price
        // });
        window.location.assign('http://wishworkstage.ir/account/cash/?' + price);
        // window.location.assign('http://wishwork.ir/account/cash/?' + price)
    }

    goToRegister() {
        this.context.router.history.push({
            pathname: '/account/cash'
        });
    }

    clicksubmit() {
        this.setState({
            progressNumber: 100,
            showError: false,
            ModalState: 'modal',
            loading: false
        });

    }

    FinalSubmitBid() {
        this.state.Length = Number(this.state.Length);
        // console.log('this.state.projectDetail.uuid', this.state.projectDetail.uuid);
        // console.log(this.state.projectDetail, 'complete project detail')
        var bid_price = Math.ceil(this.state.bid_price/1000);
        var sendData = {
            description: this.state.bid_description,
            project_id: this.state.projectDetail.uuid,
            number_of_milestones: this.state.amountOfMileStones,
            price: bid_price,
            delivery_duration: this.state.delivery_duration,
            has_default_bid_controller: false,
        };
        this.setState({loading: true});
        this.props.actions.addBidToProject(sendData)
            .then(
                () => this.progressNumber()).then(
            () => this.clicksubmit()
        )
            .catch(err => {
                this.setState({loading:false , ErrorModal:true , ErrorMsgModal:"خطا در اتصال ، مجددا تلاش کنید."});
            });

    }

    ModalSubmit() {
        if (this.state.bid_description === '') {
            this.setState({
                showError: true,
                message: "توضیحی در رابطه با پیشنهاد خود بدهید، این بخش برای مشتری بسیار تاثیر گذار است"
            });
        }
        else if(this.state.delivery_duration < 0){
            this.setState({
                showError: true,
                message: "لطفا زمان پیشنهادی خود را بیشتر از صفر وارد کنید"
            });

        }
        else if (this.state.bid_price === '') {
            this.setState({
                showError: true,
                message: "لطفا قیمت پیشنهادی خود را ارائه دهید."
            });
        }
        else if (this.state.bid_price < 1000) {
            this.setState({
                showError: true,
                message: "لطفا قیمت پیشنهادی خود را بیشتر از ۱۰۰۰ وارد نمایید"
            });
        }
        else if (this.state.bid_price !== '' && !this.state.validPrice) {
            this.setState({
                showError: true,
                message: "لطفا مبلغ خود را به عدد وارد کنید"
            });
        }
        else if (this.state.delivery_duration === '') {
            this.setState({
                showError: true,
                message: "لطفا زمان پیشنهادی خود را مشخص کنید"
            });
        }
        else if (this.state.delivery_duration !== '' && !this.state.validTime) {
            this.setState({
                showError: true,
                message: "لطفا زمان پیشنهادی را به عدد وارد کنید"
            });
        }
        else if(((this.state.delivery_duration - 2)/this.state.amountOfMileStones ) <4){
            this.setState({
                showError: true,
                message: "فاصله ی بین بازه های زمانی باید بیشتر از ۴ روز باشد!(دو روز مهلت اعمال تغییرات است.)"
            });
        }
        else if (((this.state.delivery_duration - 2)/this.state.Length ) <4){
            this.setState({
                showError: true,
                message: "فاصله ی بین بازه های زمانی باید بیشتر از ۴ روز باشد!(دو روز مهلت اعمال تغییرات است.)"
            });
        }
        else if (this.state.amountOfMileStones < 1) {
            this.setState({
                showError: true,
                message: "لطفا تعداد بازه های زمانی را بیشتر از صفر انتخاب کنید!"
            });
        }
        else if(this.state.amountOfMileStones > 4){
            this.setState({
                showError: true,
                message: "لطفا تعداد بازه های زمانی را  کمتر از ۴ انتخاب کنید!"
            });
        }
        // else if (this.state.Length < 1) {
        //     this.setState({
        //         showError: true,
        //         message: "لطفا تعداد بازه های زمانی را بیشتر از ۱ انتخاب کنید!"
        //     });
        // }
        // else if(this.state.Length > 4){
        //     this.setState({
        //         showError: true,
        //         message: "لطفا تعداد بازه های زمانی را  کمتر از ۴ انتخاب کنید!"
        //     });
        // }
        // else if((((this.state.delivery_duration -2)/this.state.amountOfMileStones ) <4) && (this.state.delivery_duration<7)){
        //     this.setState({showWarnings:true,
        //         message: "فعلا نمیتوان پیشنهاد زیر ۷ روز را به ثبت رساند"
        //     })
        // }
        else {
            this.state.bid_price = Number(this.state.bid_price);
            this.state.delivery_duration = Number(this.state.delivery_duration);
            this.FinalSubmitBid()
        }
        console.log(this.state.amountOfMileStones , 'this.state.amountOfMileStones === 2');
    }

    BidDescription(event) {
        this.setState({
            bid_description: event.target.value
        })
    }


/////////////////////////////////////////////////////////////////////////////////////////////////
    BidPrice(event) {
        if(event.target.value !== '') {
            let price = event.target.value;
            price = this.persianToEnglish(price);
            const trueOrFalsePriceValid = this.validateBidAmount(price);
            this.setState({
                bid_price: price, validPrice: trueOrFalsePriceValid
            })
        }
    }

    roundBidAmount(event) {
        if(event.target.value !== '') {
            let numb = Number((this.state.bid_price));
            numb = (Math.ceil(numb));
            const trueOrFalsePriceValid2 = this.validateBidAmount(numb);

            if (isNaN(numb)) {
                numb = '';
            }
            event.target.value = numb;
            this.setState({bid_price: numb, validPrice: trueOrFalsePriceValid2})
        }
    }

////////////////////////////////////////////////////////////////////////////////////////////////////
    DeliveryTime(event) {
        if(event.target.value !== '' || event.target.value !==0) {
            let time = event.target.value;
            time = this.persianToEnglish(time);
            const trueOrFalseTimeValid = this.validateDeliveryTime(time);
            if(event.target.value>0) {
                this.setState({DisableMileStone1: false, ClassMileStone1: "radio-text form-body-fontsize"});
                if (event.target.value > 9) {
                    this.setState({DisableMileStone2: false, ClassMileStone2: "radio-text form-body-fontsize" , ModalState: 'modal'});
                }
                else {
                    this.setState({DisableMileStone2: true, ModalState:'',
                        ClassMileStone2: " radio-disabled form-body-fontsize" , stateForMileStone2:false });
                    if(this.state.amountOfMileStones === 2){
                        this.setState({amountOfMileStones : ''});
                    }
                }
                if (event.target.value > 13) {
                    this.setState({DisableMileStone3: false, ClassMileStone3: "radio-text form-body-fontsize" , ModalState: 'modal'  })
                }
                else {
                    this.setState({DisableMileStone3: true, ModalState:'',
                        ClassMileStone3: " radio-disabled form-body-fontsize" , stateForMileStone3:false});
                    if(this.state.amountOfMileStones === 3){
                        this.setState({amountOfMileStones : ''});
                    }
                }
                if (event.target.value > 17) {
                    this.setState({DisableMileStone4: false, ClassMileStone4: "radio-text form-body-fontsize" , ModalState: 'modal'})
                }
                else {
                    this.setState({DisableMileStone4: true, ModalState:'',
                        ClassMileStone4: " radio-disabled form-body-fontsize" , stateForMileStone4:false});
                    if(this.state.amountOfMileStones === 4){
                        this.setState({amountOfMileStones : ''});
                    }
                }
            }
            else {
                this.setState({
                    stateForMileStone1:false,
                    stateForMileStone2:false,
                    stateForMileStone3:false,
                    stateForMileStone4:false,
                    DisableMileStone1:true,
                    DisableMileStone2:true,
                    DisableMileStone3:true,
                    DisableMileStone4:true,
                    ModalState:'',
                    ClassMileStone1:" radio-disabled form-body-fontsize",
                    ClassMileStone2:" radio-disabled form-body-fontsize",
                    ClassMileStone3:" radio-disabled form-body-fontsize",
                    ClassMileStone4:" radio-disabled form-body-fontsize",
                });
                if((this.state.amountOfMileStones === 2) || (this.state.amountOfMileStones === 3) ||
                    (this.state.amountOfMileStones === 1) || (this.state.amountOfMileStones === 4)){
                    this.setState({amountOfMileStones : ''});
                }
            }
            this.setState({
                delivery_duration: time, validTime: trueOrFalseTimeValid
            });
        }
    }

    roundDeliveryTime(event) {
        if(event.target.value !== '') {
            let numb = Number(this.state.delivery_duration);
            numb = (Math.ceil(numb));
            const trueOrFalseTimeValid2 = this.validateDeliveryTime(numb);
            if (isNaN(numb)) {
                numb = '';
            }
            event.target.value = numb;
            this.setState({
                delivery_duration: numb, validTime: trueOrFalseTimeValid2
            });
        }
    }

//////////////////////////////////////////////////////////////////////////////////////////////

    CheckLength() {
        if(this.state.delivery_duration === ''){
            this.setState({
                showError: true,
                message: "لطفا ابتدا زمان پیشنهادی خود را انتخاب کنید!"
            });
        }
        else if(this.state.amountOfMileStones === ''){
            this.setState({
                showError: true,
                message: "لطفا تعداد بازه های زمانی خود را مشخص نمایید!"
            });
        }
        else if (this.state.amountOfMileStones < 1) {
            console.log(typeof this.state.amountOfMileStones , 'this.state.amountOfMileStones');
            this.setState({
                showError: true,
                message: "لطفا تعداد بازه های زمانی را بیشتر از ۱ انتخاب کنید!"
            });
        }
        else if (this.state.amountOfMileStones > 4) {
            this.setState({
                showError: true,
                message: "تعداد بازه های زمانی نباید بیشتر از ۴ باشد."
            });
        }
        else if ((((this.state.delivery_duration -2)/this.state.amountOfMileStones ) <4) && (this.state.delivery_duration>=7)){
            this.setState({
                showError: true,
                message: "فاصله ی بین بازه های زمانی باید بیشتر از ۴ روز باشد!"
            });
        }
        else if((((this.state.delivery_duration -2)/this.state.amountOfMileStones ) <4) && (this.state.delivery_duration<7)){
                this.setState({showWarnings:true,
                               message: "فعلا نمیتوان پیشنهاد زیر ۷ روز را به ثبت رساند"
                })
        }
        else {
            this.setState({
                showError: false,
                Length: this.state.amountOfMileStones
            });
            this.setState({ModalState: 'modal'});
        }
    }

    SignUp(event) {
        event.preventDefault();
        // this.context.router.history.push('/signup');
        window.location.assign('http://wishworkstage.ir/signup');
        // window.location.assign('http://wishwork.ir/signup');
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
    componentDidMount() {
        var sIze = this.size(this.props.projectDetail);
        this.interval = setInterval(() => this.setState({time: Date.now()}), 1000);

        // if(sIze>0 && this.props.profileInfo.username) {
        // }
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    componentWillMount() {
        //console.log('this.props:', this.props.location.pathname.slice(10));

        // var x= this.size()
        // if()
        // this.setState({})
        // clearInterval(this.interval);
        var sIze = this.size(this.props.projectDetail);
        var profileSize = this.size(this.props.profileInfo);
        if(profileSize > 0){
            this.setState({isLoggedIn:true});
        }
        if(sIze === 0) {
            this.props.actions.projectDetail(this.props.location.pathname.slice(10)).then().catch(
                err=>{
                    if(err="Project Not Found"){
                        this.setState({notFoundPage : true})
                    }
                }
            );
        }
        if(sIze>0 && this.props.profileInfo.username) {
            this.setState({
                showBidsList: true
            });

            this.setState({
                projectDetail: Object.assign({}, this.props.projectDetail[sIze - 1].general)
            });
            this.setState({
                projectAdditional: Object.assign({}, this.props.projectDetail[sIze - 1].additional_info)
            });
            for (var i = 0; i < this.props.projectDetail[sIze-1].general.project_bids.length; i++) {
                // console.log(props.this.state.projectDetail.project_bids[i].username , 'props.Bids[i].username' , props.profileInfo.username , 'props.profileInfo.username');
                if (this.props.projectDetail[sIze-1].general.project_bids[i].freelancer.username === this.props.profileInfo.username) {
                    this.setState({userHasBid:true});
                    this.setState({isLoggedIn:true});
                    // this.setState({myPrice:this.props.projectDetail[sIze-1].general.project_bids[i].price});
                    // this.setState({myTime:this.props.projectDetail[sIze-1].general.project_bids[i].delivery_duration});
                    // this.setState({MLNumberForModal:this.props.projectDetai[sIze - 1].general.project_bids[i].number_of_milestones})
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        var sizeD = this.size(nextProps.projectDetail);
        if (this.props.projectDetail[sizeD - 1] != nextProps.projectDetail[sizeD - 1]) {
            // console.log(nextProps.profileDetail);
            // console.log(sizeD, 'sizeD');
            //inja az halate bler dar biad
            this.setState({
                projectDetail: Object.assign({}, nextProps.projectDetail[sizeD - 1].general)
            });
            this.setState({
                projectAdditional: Object.assign({}, nextProps.projectDetail[sizeD - 1].additional_info)
            });
            this.setState({
                showBidsList: true
            });
            if(nextProps.projectDetail[sizeD-1].general.project_bids.length>0) {
                for (var i = 0; i < nextProps.projectDetail[sizeD - 1].general.project_bids.length; i++) {
                    if (nextProps.projectDetail[sizeD - 1].general.project_bids[i].freelancer.username === this.props.profileInfo.username) {
                        this.setState({userHasBid: true});
                        this.setState({myPrice:nextProps.projectDetail[sizeD - 1].general.project_bids[i].price});
                        this.setState({myTime:nextProps.projectDetail[sizeD - 1].general.project_bids[i].delivery_duration});
                        this.setState({MLNumberForModal:nextProps.projectDetail[sizeD - 1].general.project_bids[i].number_of_milestones})
                    }
                    else {
                        this.setState({userHasBid: false})

                    }
                }
            }
            if(nextProps.projectDetail[sizeD-1].general.project_bids.length === 0){
                this.setState({userHasBid: false})

            }

            if (this.props.profileInfo.username == nextProps.projectDetail[sizeD - 1].general.client) {
                console.log('profileInfo.username', this.props.profileInfo.username, 'projectDetail.client', nextProps.projectDetail[sizeD - 1].general.client);
                this.setState({
                    ownerOfProject: true
                });
                this.setState({
                    isLoggedIn: true
                });
                // console.log(this.state.ownerOfProject);
            }
            if((this.props.profileInfo.username == nextProps.projectDetail[sizeD - 1].general.selected_freelancer) &&
                (nextProps.projectDetail[sizeD - 1].general.selected_freelancer!=null)){
                this.setState({
                    freelancerIsSelected:true
                })
            }
            this.setState({
                projectDetail: Object.assign({}, nextProps.projectDetail[sizeD - 1].general)
            });
            this.setState({
                projectAdditional: Object.assign({}, nextProps.projectDetail[sizeD - 1].additional_info)
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
                if(this.props.projectDetail[sizeD-1].general.project_bids.length >0) {
                    for (var y = 0; y < this.props.projectDetail[sizeD - 1].general.project_bids.length; y++) {
                        if (this.props.projectDetail[sizeD - 1].general.project_bids[y].freelancer.username === nextProps.profileInfo.username) {
                            this.setState({userHasBid: true});
                            this.setState({myPrice:this.props.projectDetail[sizeD - 1].general.project_bids[y].price});
                            this.setState({myTime:this.props.projectDetail[sizeD - 1].general.project_bids[y].delivery_duration});
                            this.setState({MLNumberForModal:this.props.projectDetail[sizeD - 1].general.project_bids[y].number_of_milestones})
                        }
                        else {
                            this.setState({userHasBid: false})
                        }
                    }
                }
                if(this.props.projectDetail[sizeD-1].general.project_bids.length === 0){
                    this.setState({userHasBid: false})

                }
                if (nextProps.profileInfo.username == this.props.projectDetail[sizeD - 1].general.client) {
                    this.setState({
                        isLoggedIn: true
                    });
                    this.setState({
                        ownerOfProject: true
                    });
                }
                if((nextProps.profileInfo.username == this.props.projectDetail[sizeD - 1].general.selected_freelancer) &&
                    (this.props.projectDetail[sizeD - 1].general.selected_freelancer!=null)){
                    this.setState({
                        freelancerIsSelected:true
                    })
                }

            }
        }
        // if(nextProps.projectDetail) {
        //     for (var i = 0; i < nextProps.projectDetail[sizeD-1].project_bids.length; i++) {
        //         // console.log(props.this.state.projectDetail.project_bids[i].username , 'props.Bids[i].username' , props.profileInfo.username , 'props.profileInfo.username');
        //         if (nextProps.projectDetail[sizeD - 1].project_bids[i].freelancer.username === this.props.profileInfo.username) {
        //             this.setState({userHasBid : true})
        //         }
        //     }
        // }
    }

    //
    // componentDidMount() {
    //     if(this.state.loading) {
    //         var intervalId = setInterval(this.progressNumber, 10000);
    //         this.setState({intervalId: intervalId});
    //     }
    // }
    progressNumber() {
        if(this.state.progressNumber > 10) {
            setTimeout(() => {
                var i = this.state.progressNumber + 20;
                //  call a 3s setTimeout when the loop is called
                this.setState({progressNumber: i});
                console.log(this.state.progressNumber, 'progressNumber');                                                          //  increment the counter
                if (this.state.progressNumber < 80) {                                                      //  if the counter < 100, call the loop function
                    this.progressNumber();                                           //  ..  again which will trigger another
                }                        //  ..  setTimeout()
            }, 2000)
        }
    }
    render() {
        if (this.state.showBidsList) {
            return (
                <section className="profile">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8">
                                {this.state.showBidsList ?
                                    <Modal isOpen={!this.state.projectDetail.is_verified && this.state.notVerified}
                                           toggle={this.toggleNotVerify}>
                                        <ModalBody>این پروژه هنوز به تایید نرسیده است، لطفا منتظر بمانید</ModalBody>
                                    </Modal> : (null)}
                                <Modal isOpen={this.state.loading}>
                                    <ModalHeader>لطفا منتظر بمانید</ModalHeader>
                                    <ModalBody>
                                        <Progress completed={this.state.progressNumber}/>
                                    </ModalBody>
                                </Modal>
                                <Modal isOpen={this.state.ErrorModal} toggle={this.ModalError}>
                                    <ModalBody>
                                        {this.state.ErrorMsgModal}
                                    </ModalBody>
                                    <ModalFooter>
                                        <button className="btn btn-rec btn-primary" onClick={this.ModalError}>باشه</button>
                                    </ModalFooter>
                                </Modal>
                                <Modal
                                    isOpen={this.state.freelancerIsSelected && (!this.state.projectDetail.is_started) && this.state.modalAcceptOrReject}>
                                    <ModalBody>تبریک! شما برای این پروژه انتخاب شده اید. برای تایید برروی «تایید» کلیک
                                        کنید
                                        <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {this.toPersianNum(this.state.myPrice * 1000)} تومان</div>
                                        <div className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {this.toPersianNum(this.state.myTime*1)} روز</div>
                                        <div className="not-inline"><i className="fa fa-font-awesome"/> <strong>تعداد بازه های تحویل:</strong> {this.toPersianNum(this.state.MLNumberForModal)} بازه</div>
                                        {/*<div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m}</div>*/}
                                        {/*<div className="not-inline"><i className="fa fa-book"/> تعداد صفحات: <strong> {this.toPersianNum(props.numberOfPages)}</strong></div>*/}
                                    </ModalBody>
                                    <ModalFooter>
                                    <button className="btn btn-rec btn-primary" onClick={this.acceptBidFromFreelancer}> تایید</button>
                                    <button className="btn btn-rec btn-secondary" onClick={this.rejectBidFromFreelancer}>انصراف</button>
                                    </ModalFooter>
                                </Modal>
                                <Modal isOpen={(!this.state.modalAcceptOrReject) && (this.state.toggleSecondModal)}>
                                    <ModalBody>{this.state.modalCM}</ModalBody>
                                    <ModalFooter>
                                    <button className="btn btn-rec btn-primary" onClick={this.toggleSecondModal}>باشه</button>
                                    </ModalFooter>
                                </Modal>
                                <Modal isOpen={this.state.projectDetail.is_started && this.state.isStartedModal}
                                       toggle={this.toggle}>
                                    <ModalBody>مناقصه ی این پروژه به پایان رسیده است</ModalBody>

                                </Modal>
                                {this.state.showBidsList ? <ProjectDetail
                                    Field={this.state.projectAdditional.field}
                                    FromLanguage={this.state.projectAdditional.from_language}
                                    ToLanguage={this.state.projectAdditional.to_language}
                                    Files={this.state.projectDetail.project_attachments}
                                    Detail={this.state.projectDetail}
                                /> : (null)}

                                <div className="con mb-4"> {
                                    this.state.showBidsList ? <BidsList
                                            toPersianNum={this.toPersianNum}
                                            numberOfPages={this.state.projectAdditional.number_of_pages}
                                            is_freelancer_selected={this.state.projectDetail.is_freelancer_selected}
                                            freelancerIsSelected={this.state.freelancerIsSelected}
                                            acceptBid={this.acceptBid}
                                            goToFreelancerProfile={this.goToFreelancerProfile}
                                            goToRegister={this.goToRegister
                                            }
                                            deleteBid={
                                                this.deleteBid
                                            }
                                            profileInfo={
                                                this.props.profileInfo
                                            }
                                            isLoggedIn={
                                                this.state.isLoggedIn
                                            }

                                            ownerOfProject={
                                                this.state.ownerOfProject
                                            }
                                            Bids={
                                                this.state.projectDetail.project_bids
                                            }
                                            priceForCash={
                                                this.state.priceForCash
                                            }
                                            goToCash={
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
                            <div className="col-sm-4">
                                {this.state.ownerOfProject ?
                                    <div>
                                        <CountDown release_date={this.state.projectDetail.release_date}
                                                   BidDuration={this.state.projectDetail.bid_duration}
                                                   bidding_deadline={this.state.projectDetail.bidding_deadline}
                                                   ownerOfProject={this.state.ownerOfProject}
                                                   toPersianNum={this.toPersianNum}

                                        />
                                        <Button

                                            myFunc=""
                                            name="hi"
                                            is_freelancer_selected={this.state.projectDetail.is_freelancer_selected}
                                            budget={
                                                (this.state.projectDetail.budget * 1000)
                                            }
                                            TimeLimit={
                                                this.state.projectDetail.time_limit
                                            }
                                            numberOfPages={this.state.projectAdditional.number_of_pages}
                                            release_date={this.state.projectDetail.release_date}
                                            toPersianNum={this.toPersianNum}


                                        />
                                    </div>
                                    :
                                    <div>
                                        <CountDown
                                            toPersianNum={this.toPersianNum}
                                            release_date={this.state.projectDetail.release_date}
                                            BidDuration={this.state.projectDetail.bid_duration}
                                            bidding_deadline={this.state.projectDetail.bidding_deadline}
                                            ownerOfProject={this.state.ownerOfProject}

                                        />
                                        <AddBid
                                            ClassMileStone1={this.state.ClassMileStone1}
                                            ClassMileStone2={this.state.ClassMileStone2}
                                            ClassMileStone3={this.state.ClassMileStone3}
                                            ClassMileStone4={this.state.ClassMileStone4}
                                            DisableMileStone1={this.state.DisableMileStone1}
                                            DisableMileStone2={this.state.DisableMileStone2}
                                            DisableMileStone3={this.state.DisableMileStone3}
                                            DisableMileStone4={this.state.DisableMileStone4}
                                            is1MileStone={this.is1MileStone}
                                            is2MileStone={this.is2MileStone}
                                            is3MileStone={this.is3MileStone}
                                            is4MileStone={this.is4MileStone}
                                            stateForMileStone1={this.state.stateForMileStone1}
                                            stateForMileStone2={this.state.stateForMileStone2}
                                            stateForMileStone3={this.state.stateForMileStone3}
                                            stateForMileStone4={this.state.stateForMileStone4}
                                            freelancerIsSelected={this.state.freelancerIsSelected}
                                            toPersianNum={this.toPersianNum}
                                            isVerified={this.state.projectDetail.is_verified }
                                            is_freelancer_selected={this.state.projectDetail.is_freelancer_selected}
                                            toggleBid={this.toggleBid}
                                            addBidModalForFreelancer={this.state.addBidModalForFreelancer}
                                            bidding_deadline={this.state.projectDetail.bidding_deadline}
                                            profileInfo={this.props.profileInfo}
                                            userHasBid={this.state.userHasBid}
                                            numberOfPages={this.state.projectAdditional.number_of_pages}
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
                                            showWarnings={
                                                this.state.showWarnings
                                            }
                                            showError={
                                                this.state.showError
                                            }
                                            budget={
                                                (this.state.projectDetail.budget * 1000)
                                            }
                                            delivery_duration={
                                                this.state.delivery_duration
                                            }
                                            release_date={this.state.projectDetail.release_date}
                                            signUp={this.SignUp}
                                            Bids={this.state.projectDetail.project_bids}
                                            start_date={this.state.projectDetail.start_date}
                                        />
                                        {this.state.showError ? <Errors message="پیشنهاد شما ثبت نشد! لطفا مجدد تلاش کنید"/>:(null)}

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        else if(this.state.notFoundPage){
            return (
                <section className="profile">
                    <div className="container">
                        <div className="row">
                                <div className="con mb-5 margin-auto-for-con">
                                <img src={require('../../../static/img/404wishwork.jpg')} className="image-size-not-found"/>
                                    <br/><br/>
                                <h5 className="not-found-title">پروژه ی مورد نظر یافت نشد!</h5>
                                </div>
                            </div>
                    </div>
                </section>
            )

        }
        else {
            return (
              <div>

              </div>
            )
        }
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
