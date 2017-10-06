import React from 'react';
import ReactDOM from 'react-dom';
class NewNotifDashboard extends React.Component{
  render(){
    return(
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
    )
  }
}
module.exports = NewNotifDashboard;
