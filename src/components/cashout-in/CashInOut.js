import React from 'react';
import CashIn from './CashIn';
import CashOut from './CashOut';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as profileInfo from '../../actions/profileInfo';
import Errors from './Error';
import Error from "../profileinfo/Error";
//import ChangeButton from './ChangeButton';

class CashOutIn extends React.Component{
    constructor(props){
        super(props);
        this.state={priceForCashIn:"" , showCashIn:true , priceForSend:"" ,
            priceForCashOut:"" , priceForWithdraw:"" , profileInfo:"" , showErrorForCashInOut:false  , message:"" , sheba:""};
        this.ChangeToCashIn = this.ChangeToCashIn.bind(this);
        this.ChangeToCashOut = this.ChangeToCashOut.bind(this);
        this.onChangeCashIn = this.onChangeCashIn.bind(this);
        this.onChangeCashOut = this.onChangeCashOut.bind(this);
        this.sendToServerCashInRequest = this.sendToServerCashInRequest.bind(this);
        this.sendToServerCashOutRequest = this.sendToServerCashOutRequest.bind(this);
        this.size = this.size.bind(this);
        this.redirectToPaymentPage = this.redirectToPaymentPage.bind(this);
        this.validatePrice = this.validatePrice.bind(this);
        this.onChangeSheba = this.onChangeSheba.bind(this);
        this.toPersianNum = this.toPersianNum.bind(this);
        this.persianToEnglish = this.persianToEnglish.bind(this);
        // this.roundChashOut = this.roundChashOut.bind(this);
    }
    // roundChashOut(event){
    //     let numb = Number(event.target.value);
    //     numb = (Math.ceil(numb));
    //     this.setState
    // }
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
    onChangeSheba(event){
        this.setState({sheba : event.target.value});
    }
    validatePrice(price){
        const pr = /^\d+$/ ;
        return pr.test(price) ;
    }
    size (obj) {
        let x = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) x++;
        }
        return x;
    };
    onChangeCashIn(event){
        this.setState({priceForCashIn : event.target.value});
        this.setState({priceForSend: event.target.value});
    }
    onChangeCashOut(event){
        this.setState({priceForCashOut: event.target.value});
        this.setState({priceForWithdraw: event.target.value});
    }
    ChangeToCashIn(){
      // console.log(this.state.showCashIn , "showCashin 1 State");
        this.setState({showCashIn: true});
        console.log(this.state.showCashIn, 'showCashin TorF')
        //console.log(this.state)
    }
    ChangeToCashOut(){
      // console.log(this.state.showCashIn , "showCashOut 3 State");
        this.setState({showCashIn: false});
        console.log(this.state.showCashIn , "showCashOut 4 State");
    }
    componentWillMount(){
        if(this.props.location.search){
            let cash = Number(this.props.location.search.slice(1)) * 1000;
            //console.log(cash , 'cash');
            this.setState({priceForCashIn : cash}) ;
            this.setState({priceForSend : cash});

        }
        var x = this.size(this.props.profileInfo);
        if(x>0){
            this.setState({profileInfo : this.props.profileInfo[x-1]})
        }
    }
    componentWillReceiveProps(nextProps){
        var Size = this.size(nextProps.profileInfo);
        if(this.props.profileInfo != nextProps.profileInfo) {
            this.setState({profileInfo: nextProps.profileInfo[Size - 1]})
        }
    }
    redirectToPaymentPage(){
        console.log(this.props.payLink);
        window.location.assign(this.props.payLink.payment_url);

    }
    sendToServerCashInRequest(){
        var validity = this.validatePrice(this.state.priceForSend);
        if(validity) {
            this.setState({priceForSend: this.state.priceForCashIn});
            this.setState({showErrorForCashInOut: false});
            this.props.actions.transActionPerform(this.state.priceForSend * 10).then(
                () => {
                    this.redirectToPaymentPage()
                }
            ).catch(err => {
                throw (err)
            });
            console.log(this.state);
        }
        else {
            this.setState({showErrorForCashInOut: true});
            this.setState({message: "لطفا مبلغ خود را اعداد انگلیسی به تومان وارد کنید"})
        }
    }
    sendToServerCashOutRequest(){
        this.setState({priceForWithdraw: this.state.priceForCashOut});
        var validity = this.validatePrice(this.state.priceForCashOut);
        if(validity) {
            console.log(this.persianToEnglish(this.state.sheba), 'sheba', this.persianToEnglish(this.state.priceForCashOut), 'priceForCashOut');
            var x = Math.round(this.state.priceForCashOut / 1000);
            var n = x.toString();
            console.log(n, 'ye');
            this.props.actions.cashOut(n, this.persianToEnglish(this.state.sheba)).then(

            ).catch(err=>{
                if(err.response.data.message === "Not enough balance"){
                    this.setState({showErrorForCashInOut: true});
                    this.setState({message: "شما مبلغ کافی برایی انجام این برداشت ندارید"});
                    throw (err);
                }
                else {
                    console.log(err.response);
                    throw (err);
                }

            })
        }
        else {
            this.setState({showErrorForCashInOut: true});
            this.setState({message: "لطفا مبلغ خود را اعداد انگلیسی به تومان وارد کنید"})
        }
    }
  render(){
    return(
              <div>
              <div className="content-wrapper py-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 d-block mx-auto nav-pills">
                        <div className="dash-con dash-new-project con-body mb-4">
                            <ul className="nav justify-content-center mx-auto" id="depositTab" role="tablist">
                                <li className="nav-item">
                                    <btn className="nav-link active" id="deposit-tab"
                                       data-toggle="tab"  role="tab" aria-controls="deposit"
                                        onClick={this.ChangeToCashIn}>واریز</btn>

                                </li>

                                <li className="nav-item">
                                    <btn className="nav-link" id="draw-tab" data-toggle="tab"
                                       role="tab" aria-controls="draw"  onClick={this.ChangeToCashOut}>برداشت</btn>
                                </li>
                            </ul>
                            <div className="tab-content" id="depositContent" >
                                {this.state.showCashIn ? <CashIn
                                        price={this.state.priceForCashIn}
                                        onChangeCashIn={this.onChangeCashIn}
                                        sendToServerCashInRequest={this.sendToServerCashInRequest}
                                        priceForSend={this.state.priceForSend}
                                    />
                                    :
                                    <CashOut
                                      profileInfo={this.state.profileInfo}
                                      price={this.state.priceForCashOut}
                                      onChangeCashOut={this.onChangeCashOut}
                                      sendToServerCashOutRequest={this.sendToServerCashOutRequest}
                                      priceForSend={this.state.priceForWithdraw}
                                      sheba={this.state.sheba}
                                      onChangeSheba={this.onChangeSheba}
                                      toPersianNum={this.toPersianNum}
                                    />}
                            </div>
                            {this.state.showErrorForCashInOut ? <Error message={this.state.message}/> : (null)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps(state , ownProps) {
    return{
        profileInfo : state.profileInfo,
        payLink : state.payLink
    }
}
function mapDispatchToProps(dispatch) {
    return{
        actions : bindActionCreators( profileInfo, dispatch ),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CashOutIn);
