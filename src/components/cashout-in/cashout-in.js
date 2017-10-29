import React from 'react';

class CashOutIn extends React.Component{
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
                            <a className="nav-link active" id="deposit-tab" data-toggle="tab" href="#deposit" role="tab" aria-controls="deposit" aria-selected="true">واریز</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="draw-tab" data-toggle="tab" href="#draw" role="tab" aria-controls="draw" aria-selected="false">برداشت</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="depositContent">
                        <div className="tab-pane fade show active text-center py-4" id="deposit" role="tabpanel" aria-labelledby="deposit-tab">
                            <form className="">
                                <div className="form-group">
                                    <label className="col-form-label">مبلغ دلخواه برای واریز را وارد کنید.</label>
                                    <input type="text" className="form-control" id="" placeholder="مبلغ به ریال"></input>
                                </div>
                                <button type="submit" className="btn btn-primary btn-rec">
                                    واریز
                                </button>
                            </form>
                        </div>
                        <div className="tab-pane fade text-center py-4" id="draw" role="tabpanel" aria-labelledby="draw-tab">
                            <h5 className="">موجودی قابل برداشت:</h5>
                            <h4 className="py-2">۲۳/۴۵۶/۰۹۸ ریال</h4>
                            <form className="">
                                <div className="form-group">
                                    <label className="col-form-label">مبلغ دلخواه برای برداشت را وارد کنید.</label>
                                    <input type="text" className="form-control" id="" placeholder="تا سقف ۲۳/۴۵۰/۰۰۰ ریال"></input>
                                </div>
                                <button type="submit" className="btn btn-primary btn-rec">
                                    برداشت
                                </button>
                            </form>
                        </div>
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
module.exports = CashOutIn ;
