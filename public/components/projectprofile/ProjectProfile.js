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
import {Modal , ModalHeader, ModalBody} from 'reactstrap';
import Progress from 'react-progressbar'

class ProjectProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectDetail: "",
            amountOfMileStones: 0,
            Length: 0,
            bid_description: '',
            bid_price: '',
            ModalState: '',
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
            addBidModalForFreelancer:false
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

        var sendData = {
            description: this.state.bid_description,
            project_id: this.state.projectDetail.uuid,
            number_of_milestones: this.state.Length,
            price: (this.state.bid_price/1000),
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
                console.log(err)
            });

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
                message: "لطفا تعداد بازه های زمانی را بیشتر از ۱ انتخاب کنید!"
            });
        }
        else if(this.state.amountOfMileStones > 4){
            this.setState({
                showError: true,
                message: "لطفا تعداد بازه های زمانی را  کمتر از ۴ انتخاب کنید!"
            });
        }
        else if (this.state.Length < 1) {
            this.setState({
                showError: true,
                message: "لطفا تعداد بازه های زمانی را بیشتر از ۱ انتخاب کنید!"
            });
        }
        else if(this.state.Length > 4){
            this.setState({
                showError: true,
                message: "لطفا تعداد بازه های زمانی را  کمتر از ۴ انتخاب کنید!"
            });
        }
        else if((((this.state.delivery_duration -2)/this.state.amountOfMileStones ) <4) && (this.state.delivery_duration<7)){
            this.setState({showWarnings:true,
                message: "فعلا نمیتوان پیشنهاد زیر ۷ روز را به ثبت رساند"
            })
        }
        else {
            this.state.bid_price = Number(this.state.bid_price);
            this.setState({ModalState: 'modal'});
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
            bid_price: price, validPrice: trueOrFalsePriceValid
        })

    }

    roundBidAmount(event) {
        let numb = Number(this.state.bid_price);
        numb = (Math.ceil(numb));
        const trueOrFalsePriceValid2 = this.validateBidAmount(numb);

        if (isNaN(numb)) {
            numb = '';
        }
        event.target.value = numb;
        this.setState({bid_price: numb, validPrice: trueOrFalsePriceValid2})

    }

////////////////////////////////////////////////////////////////////////////////////////////////////
    DeliveryTime(event) {
        let time = event.target.value;
        time = this.persianToEnglish(time);
        const trueOrFalseTimeValid = this.validateDeliveryTime(time);
        this.setState({
            delivery_duration: time, validTime: trueOrFalseTimeValid
        });
    }

    roundDeliveryTime(event) {
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

//////////////////////////////////////////////////////////////////////////////////////////////

    CheckLength() {
        if(this.state.delivery_duration === ''){
            this.setState({
                showError: true,
                message: "لطفا ابتدا زمان پیشنهادی خود را انتخاب کنید!"
            });
        }
        else if (this.state.amountOfMileStones < 1) {
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
                message: "فاصله ی بین بازه های زمانی باید بیشتر از ۴ روز باشد!(دو روز مهلت اعمال تغییرات است.)"
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
        this.context.router.history.push('/signup');
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
        if (this.state.loading) {
            clearInterval(this.state.intervalId);
        }
        // var x= this.size()
        // if()
        // this.setState({})
        this.props.actions.projectDetail(this.props.location.pathname.slice(10));
        var sIze = this.size(this.props.projectDetail);
        if(sIze>0 && this.props.profileInfo.username) {
            for (var i = 0; i < this.props.projectDetail[sIze-1].general.project_bids.length; i++) {
                // console.log(props.this.state.projectDetail.project_bids[i].username , 'props.Bids[i].username' , props.profileInfo.username , 'props.profileInfo.username');
                if (this.props.projectDetail[sIze-1].general.project_bids[i].freelancer.username === this.props.profileInfo.username) {
                    this.setState({userHasBid:true});
                    this.setState({isLoggedIn:true});
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
                        this.setState({userHasBid: true})
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
                            this.setState({userHasBid: true})
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
        setTimeout( () => {
            var i = this.state.progressNumber + 20;
                                                                        //  call a 3s setTimeout when the loop is called
            this.setState({progressNumber: this.state.progressNumber +20});
                      console.log(this.state.progressNumber , 'progressNumber');                                                          //  increment the counter
            if (this.state.progressNumber < 100) {                                                      //  if the counter < 100, call the loop function
                this.progressNumber();                                           //  ..  again which will trigger another
            }                        //  ..  setTimeout()
        }, 7000)
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
                                <Modal
                                    isOpen={this.state.freelancerIsSelected && (!this.state.projectDetail.is_started) && this.state.modalAcceptOrReject}>
                                    <ModalBody>تبریک! شما برای این پروژه انتخاب شده اید. برای تایید برروی «تایید» کلیک
                                        کنید</ModalBody>
                                    <button onClick={this.acceptBidFromFreelancer}> تایید</button>
                                    <button onClick={this.rejectBidFromFreelancer}>انصراف</button>
                                </Modal>
                                <Modal isOpen={(!this.state.modalAcceptOrReject) && (this.state.toggleSecondModal)}>
                                    <ModalBody>{this.state.modalCM}</ModalBody>
                                    <button onClick={this.toggleSecondModal}>باشه</button>
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
                                        />
                                        <Button
                                            myFunc=""
                                            name="hi"
                                            is_freelancer_selected={this.state.projectDetail.is_freelancer_selected}
                                            budget={
                                                this.state.projectDetail.budget
                                            }
                                            TimeLimit={
                                                this.state.projectDetail.time_limit
                                            }
                                            release_date={this.state.projectDetail.release_date}

                                        />
                                    </div>
                                    :
                                    <div>
                                        <CountDown
                                            release_date={this.state.projectDetail.release_date}
                                            BidDuration={this.state.projectDetail.bid_duration}
                                            bidding_deadline={this.state.projectDetail.bidding_deadline}
                                        />
                                        <AddBid
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
                                                this.state.projectDetail.budget
                                            }
                                            delivery_duration={
                                                this.state.delivery_duration
                                            }
                                            release_date={this.state.projectDetail.release_date}
                                            signUp={this.SignUp}
                                            Bids={this.state.projectDetail.project_bids}
                                            start_date={this.state.projectDetail.start_date}
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
        else {
            return (
                <div></div>
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
