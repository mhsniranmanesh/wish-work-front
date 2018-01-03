import React from 'react';
//import ChangeButton from './ChangeButton';
import CashIn from './CashIn';
import CashOut from './CashOut';

class CashOutIn extends React.Component{
    constructor(props){
        super(props);
        this.state={priceForCashIn:"" , showCashIn:true , priceForSend:""};
        this.ChangeToCashIn = this.ChangeToCashIn.bind(this);
        this.ChangeToCashOut = this.ChangeToCashOut.bind(this);
        this.onChangeCashIn = this.onChangeCashIn.bind(this);
        this.sendToServerCashInRequest = this.sendToServerCashInRequest.bind(this);
    }
    onChangeCashIn(event){
        this.setState({priceForCashIn : event.target.value});
        this.setState({priceForSend: event.target.value});
    }
    ChangeToCashIn(){
        this.setState({showCashIn: true});
        //console.log(this.state)
    }
    ChangeToCashOut(){
        this.setState({showCashIn: false});
        //console.log(this.state)
    }
    componentWillMount(){
        if(this.props.location.search){
            let cash = Number(this.props.location.search.slice(1));
            //console.log(cash , 'cash');
            this.state.priceForCashIn = cash ;

        }
    }
    sendToServerCashInRequest(){
        this.setState({priceForSend: this.state.priceForCashIn});
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
                            <a className="nav-link active" id="deposit-tab"
                               data-toggle="tab"  role="tab" aria-controls="deposit"
                                onClick={this.ChangeToCashIn}>واریز</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="draw-tab" data-toggle="tab"
                               role="tab" aria-controls="draw"  onClick={this.ChangeToCashOut}>برداشت</a>
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
                            <CashOut/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
    )
  }
}
export default CashOutIn;
