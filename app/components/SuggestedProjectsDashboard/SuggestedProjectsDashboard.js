import React from 'react';
import ReactDOM from 'react-dom';

class SuggestedProjectsDashboard extends React.Component{
  render(){
    return(
      <div className="dash-con dash-recoms mb-4">
          <h5>پروژه های پیشنهادی</h5>
          <div className="dash-divider"></div>
          <div className="dash-recom-item price-good">
              <a href="#">
                  <h6><strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong></h6>
              </a>
              <span className="sub-heading">
                <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                <a className="tag" href="#">#علمی</a>
                <a className="tag" href="#">#زیست_شناسی</a>
                <a className="tag" href="#">#میکرو_بیولوژی</a>
                <a className="tag" href="#">#فوری</a>
              </span>
              <div className="sub-heading">
                  <i className="fa fa-user"></i> <a href="#">4/5</a>
                  <i className="fa fa-usd"></i> 2,000,000 تومان
                  <i className="fa fa-clock-o"></i> دو ساعت قبل
              </div>
          </div>
          <div className="dash-divider"></div>
          <div className="dash-recom-item price-fair">
              <a href="#">
                  <h6><strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong></h6>
              </a>
              <span className="sub-heading">
                <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                <a className="tag" href="#">#علمی</a>
                <a className="tag" href="#">#زیست_شناسی</a>
                <a className="tag" href="#">#میکرو_بیولوژی</a>
                <a className="tag" href="#">#فوری</a>
              </span>
              <div className="sub-heading">
                  <i className="fa fa-user"></i> <a href="#">4/5</a>
                  <i className="fa fa-usd"></i> 2,000,000 تومان
                  <i className="fa fa-clock-o"></i> دو ساعت قبل
              </div>
          </div>
          <div className="dash-divider"></div>
          <div className="dash-recom-item price-low">
              <a href="#">
                  <h6><strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong></h6>
              </a>
              <span className="sub-heading">
                <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                <a className="tag" href="#">#علمی</a>
                <a className="tag" href="#">#زیست_شناسی</a>
                <a className="tag" href="#">#میکرو_بیولوژی</a>
                <a className="tag" href="#">#فوری</a>
              </span>
              <div className="sub-heading">
                  <i className="fa fa-user"></i> <a href="#">4/5</a>
                  <i className="fa fa-usd"></i> 2,000,000 تومان
                  <i className="fa fa-clock-o"></i> دو ساعت قبل
              </div>
          </div>
          <form action="dashboard-project-recoms.html">
              <button type="submit" className="btn btn-primary btn-rec">
                  <i className="fa fa-angle-right" aria-hidden="true"></i> بیشتر
              </button>
          </form>
      </div>
    )
  }
}
module.exports = SuggestedProjectsDashboard;
