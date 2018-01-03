import React from 'react';
import {Button} from 'reactstrap';
const CashIn = (props) => {
    var x ;
    var priceForSend;
    if((props.price !== "") && (!isNaN(props.price))){
        x = 'واریز مبلغ ' + props.price + ' تومان';
        priceForSend = props.price
    }
    else {
        x = 'مبلغ دلخواه برای واریز را وارد کنید.'
    }

  return(
      <div>
          <div className="tab-pane fade show active text-center py-4"  role="tabpanel" aria-labelledby="deposit-tab">
          <form className="">
              <div className="form-group">
                  <label className="col-form-label">{x}</label>
                  <input type="text" className="form-control"
                         onChange={(event)=>{props.onChangeCashIn(event)}}
                         placeholder="مبلغ به ریال" value={priceForSend}/>
              </div>
              <Button color="primary" className="btn btn-primary btn-rec" onClick={props.sendToServerCashInRequest}>
                  واریز
              </Button>
          </form>
      </div>
      </div>
  )
};

export default CashIn;