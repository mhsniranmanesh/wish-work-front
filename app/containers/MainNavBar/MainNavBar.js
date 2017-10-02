import React from 'react';
import ReactDOM from 'react-dom';
import '../../src/styles.css';
import '../../src/wish.css';
import '../../src/wish-dash.css';
import '../../src/font-awesome/css/font-awesome.min.css';
import '../../src/bootstrap.css';
import '../../src/bootstrap-select.min.css';
import '../../src/dataTables.bootstrap4.css';
import '../../src/bootstrap-rtl.min.css';
import '.MainNavBarAction.js';
import 'reactstrap/dist/reactstrap.min.js';
import 'reactstrap/dist/reactstrap.cjs.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../src/wish-dash.js';
import MainContentWrapper from '../Main Content Wrapper/MainContentWrapper.js'
import SideNavbar from '../SideNavBar/SideNavBar.js'



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
                      {Informations.Name}
                  </a>
                  <div id="profile" className="dropdown-menu" aria-labelledby="navbarUserDropdown">
                    <a className="dropdown-item" href="#">خروج</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <MainContentWrapper/>
      </div>
    )
  }
}
const Informations = {
  Name : 'امیرحسین شیرانی'
}
module.exports = MainNavBar;
