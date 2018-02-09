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
            priceForCashOut:"" , priceForWithdraw:"" , profileInfo:"" , showErrorForCashIn:false};
        this.ChangeToCashIn = this.ChangeToCashIn.bind(this);
        this.ChangeToCashOut = this.ChangeToCashOut.bind(this);
        this.onChangeCashIn = this.onChangeCashIn.bind(this);
        this.onChangeCashOut = this.onChangeCashOut.bind(this);
        this.sendToServerCashInRequest = this.sendToServerCashInRequest.bind(this);
        this.sendToServerCashOutRequest = this.sendToServerCashOutRequest.bind(this);
        this.size = this.size.bind(this);
        this.redirectToPaymentPage = this.redirectToPaymentPage.bind(this);
        this.validatePrice = this.validatePrice.bind(this);
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
            let cash = Number(this.props.location.search.slice(1));
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
            this.setState({showErrorForCashIn: false});
            this.props.actions.transActionPerform(this.state.priceForSend * 10).then(
                () => {
                    this.redirectToPaymentPage()
                }
            ).catch(err => {
                throw (err)
            });
            console.log(this.state);
        }
        this.setState({showErrorForCashIn: true})
    }
    sendToServerCashOutRequest(){
        this.setState({priceForWithdraw: this.state.priceForCashOut});
        console.log(this.state);
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
                                      onChangeCashin={this.state.onChangeCashOut}
                                      sendToServerCashinRequest={this.sendToServerCashOutRequest}
                                      priceForSend={this.state.priceForWithdraw}
                                    />}
                            </div>
                            {this.state.showErrorForCashIn ? <Error message="لطفا مبلغ خود را اعداد انگلیسی به تومان وارد کنید"/> : (null)}
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
