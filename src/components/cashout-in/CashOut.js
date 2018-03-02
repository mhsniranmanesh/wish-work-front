import React from 'react';
import {Button} from 'reactstrap';



const CashOut = (props) =>{
    console.log(props.profileInfo.balance , 'balance');
  var x ;
  var priceForWithdraw;
  if((props.price !== "") && (!isNaN(props.price))){
      x = 'برداشت مبلغ ' + props.price + ' تومان';
      priceForWithdraw = props.price
  }
  else {
      x = 'مبلغ برداشتی را مشخص کنید.'
  }

    if(props.profileInfo.balance > 1) {
        return (
            <div id="draw" role="tabpanel" aria-labelledby="draw-tab">
                <h5 className="cashout-title">موجودی قابل برداشت(مبالغ برداشتی باید مضربی از ۱۰۰۰ تومان باشد):</h5>
                <h4 className="py-2 cashout-title">{props.toPersianNum(props.profileInfo.balance * 1000)} تومان</h4>
                <form className="">
                    <div className="form-group">
                        <label className="col-form-label form-header-fontsize">{x}</label>
                        <input type="text" className="form-control form-body-fontsize"
                               onChange={(event) => {
                                   props.onChangeCashOut(event)
                               }}
                               placeholder="مبلغ قابل برداشت تا سقف ۵.۰۰۰.۰۰۰ تومان"
                               value={priceForWithdraw}

                        />
                    </div>
                    <div className="form-group">
                        <label className="col-form-label form-header-fontsize">لطفا شماره شبای حساب خود را وارد کنید</label>
                        <input type="text" className="form-control form-body-fontsize"  placeholder="شماره شبا"
                               onChange={(event)=>{props.onChangeSheba(event)}} value={props.sheba}/>
                        <div className="sheba-numb detail-fontsize">
                            <a href="http://www.banksepah.ir/default-1232.aspx" target="_blank">
                                برای دریافت شماره شبا کلیک کنید
                            </a>
                        </div>
                    </div>
                    <Button color="primary" className="btn btn-primary btn-rec"
                            onClick={props.sendToServerCashOutRequest}>
                        برداشت
                    </Button>
                </form>
            </div>
        )
    }
    else {
      return(
          <div id="draw" role="tabpanel" aria-labelledby="draw-tab">
              <h5 className="cashout-title">موجودی قابل برداشت(مبالغ برداشتی باید مضربی از ۱۰۰۰ تومان باشد):</h5>
              <h4 className="py-2 cashout-title">{props.profileInfo.balance} تومان</h4>
                  <h5 className="cashout-title">موجودی شما برای برداشت کافی نمی باشد</h5>
          </div>
      )
    }
};

export default CashOut;
