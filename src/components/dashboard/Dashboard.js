import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as profileInfo from '../../actions/profileInfo.js';
import {bindActionCreators} from 'redux';

class Dashboard extends React.Component{
  constructor(props , context){
    super(props , context);
  }
  profileRow(profileInfo , index){
    return <div key={index}>{profileInfo.first_name +' '+ profileInfo.last_name}</div>;
  }
  render(){
    return(
      <div>
      <div className="content-wrapper py-3">
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-5">
                  <div className="dash-con dash-profile mb-4">
                      <div className="row">
                          <div className="mx-auto">
                              <img src="http://via.placeholder.com/125x125" className="rounded-circle"></img>
                              <h5> {this.props.profileInfo.first_name + ' ' + this.props.profileInfo.last_name} </h5>
                              <h6 className="dash-profile-stars">
                            <i className="fa fa-star shine-on"></i>
                            <i className="fa fa-star shine-on"></i>
                            <i className="fa fa-star shine-on"></i>
                            <i className="fa fa-star-o shine-on"></i>
                            <i className="fa fa-star-o shine-on"></i>
                          </h6>
                          </div>
                      </div>
                  </div>
                  <div className="dash-con dash-new-project con-body mb-4">
                      <h5>ایجاد پروژه جدید</h5>
                      <div className="dash-divider"></div>
                      <form className="">
                          <div className="form-group">
                              <input type="text" className="form-control" id="" placeholder="عنوان پروژه"></input>
                          </div>
                          <div className="input-group">
                              <select className="selectpicker" data-style="form-control" id="" title="زمینه ترجمه را انتخاب کنید.">
                                  <option>پزشکی</option>
                                  <option>ادبی</option>
                                  <option>سیاسی</option>
                                  <option>ریاضی</option>
                                  <option>شیمی</option>
                              </select>
                          </div>
                          <div className="input-group">
                              <select className="selectpicker" data-style="form-control" id="" title="از زبان ...">
                                  <option>فارسی</option>
                                  <option>انگلیسی</option>
                                  <option>فرانسوی</option>
                                  <option>عربی</option>
                                  <option>اسپانیایی</option>
                              </select>
                          </div>
                          <div className="input-group">
                              <select className="selectpicker" data-style="form-control" id="" title="به زبان ...">
                                  <option>فارسی</option>
                                  <option>انگلیسی</option>
                                  <option>فرانسوی</option>
                                  <option>عربی</option>
                                  <option>اسپانیایی</option>
                              </select>
                          </div>
                      </form>
                      <form action="dashboard-project-new.html">
                          <button type="submit" className="btn btn-primary btn-rec">
                              ایجاد پروژه
                          </button>
                      </form>
                  </div>
              </div>
              <div className="col-sm-7">
                  <div className="dash-con con-body dash-notif mb-4">
                      <h5>اطلاعیه های جدید</h5>
                      <div className="dash-divider"></div>
                      <a className="notif" href="#">
                          <span className="notif-cat notif-project">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif" href="#">
                          <span className="notif-cat notif-msg">پیام</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif" href="#">
                          <span className="notif-cat notif-project">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <button type="submit" className="btn btn-primary btn-rec">
                        <i className="fa fa-angle-right" aria-hidden="true"></i> بیشتر
                      </button>
                  </div>
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
              </div>
          </div>
      </div>
  </div>
      </div>
    );
  }
}
Dashboard.PropTypes = {
  profileInfo: PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};

function mapStateToProps(state , ownProps){
  return{
    profileInfo : state.profileInfo
  };
}
function mapDispatchToProps(dispatch){
  return{
  actions : bindActionCreators(profileInfo , dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);
