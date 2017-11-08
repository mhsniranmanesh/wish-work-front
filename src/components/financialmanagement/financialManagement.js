import React from 'react';
var DoughnutChart = require("react-chartjs").Doughnut;
var LineChart = require("react-chartjs").Line;

var mockData1 = {
  labels: ["16 آبان", "18 آبان", "20 آبان", "24 آبان", "31 آبان", "10 آذر"],
  datasets: [{
    label: 'مبلغ دریافتی',
    data: [1200000, 1900000, 300000, 500000, 200000, 300000],
    backgroundColor: [
      'rgba(255, 99, 132, 0.0)'
    ],
    borderColor: [
      'rgba(1, 138, 190, 1)'
    ],
    borderWidth: 3
  }]
};


var mockOptions1 = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  title: {
    display: true,
    text: 'دریافتی از ویش‌ورک',
    fontSize: 16,
    fontStyle: '300',
    fontFamily: 'iransans'
  },
  legend: {
    labels: {
      // This more specific font property overrides the global property
      fontFamily: 'iransans'
    }
  }
};

var mockData2 = {
  datasets: [{
    data: [50, 20, 30],
    backgroundColor: [
      'rgba(8, 176, 240, 1)',
      'rgba(0, 205, 89, 1)',
      'rgba(215, 112, 0, 1)',
    ],
    label: 'Dataset 1'
  }],
  labels: [
    "آبی",
    "سبز",
    "نارنجی",
  ]
};
var mockOptions2 = {
  responsive: true,
  legend: {
    position: 'top',
  },
  title: {
    display: true,
    text: 'دریافتی از ویش‌ورک',
    fontSize: 16,
    fontStyle: '300',
    fontFamily: 'iransans'
  },
  legend: {
    labels: {
      // This more specific font property overrides the global property
      fontFamily: 'iransans'
    }
  },
  animation: {
    animateScale: true,
    animateRotate: true
  }
};
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
                      <LineChart data={mockData1} options={mockOptions1} width="400" height="200"/>
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
                        <DoughnutChart data={mockData2} options={mockOptions2} width="400" height="200"></DoughnutChart>
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
