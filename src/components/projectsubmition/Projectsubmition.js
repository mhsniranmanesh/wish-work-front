 import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/projectSubmit.js';
import Error from './Errors';
import {Button , Modal , ModalHeader , ModalBody , ModalFooter , Row , Col , Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import Select from 'react-select';

const STATIC_DATAS = require('../../Datas/STATIC_DATAS.js');



class Projectsubmition extends React.Component{

    constructor(props , contextc){
        super(props);

        this.state= {
            value: undefined,
            options: [{value: 'R', label: 'Red'}, {value: 'G', label: 'Green'}, {value: 'B', label: 'Blue'} ,
                {value: 'Q', label: 'YELLOW'}],
            multiValue: [],
            multi: true,
            translationFatherTag: false,
            modal: false,
            is_general: false,
            is_medical: false,
            is_technical: false,
            is_law: false,
            translationFrom: "",
            from_language:"",
            to_language:"",
            translationTo: "",
            title: "",
            description: "",
            budget: "",
            pageNumber: "",
            auctionTime: "",
            time_limit: "",
            requiredTags: [],
            response: [],
            message: "",
            showError: false,
            validPrice: false,
            validTime: false,
            validPage: false,
            validAuction: false,
            validAuctionLimit: false,
            type: 0,
            category: 0,
            bid_duration:0,
            field:"",
            popoverOpenPrice: false,
            popoverOpenTime: false,
            popoverOpenShow: false,
            popoverOpenDesc: false,
            number_of_pages : 0,
        };
        //this.state.translationTo = this.props.dashProjectSubmit.translationTo;
        //this.state.translationFrom = this.props.dashProjectSubmit.translationFrom;

        this.togglePopoverSubject = this.togglePopoverSubject.bind(this);

        this.togglePopoverPrice = this.togglePopoverPrice.bind(this);
        this.togglePopoverTime = this.togglePopoverTime.bind(this);
        this.togglePopoverShow = this.togglePopoverShow.bind(this);
        this.togglePopoverDesc = this.togglePopoverDesc.bind(this);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.roundProjectAuctionTime = this.roundProjectAuctionTime.bind(this);
        this.roundProjectPrice =this.roundProjectPrice.bind(this);
        this.roundProjectPage = this.roundProjectPage.bind(this);
        this.roundProjectTime = this.roundProjectTime.bind(this);
        this.IsLaw = this.IsLaw.bind(this);
        this.IsMedical = this.IsMedical.bind(this);
        this.IsTechnical = this.IsTechnical.bind(this);
        this.IsGeneral = this.IsGeneral.bind(this);
        this.updateValueTF = this.updateValueTF.bind(this);
        this.toggle = this.toggle.bind(this);
        this.updateValueTT = this.updateValueTT.bind(this);
        // this.translationToState = this.translationToState.bind(this);
        // this.translationFromState = this.translationFromState.bind(this);
        this.projectTitleState = this.projectTitleState.bind(this);
        this.projectDescriptionState = this.projectDescriptionState.bind(this);
        this.submitProjectTimeState = this.submitProjectTimeState.bind(this);
        this.submitProjectPriceState = this.submitProjectPriceState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dragDrop = this.dragDrop.bind(this);
        this.submit = this.submit.bind(this);
        this.validatePrice = this.validatePrice.bind(this);
        this.validateAuction = this.validateAuction.bind(this);
        this.validateTime = this.validateTime.bind(this);
        this.persianToEnglish = this.persianToEnglish.bind(this);
        this.submitProjectPageState = this.submitProjectPageState.bind(this);
        this.submitProjectAuctionState = this.submitProjectAuctionState.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    togglePopoverPrice() {
    this.setState({
      popoverOpenPrice: !this.state.popoverOpenPrice,
      popoverOpenTime: false,
      popoverOpenShow: false,
      popoverOpenDesc: false,
      PopoverOpenSubject: false,

    });
  }

  togglePopoverShow() {
  this.setState({
    popoverOpenShow: !this.state.popoverOpenShow,
    popoverOpenPrice: false,
    popoverOpenTime: false,
    popoverOpenDesc: false,
    PopoverOpenSubject: false,

    });
  }

  togglePopoverDesc() {
  this.setState({
    popoverOpenDesc: !this.state.popoverOpenDesc,
    popoverOpenPrice: false,
    popoverOpenTime: false,
    popoverOpenShow: false,
    PopoverOpenSubject: false,

    });
  }
  togglePopoverTime() {
  this.setState({
    popoverOpenTime: !this.state.popoverOpenTime,
    popoverOpenPrice: false,
    popoverOpenShow: false,
    popoverOpenDesc: false,
    PopoverOpenSubject: false,

    });
  }
  togglePopoverSubject(){
    this.setState({
      popoverOpenSubject: !this.state.popoverOpenSubject,
      popoverOpenPrice: false,
      popoverOpenShow: false,
      popoverOpenDesc: false,
      popoverOpenTime: false,

      });
  }



    persianToEnglish(value) {
        var newValue = "";
        for (var i = 0; i < value.length; i++) {
            var ch = value.charCodeAt(i);
            if (ch >= 1776 && ch <= 1785) // For Persian digits.
            {
                var newChar = ch - 1728;
                newValue = newValue + String.fromCharCode(newChar);
            } else if (ch >= 1632 && ch <= 1641) // For Arabic & Unix digits.
            {
                var newChar = ch - 1584;
                newValue = newValue + String.fromCharCode(newChar);
            } else
                newValue = newValue + String.fromCharCode(ch);
        }
        return newValue;
    }
    redirect(){
        this.context.router.history.push('/dashboard');
    }

    handleOnChange (value) {
  		const { multi } = this.state;
  		this.setState({ multiValue: value });
  	}
    submit(){
        console.log('from_language' , this.state.from_language);
        console.log('this.state.translationFrom' , this.state.translationFrom);
        console.log('STATE IS:' , this.state);
            this.props.actions.projectSubmit(this.state , this.state).then(
            () => this.redirect()
            ).catch(error => {
            console.log(error);
        });
        alert('your project submited');
    }

    IsTechnical(){
            this.setState({is_technical: true , is_general : false , is_law: false , is_medical: false , translationFatherTag : true , field: STATIC_DATAS.PROJECT_SKILLS_TAG.TECHNICAL});

    }

    IsGeneral(){
        this.setState({is_general: true , is_technical: false , is_medical: false , is_law: false , translationFatherTag : true , field: STATIC_DATAS.PROJECT_SKILLS_TAG.GENERAL});
    }

    IsMedical(){
            this.setState({is_general: false , is_technical: false , is_medical: true , is_law: false , translationFatherTag : true , field: STATIC_DATAS.PROJECT_SKILLS_TAG.MEDICAL});
    }

    IsLaw(){
            this.setState({is_general: false , is_technical: false , is_medical: false , is_law: true , translationFatherTag : true , field: STATIC_DATAS.PROJECT_SKILLS_TAG.LEGAL});

    }

    validatePrice(price){
        const pr = /^\d+$/ ;
        return pr.test(price) ;
    }
    validateTime(time){
        const tm = /^\d+$/;
        return tm.test(time);
    }
    validatePage(page){
      const pg = /^\d+$/;
      return pg.test(page);
    }
    validateAuction(aucTime){
      const aucT = /^\d+$/;
      return aucT.test(aucTime);

    }

    componentWillMount(){
       // console.log('this.props.location.search.length' , this.props.location.search.length);
        if(this.props.location.search.length === 6){
            if(this.props.location.search[1] === '1'){
                this.state.translationFrom = 1;
            }
            if(this.props.location.search[1] === '2') {
                this.state.translationFrom = 2;
            }
            if(this.props.location.search[1] === '3') {
                this.state.translationFrom = 3;

            }
            if(this.props.location.search[1] === '4') {
                this.state.translationFrom = 4;

            }
            if(this.props.location.search[1] === '5') {
                this.state.translationFrom = 5;
            }
            if(this.props.location.search[1] === '6') {
                this.state.translationFrom = 6;
            }
            if(this.props.location.search[3] === '1'){
                this.state.translationTo = 1;
            }
            if(this.props.location.search[3] === '2') {
                this.state.translationTo = 2;
            }
            if(this.props.location.search[3] === '3') {
                this.state.translationTo = 3;

            }
            if(this.props.location.search[3] === '4') {
                this.state.translationTo = 4;

            }
            if(this.props.location.search[3] === '5') {
                this.state.translationTo = 5;
            }
            if(this.props.location.search[3] === '6') {
                this.state.translationTo = 6;
            }
            if(this.props.location.search[5] === '1'){
                this.state.is_general = true ;
                this.state.is_law = false ;
                this.state.is_medical = false;
                this.state.is_technical = false;
                this.state.translationFatherTag = true ;
                this.state.field = 1;
            }
            if(this.props.location.search[5] === '2'){
                this.state.is_general = false ;
                this.state.is_law = true ;
                this.state.is_medical = false;
                this.state.is_technical = false;
                this.state.translationFatherTag = true;
                this.state.field = 2 ;
            }
            if(this.props.location.search[5] === '3'){
                this.state.is_general = false ;
                this.state.is_law = false ;
                this.state.is_medical = true;
                this.state.is_technical = false;
                this.state.translationFatherTag = true;
                this.state.field = 3 ;
            }
            if(this.props.location.search[5] === '4'){
                this.state.is_general = false ;
                this.state.is_law = false ;
                this.state.is_medical = false;
                this.state.is_technical = true;
                this.state.translationFatherTag = true;
                this.state.field = 4;
            }
        }
        if (this.props.location.search.length === 4){
            if(this.props.location.search[3] === '1'){
                this.state.is_general = true ;
                this.state.is_law = false ;
                this.state.is_medical = false;
                this.state.is_technical = false;
                this.state.translationFatherTag = true ;
                this.state.field = 1;
            }
            if(this.props.location.search[3] === '2'){
                this.state.is_general = false ;
                this.state.is_law = true ;
                this.state.is_medical = false;
                this.state.is_technical = false;
                this.state.translationFatherTag = true;
                this.state.field = 2 ;
            }
            if(this.props.location.search[3] === '3'){
                this.state.is_general = false ;
                this.state.is_law = false ;
                this.state.is_medical = true;
                this.state.is_technical = false;
                this.state.translationFatherTag = true;
                this.state.field = 3 ;
            }
            if(this.props.location.search[3] === '4'){
                this.state.is_general = false ;
                this.state.is_law = false ;
                this.state.is_medical = false;
                this.state.is_technical = true;
                this.state.translationFatherTag = true;
                this.state.field = 4;
            }
        }
    }
    updateValueTT (newValue) {
        console.log(this.props);
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
    toggle(){
      this.setState({
      modal: !this.state.modal
      });
    }
    dragDrop(event){
        const data = new FormData();
        // data.append('file', event.target.files[0]);
        // data.append('name', 'some value user types');
        // data.append('description', 'some value user types');
        console.log(event.target.files[0]);
    }


    projectDescriptionState(event){
        this.setState({description: event.target.value,popoverOpenTime: false, popoverOpenPrice: false,  popoverOpenShow: false,  popoverOpenDesc: false, popoverOpenSubject: false,});
    }
    submitProjectTimeState(event){
        let time = event.target.value;
        time = this.persianToEnglish(time);
        const trueOrFalseTimeValid = this.validateTime(time);
        this.setState({time_limit: event.target.value , validTime: trueOrFalseTimeValid,   popoverOpenTime: false, popoverOpenPrice: false,  popoverOpenShow: false,  popoverOpenDesc: false, popoverOpenSubject: false,});
        //console.log('state:' ,this.state);
        //console.log('length:' , this.state.translationFatherTag.length);
    }


    submitProjectAuctionState(event){
      let auction = event.target.value;
      const trueOrFalseAuctionValid = this.validateAuction(auction);
      this.setState({auctionTime: event.target.value , validAuction: trueOrFalseAuctionValid})
    }


    submitProjectPageState(event){

      let page = event.target.value;
      const trueOrFalsePageValid = this.validatePage(page);
      this.setState({pageNumber: event.target.value , validPage: trueOrFalsePageValid  })

    }


    submitProjectPriceState(event){
        let price = event.target.value;
        price = this.persianToEnglish(price);
        const trueOrFalsePriceValid = this.validatePrice(price);

        this.setState({budget: price , validPrice : trueOrFalsePriceValid,   popoverOpenTime: false, popoverOpenPrice: false,  popoverOpenShow: false,  popoverOpenDesc: false, popoverOpenSubject: false,})
    }
    projectTitleState(event){
        this.setState({title: event.target.value,   popoverOpenTime: false, popoverOpenPrice: false,  popoverOpenShow: false,  popoverOpenDesc: false, popoverOpenSubject: false,});
    }
    roundProjectPrice(event){
        let numb = Number(event.target.value);
        const trueOrFalsePriceValid2 = this.validatePrice(numb);

        if(numb % 10000 !== 0 ) {
            numb = (Math.round(numb/10000) * 10000);
            event.target.value = numb;
        }
        if(isNaN(numb)){
            numb = "";
        }
        this.setState({budget: numb , validPrice : trueOrFalsePriceValid2})

    }

    roundProjectAuctionTime(event){
      let numb = Number(event.target.value);
      numb = (Math.ceil(numb));
      const trueOrFalseAuctionValid2 = this.validateAuction(numb);



      if(isNaN(numb)){
          numb = "";
      }
      else if( (numb>=2) && (numb<=7) ){
        this.setState({ validAuctionLimit: true })
      }
      else{
        this.setState({ validAuctionLimit: false })

      }

      event.target.value = numb;
      this.setState({auctionTime: numb , validAuction: trueOrFalseAuctionValid2});
    }



    roundProjectPage(event){
      let numb = Number(event.target.value);
      numb = (Math.ceil(numb));
      const trueOrFalsePageValid2 = this.validatePage(numb);

      if(isNaN(numb)){
          numb = "";
      }

      event.target.value = numb;
      this.setState({pageNumber: numb, validPage : trueOrFalsePageValid2});

    }



    roundProjectTime(event){

        let numb = Number(event.target.value);
        const trueOrFalseTimeValid2 = this.validateTime(numb);
        numb = Math.round(numb);
        if(isNaN(numb)){
            numb = "";
        }
        this.setState({time_limit: numb , validTime: trueOrFalseTimeValid2,});
    }




    handleSubmit(event){
        console.log(this.state.field);
        event.preventDefault();
        if(!this.state.title.length){
            this.setState({showError: true});
            this.setState({message:"لطفا عنوان پروژه ی خود را وارد کنید!"});
        }
        else if(!this.state.translationFatherTag){
            //farghesh ba this.state = hamun moghe avaz mikone!
            this.setState({showError : true});
            this.setState({message:"لطفا زمینه ی ترجمه ی خود را وارد کنید!"});
        }
        else if(!this.state.translationFrom || this.state.translationFrom === null){
            this.setState({showError: true});
            //console.log(this.state.translationFrom);
            this.setState({message:"لطفا زبان مبدا ترجمه ی خود را مشخص کنید."})
        }
        else if((!this.state.translationTo) || this.state.translationTo === null ){
            this.setState({showError: true});
            this.setState({message:"لطفا زبان مقصد خود را مشخص کنید"})
        }
        else if((this.state.translationTo===this.state.translationFrom) && (this.state.translationTo !== "")){
            this.setState({showError: true});
            this.setState({message:"لطفا زبان مبدا و مقصد خود را متفاوت مشخص کنید"})

        }
        else if(!this.state.description.length){
            this.setState({showError: true});
            this.setState({message:"لطفا توضیحاتی در رابطه با پروژه ی خود ارائه دهید."});
        }

        else if(!this.state.validPrice && this.state.budget === ""){
            this.setState({showError: true});
            this.setState({message:"لطفا مبلغ خود را وارد کنید"})
        }
        else if(!this.state.validPrice){
            this.setState({showError: true});
            this.setState({message:"لطفا مبلغ خود را صحیح وارد کنید"})
        }
        else if(!this.state.validTime && this.state.time_limit === ""){
            //console.log('this.state.validTime' , this.state.validTime , 'this.state.time_limit' , this.state.time_limit);
            this.setState({showError: true});
            this.setState({message:"لطفا زمان وارد کنید"})

        }
         else if(!this.state.validTime){
             this.setState({showError: true});
             this.setState({message:"لطفا زمان خود را صحیح وارد کنید"})
         }
         else if(!this.state.validPage && this.state.pageNumber ===""){
             this.setState({showError: true});
             this.setState({message:"لطفا تعداد صفحات ترجمه خود را وارد کنید"})
         }
         else if(!this.state.validPage){
           this.setState({showError: true});
           this.setState({message:"لطفا برای تعداد صفحات عدد صحیح وارد کنید"})
         }
         else if(!this.state.validAuction && this.state.auctionTime ===""){
             this.setState({showError: true});
             this.setState({message:"لطفا زمان مناقصه را مشخص کنید"})
         }
         else if(!this.state.validAuctionLimit && this.state.auctionTime !==""){
           this.setState({showError: true});
           this.setState({message:"لطفا زمان مناقصه را بین ۲ تا ۷ روز انتخاب کنید"})
         }
        else {
            // this.setState({});
            this.setState({showError: false, type : STATIC_DATAS.TYPE.NORMAL ,category : STATIC_DATAS.CATEGORY.TRANSLATION ,  modal: !this.state.modal});
            this.setState({from_language: this.state.translationFrom});
            this.setState({to_language: this.state.translationTo});
            this.setState({number_of_pages: this.state.pageNumber});
            this.setState({bid_duration: this.state.auctionTime});
            // this.setState({field : this.state.translationFatherTag})
            // this.setState({
            //     modal: !this.state.modal
            // });
        }

        // else if(!this.state.translationTo.length){
        //     this.setState({showError: true});
        //     this
        // }
        //this.porps.actions.submitProject(this.state);
        // if(this.state.response){
        // this.context.router.history.push('/')
        //}
        //else if(this.state.response === "sth"){
        //error show
    }


  render(){
        //console.log(this.props.location.search[0]);
        //const showError = this.state.translationFatherTagError ;
        // const showErrorProjectTitle = this.state.projectTitleError;
        var options1 = STATIC_DATAS.AVAILABLETOLANGUAGES;
        var options2 = STATIC_DATAS.AVAILABLEFROMLANGUAGES;
       // const emailRegex = /^\S+@\S+\.\S+$/;
       //  const { multi, multiValue, options, value } = this.state;


      const showError = this.state.showError;
    return(
      <div>
      <div className="content-wrapper py-3">
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-6 d-block mx-auto">
                  <div className="dash-con dash-new-project con-body mb-4">
                      <h5 className="form-title-fontsize">ایجاد پروژه جدید</h5>
                      <errorFatherTag/>
                      <div className="dash-divider"/>
                      <form>
                        <div className="form-group">
                          <legend className="form-header-fontsize"> عنوان پروژه را مشخص کنید. </legend>
                          <input type="text" className="form-control" id="subject" placeholder="عنوان پروژه" value={this.state.title} onChange={this.projectTitleState} onFocus={this.togglePopoverSubject}/>
                          <Popover placement="right" isOpen={this.state.popoverOpenSubject} target="subject" toggle={this.togglePopoverSubject}>
                            <PopoverBody className="beauty-text popover-beauty">عنوان پروژه بخش مهمی از کیفیت پیشنهادهای شما را تعیین می کند. محدودیت برای عنوان پروژه شما 200 حرف است. </PopoverBody>
                          </Popover>

                        </div>
                        <div className="input-group">
                              <legend className="form-header-fontsize">زمینه ترجمه تان را انتخاب کنید.</legend>
                                <Row className= "fields">
                                  <Col>
                                    <label>
                                      <input className="btn-radio" type="radio" name="rb" id="rb1" onChange={this.IsGeneral} checked={this.state.is_general}/>
                                        <span htmlFor="rb1" className="radio-text form-body-fontsize">عمومی</span>
                                    </label>
                                </Col>
                                <Col>
                                  <label>
                                    <input className="btn-radio" type="radio" name="rb" id="rb2" onChange={this.IsTechnical} checked={this.state.is_technical}/>
                                    <span htmlFor="rb2" className="radio-text form-body-fontsize">فنی</span>
                                </label>
                                </Col>
                              </Row>
                                <Row className="fields">
                                  <Col>
                                    <label>
                                      <input className="btn-radio" type="radio" name="rb" id="rb3" onChange={this.IsMedical} checked={this.state.is_medical}/>
                                      <span htmlFor="rb3" className="radio-text form-body-fontsize">پزشکی</span>
                                    </label>
                                </Col>
                                <Col>
                                  <label>
                                    <input className="btn-radio" type="radio" name="rb" id="rb4" onChange={this.IsLaw} checked={this.state.is_law}/>
                                    <span htmlFor="rb4" className="radio-text form-body-fontsize">حقوقی</span>
                                  </label>
                                </Col>
                                </Row>
                        </div>

                        <div>
                        <legend className="form-header-fontsize"> زبان مبد‌ا و مقصد را مشخص کنید. </legend>
                        <Row>
                          <Col>
                              <div className="section">
                                  <Select
                                    className="customPicker form-body-fontsize"
                                    ref="fromLanguage"
                                    placeholder="از زبان ..."
                                    options={options1}
                                    simpleValue
                                    clearable
                                    name="select-language"
                                    value={this.state.translationFrom}
                                    onChange={this.updateValueTF}
                                    labelKey="name"
                                    valueKey="index"
                                  />
                              </div>
                            </Col>
                            <Col>
                                  <Select
                                    placeholder="به زبان ..."
                                    className="customPicker form-body-fontsize"
                                    ref="toLanguage"
                                    options={options2}
                                    simpleValue
                                    clearable
                                    name="select-language"
                                    value={this.state.translationTo}
                                    onChange={this.updateValueTT}
                                    labelKey="name"
                                    valueKey="index"
                                  />
                          </Col>
                        </Row>
                        </div>

                        <div className="form-group drag-drop mt-2 mb-4 ">
                            <label className="form-header-fontsize">فایل های مربوط به پروژه را آپلود کنید.</label>
                            <label className="container form-control-file " htmlFor="inputFile">
                        </label>
                                <input type="file" className="form-control-box form-body-fontsize" id="inputFile" onChange={this.dragDrop} data-title="فایل را بگیرید و اینجا رها کنید." multiple="" accept=
                                "application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*"/>

                        </div>

                      <Row className="page-auction">
                        <Col>

                          <legend htmlFor="" className="col-form-label form-header-fontsize">
                                <span className="form-header-fontsize">تعداد صفحات پروژه خود را مشخص کنید</span>

                          </legend>

                          <input type="text" className="form-control form-body-fontsize" id="pageInput" value={this.state.pageNumber} onChange={this.submitProjectPageState} onBlur={this.roundProjectPage}/>

                        </Col>
                        <Col>
                          <legend htmlFor="" className="col-form-label form-header-fontsize">

                                  <span className="form-header-fontsize">مدت برقراری مناقصه را مشخص کنید</span>

                          </legend>

                          <input type="text" className="form-control form-body-fontsize" id="auctionInput" value={this.state.auctionTime} onChange={this.submitProjectAuctionState} onBlur={this.roundProjectAuctionTime}/>
                          </Col>
                      </Row>


                        <legend className="form-header-fontsize">
                          <span>در مورد پروژه خود توضیح دهید.</span>

                        </legend>
                        <div className="form-group">
                          <textarea type="text" className="form-control form-body-fontsize" id="Popover4" placeholder="توضیحاتی را در مورد پروژه بنویسید." value={this.state.description} onChange={this.projectDescriptionState} onFocus={this.togglePopoverDesc}/>
                          <Popover placement="right" isOpen={this.state.popoverOpenDesc} target="Popover4" toggle={this.togglePopoverDesc}>
                            <PopoverBody className="beauty-text popover-beauty"> شما می توانید نمونه ای از ترجمه مورد نظرتان را در این بخش وارد کنید</PopoverBody>
                          </Popover>
                        </div>
                        <div className="form-group">
                      {/*
                          <div className="section form-body-fontsize">
                            <Select.Creatable
                              placeholder='مهارتهای لازم فریلنسر'
                    					multi={multi}
                    					options={options}
                    					onChange={this.handleOnChange}
                    					value={multi ? multiValue : value}
                              onClick={() => this.setState({ multi: true })}
                    				/>
                            <div className="hint">{this.props.hint}</div>

                          </div>


                          <button type="submit" className="btn btn-success btn-rec">
                            <i className="fa fa-plus"/>افزودن مهارت
                          </button>
                          <span className="sub-heading mt-2">
                            <a className="tag" href="#">علمی</a>
                            <a className="tag" href="#">زیست شناسی</a>
                            <a className="tag" href="#">میکرو بیولوژی</a>
                            <a className="tag" href="#">فوری</a>
                            <a className="tag" href="#">علمی</a>
                            <a className="tag" href="#">زیست شناسی</a>
                            <a className="tag" href="#">میکرو بیولوژی</a>
                          </span>
                          */}
                        </div>



                        <div className="form-group">
                          <legend htmlFor="" className="col-form-label form-header-fontsize">
                                <span className="form-header-fontsize">بودجه ی خود را مشخص کنید.</span>

                          </legend>



                          <input type="text" className="form-control form-body-fontsize" id="priceInput" value={this.state.budget} onChange={this.submitProjectPriceState} onBlur={this.roundProjectPrice} onFocus={this.togglePopoverPrice}/>
                          <Popover placement="right" isOpen={this.state.popoverOpenPrice} target="priceInput" toggle={this.togglePopoverPrice}>
                            <PopoverBody className="beauty-text popover-beauty">قیمت مورد نظرتان را به تومان وارد کنید </PopoverBody>
                          </Popover>


                          <div id="price-range" style={{display:"none"}}/>
                          <span className="price-msg">
                              <i className="fa fa-exclamation-triangle" aria-hidden="true" />
                              نارنجی: بودجه تعیین شده به نسبت ارزش پروژه کمتر است! ویش ورک پیشنهاد می کند که برای بالا بردن شانس انجام پروژه ی با کیفیت، کف بودجه را افزایش دهید.
                          </span>
                        </div>
                        <div className="form-group">
                          <legend htmlFor="" className="col-form-label">


                            <span className="form-header-fontsize">  زمان دلخواه خود را مشخص کنید. </span>


                          </legend>
                          <input type="text" className="form-control form-body-fontsize" id="timeInput" value={this.state.time_limit} onChange={this.submitProjectTimeState} onBlur={this.roundProjectTime} onFocus={this.togglePopoverTime} />
                          <Popover placement="right" isOpen={this.state.popoverOpenTime} target="timeInput" toggle={this.togglePopoverTime}>
                            <PopoverBody className="beauty-text popover-beauty">زمان مورد نظرتان را به روز وارد کنید </PopoverBody>
                          </Popover>

                          <div id="time-range"/>
                          <span className="time-msg">
                              <i className="fa fa-exclamation-triangle" aria-hidden="true"/>
                              آبی: مقدار زمان طلب شده به نسبت اندازه ی پروژه مطلوب می باشد!
                          </span>
                        </div>

                          {showError ? <Error message={this.state.message}/> : (true)}
                          <div>
                            <Button color="primary" className = "btn btn-rec btn-primary" onClick={this.handleSubmit}>ایجاد پروژه</Button>
                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>


                              <ModalHeader toggle={this.toggle}>
                                  <span className="form-title-fontsize">  نحوه نمایش پروژه</span>
                                  <span>

                                    <Popover placement="right" isOpen={this.state.popoverOpenShow} target="Popover3" toggle={this.togglePopoverShow}>
                                      <PopoverBody className="beauty-text">پروژه شما به شکل زیر برای فریلنسرها نمایش داده می شود. رنگ بالا نمایانگر قیمت و رنگ پایین نشان دهنده زمان انتخابی شماست. </PopoverBody>
                                    </Popover>
                                  </span>
                              </ModalHeader>


                              <ModalBody>
                                {/*}<span className="prices">
                                  <div>
                                    <svg width="5px" height="8vh">
                                      <rect className="price-good" width="5px" height="8vh" />
                                    </svg>
                                  </div>
                                  <div>
                                    <svg width="5px" height="8vh">
                                      <rect className="price-low" width="5px" height="8vh"/>
                                    </svg>
                                  </div>
                                </span>*/}
                                <div>
                                    <a href="#">
                                        <h6 className="form-header-fontsize"><strong>{this.state.title}</strong></h6>
                                    </a>
                                    {/*<span className="sub-heading">
                                        <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                                        <a className="tag" href="#">#علمی</a>
                                        <a className="tag" href="#">#زیست_شناسی</a>
                                        <a className="tag" href="#">#میکرو_بیولوژی</a>
                                        <a className="tag" href="#">#فوری</a>
                                      </span>*/}
                                    <span className="sub-heading">
                                          <i className="fa fa-user form-body-fontsize" style={{paddingLeft:'2px'}}/>4/5
                                          <i className="fa fa-usd form-body-fontsize" style={{marginRight:'10px', paddingLeft:'2px'}}/> {this.state.budget}
                                          <i className="fa fa-clock-o form-body-fontsize" style={{marginRight:'10px' , paddingLeft:'2px'}}/>{this.state.time_limit}
                                      </span>
                                </div>
                              </ModalBody>
                              <ModalFooter>
                                <Button color="secondary" className = "btn btn-secondary btn-rec" onClick={this.toggle}>اصلاح</Button>
                                <Button color="primary" className = "btn btn-primary btn-rec" onClick={this.submit}>تأیید</Button>{' '}
                              </ModalFooter>
                            </Modal>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
      </div>
        );
    }
}


Projectsubmition.contextTypes = {
    router: PropTypes.object.isRequired
};

Projectsubmition.PropTypes = {
    actions : PropTypes.object.isRequired,
    projectActions : PropTypes.array.isRequired,
    // dashProjectSubmit : PropTypes.func.isRequired
    hint: PropTypes.string,
    label: PropTypes.string
};

function mapStateToProps(state , ownProps){
    return {

    };
}
function mapDispatchToProps(dispatch){
    return {
            actions: bindActionCreators(projectActions, dispatch)
    };
}

export default connect(mapStateToProps , mapDispatchToProps)(Projectsubmition);
