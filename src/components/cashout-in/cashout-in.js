import React from 'react';
import CashinOrCashout from './CashinOrCashout';
import CashinBox from './CashinBox';
import CashoutBox from './CashoutBox';


class CashOutIn extends React.Component{
  render(){
    return(
      <div>
        <div className="content-wrapper py-3">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 d-block mx-auto nav-pills">
                        <div className="dash-con dash-new-project con-body mb-4">
                            <CashinOrCashout/>
                            <div className="tab-content" id="depositContent">
                              <CashinBox/>
                              <CashoutBox/>
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
