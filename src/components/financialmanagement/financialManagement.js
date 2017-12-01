import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';



// var LineChart = require("react-chartjs").Line;

const lineData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

var mockData1 = {
  labels: ["16 آبان", "18 آبان", "20 آبان", "24 آبان", "31 آبان", "10 آذر"],
  datasets: [{
    label: 'مبلغ دریافتی',
    data: [1200000, 1900000, 300000, 500000, 200000, 300000],
    backgroundColor: '#FF6384',
    borderColor: '#FF6384',
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
      '#FF6384',
  		'#36A2EB',
  		'#FFCE56'
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

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
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
                    <Line data={lineData} />
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
                  {/*<Doughnut data={mockData2} options={mockOptions2} width="400" height="200"/>*/}
                  {/*<Doughnut data={data} />*/}
                </div>
                <div className="dash-con dash-new-project con-body mb-4">
                  {/*<div className="chart">*/}
                    {/*<canvas id="timeColorChart" width="400" height="200"></canvas>*/}
                  {/*</div>*/}
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
