import React from 'react';

class financialManagement extends React.Component{
  render(){
    return(
      <div>
      <div className="content-wrapper py-3">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-8 d-block mx-auto nav-pills">
                <div className="dash-con dash-new-project con-body mb-4">
                    <h5>مدیریت مالی</h5>
                    <div className="dash-divider"></div>
                    <div className="chart">
                        <canvas id="incomeChart" width="400" height="200"></canvas>
                        <div className="dash-divider"></div>
                        <div className="row text-center">
                            <div className="col-sm-6">
                                <p>بیشترین مبلغ: <span>۲/۵۰۰/۰۰۰ تومان</span></p>
                                <p>کمترین مبلغ: <span>۲/۵۰۰/۰۰۰ تومان</span></p>
                            </div>
                            <div className="col-sm-6">
                                <p>مبلغ میانگین: <span>۲/۵۰۰/۰۰۰ تومان</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dash-con dash-new-project con-body mb-4">
                    <div className="chart">
                        <canvas id="incomeColorChart" width="400" height="200"></canvas>
                    </div>
                </div>
                <div className="dash-con dash-new-project con-body mb-4">
                    <div className="chart">
                        <canvas id="timeColorChart" width="400" height="200"></canvas>
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
module.exports = financialManagement ;
