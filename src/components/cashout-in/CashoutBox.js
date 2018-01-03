import React from 'react';

const CashoutBox = ({props}) =>{
  return(
    <div className="tab-pane fade text-center py-4" id="draw" role="tabpanel" aria-labelledby="draw-tab">
        <h5 className="">موجودی قابل برداشت:</h5>
        <h4 className="py-2">۲۳/۴۵۶/۰۹۸ ریال</h4>
        <form className="">
            <div className="form-group">
                <label className="col-form-label">مبلغ دلخواه برای برداشت را وارد کنید.</label>
                <input type="text" className="form-control" id="" placeholder="تا سقف ۲۳/۴۵۰/۰۰۰ ریال"></input>
            </div>
            <div className="form-group">
                <label className="col-form-label">لطفا شماره شبای حساب خود را وارد کنید</label>
                <input type="text" className="form-control" id="" placeholder=""></input>
                <a href="http://www.banksepah.ir/default-1232.aspx" target="_blank">
                  برای دریافت شماره شبا کلیک کنید
                </a>
            </div>
            <button type="submit" className="btn btn-primary btn-rec">
                برداشت
            </button>
        </form>
    </div>
  )
};
export default CashoutBox;
