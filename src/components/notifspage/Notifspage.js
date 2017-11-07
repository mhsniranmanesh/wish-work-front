import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class Notifspage extends React.Component{


    render(){
    return(
      <div className="content-wrapper py-3">
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-6 d-block mx-auto">
                  <div className="dash-con dash-profile-info con-body mb-4">
                      <h5>اطلاعیه ها</h5>
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
                      <div className="dash-divider"></div>
                      <a className="notif" href="#">
                          <span className="notif-cat notif-project">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif text-muted" href="#">
                          <span className="notif-cat notif-msg notif-seen">پیام</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif text-muted" href="#">
                          <span className="notif-cat notif-project notif-seen">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif text-muted" href="#">
                          <span className="notif-cat notif-project notif-seen">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif text-muted" href="#">
                          <span className="notif-cat notif-msg notif-seen">پیام</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif text-muted" href="#">
                          <span className="notif-cat notif-project notif-seen">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                       <div className="dash-divider"></div>
                      <a className="notif text-muted" href="#">
                          <span className="notif-cat notif-msg notif-seen">پیام</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif text-muted" href="#">
                          <span className="notif-cat notif-project notif-seen">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif text-muted" href="#">
                          <span className="notif-cat notif-project notif-seen">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif text-muted" href="#">
                          <span className="notif-cat notif-msg notif-seen">پیام</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"></div>
                      <a className="notif text-muted" href="#">
                          <span className="notif-cat notif-project notif-seen">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>

                      <nav className="my-3" aria-label="Page navigation">
                        <ul className="pagination pagination-sm justify-content-center">
                          <li className="page-item disabled"><a className="page-link" href="#">1</a></li>
                          <li className="page-item"><a className="page-link" href="#">2</a></li>
                          <li className="page-item"><a className="page-link" href="#">3</a></li>
                          <li className="page-item">
                            <a className="page-link" href="#">بعدی</a>
                          </li>
                        </ul>
                      </nav>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
  }
}

module.exports = Notifspage ;
