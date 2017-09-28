import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './wish.css';
import './wish-dash.css';
import './font-awesome/css/font-awesome.min.css';
import './bootstrap.css';
import './bootstrap-select.min.css';
import './dataTables.bootstrap4.css';
import './bootstrap-rtl.min.css';
import 'jquery';
import 'bootstrap';
import './MainNavBarAction.js'
import SideNavbar from '../SideNavBar/constants.js'


class MainNavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="#">
              <img src="img/nav-logo.png" height="30" className="d-inline-block align-top" alt="nav-logo"></img>
              Wish-Work
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">

            <SideNavbar/>

            <ul className="navbar-nav navbar-right">
                  <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle mr-lg-2" href="#" id="alertsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-fw fa-bell nav-icon"></i>
                        <span className="d-lg-none">پیغام ها
                          <span className="badge badge-pill badge-success">6</span>
                        </span>
                        <span className="new-indicator d-none d-lg-block">
                          <i className="fa fa-fw fa-circle"></i>
                          <span className="number">12</span>
                        </span>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                          <h6 className="dropdown-header">پیغام های جدید:</h6>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                              <div className="dropdown-message small">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی".</div>
                              <span className="small text-muted">12:12</span>
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                              <div className="dropdown-message small">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی".</div>
                              <span className="small text-muted">12:12</span>
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#">
                              <div className="dropdown-message small">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی".</div>
                              <span className="small text-muted">12:12</span>
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item small" href="#">
                            تمام پیغام ها
                          </a>
                      </div>
                  </li>
                  <li id="tool" className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarUserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="rounded-circle" src="http://via.placeholder.com/50x50" width="30" height="30"></img>
                        وحید علوی
                      </a>
                      <div id="profile" className="dropdown-menu" aria-labelledby="navbarUserDropdown">
                          <a className="dropdown-item" href="#">خروج</a>
                      </div>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
      )
  }
}

module.exports = MainNavBar;
