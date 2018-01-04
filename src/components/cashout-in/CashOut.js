import React from 'react';
import {Button} from 'reactstrap';



const CashOut = (props) =>{

  var x ;
  var priceForWithdraw;
  if((props.price !== "") && (!isNaN(props.price))){
      x = 'برداشت مبلغ ' + props.price + ' تومان';
      priceForWithdraw = props.price
  }
  else {
      x = 'مبلغ برداشتی را مشخص کنید.'
  }


    return(
        <div className="tab-pane fade text-center py-4" id="draw" role="tabpanel" aria-labelledby="draw-tab">
            <h5 className="">موجودی قابل برداشت:</h5>
            <h4 className="py-2">۲۳/۴۵۶/۰۹۸ ریال</h4>
            <form className="">
                <div className="form-group">
                    <label className="col-form-label">{x}</label>
                    <input type="text" className="form-control" id=""
                    onChange={(event) => {props.onChangeCashOut(event)}}
                     placeholder="تا سقف ۲۳/۴۵۰/۰۰۰ ریال"
                     value={priceForWithdraw}

                    />
                </div>
                <div className="form-group">
                    <label className="col-form-label">لطفا شماره شبای حساب خود را وارد کنید</label>
                    <input type="text" className="form-control" id="" placeholder=""/>
                    <a href="http://www.banksepah.ir/default-1232.aspx" target="_blank">
                        برای دریافت شماره شبا کلیک کنید
                    </a>
                </div>
                <Button color="primary" className="btn btn-primary btn-rec" onClick={props.sendToServerCashOutRequest}>
                    برداشت
                </Button>
            </form>
        </div>
    )
};

export default CashOut;
