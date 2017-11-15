import React from 'react';
import { NavLink } from 'react-router-dom';
import  {PropTypes} from 'prop-types';
//import '../../src/styles.css';
//className = 'active' show the side navbar active when you click on the object
const Header2 = (props) => {
  return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={require('../../../static/img/nav-logo.png')} height="30" className="d-inline-block align-top" alt="nav-logo"/>
              <img src={require('../../../static/img/wishworkFontLogo.jpg')} height="30" />
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav navbar-sidenav">
      <li className="nav-item active" data-toggle="tooltip" data-placement="right" title="داشبورد">
        <NavLink to="/" className="nav-link" >
          <i className="fa fa-fw fa-dashboard"/>
          <span className="nav-link-text">داشبورد</span>
        </NavLink>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="پروژه">
        <a  className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents">
          <i className="fa fa-fw fa-tasks"/>
          <span className="nav-link-text">پروژه</span>
        </a>
        <ul className="sidenav-second-level collapse" id="collapseComponents">
          <li>
            <NavLink to="/projectsubmition">ثبت پروژه</NavLink>
          </li>
          <li>
            <NavLink to="/recomendedprojects">دریافت پروژه</NavLink>
          </li>
          <li>
            <NavLink to="/projectcontrol">کنترل پروژه</NavLink>
          </li>
          <li>
            <a href="#">پروژه های من</a>
          </li>
        </ul>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="پروفایل">
        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#profileComponents">
          <i className="fa fa-fw fa-user"/>
          <span className="nav-link-text">پروفایل</span>
        </a>
        <ul className="sidenav-second-level collapse" id="profileComponents">
          <li>
            <NavLink to="/profileinfo">ویرایش اطلاعات</NavLink>
          </li>
          <li>
            <NavLink to="/notifspage">اطلاعیه ها</NavLink>
          </li>
        </ul>
      </li>
      <li className="nav-item" data-toggle="tooltip" data-placement="right" title="حساب">
  <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#accountComponents">
      <i className="fa fa-fw fa-usd"/>
      <span className="nav-link-text">حساب</span>
  </a>
  <ul className="sidenav-second-level collapse" id="accountComponents">
      <li className="active">
          <NavLink to="/cashout-in">واریز - برداشت</NavLink>
      </li>
      <li>
          <NavLink to='/financialmanagement'>مدیریت مالی</NavLink>
      </li>
      <li>
          <NavLink to="/accountbill">صورت حساب</NavLink>
      </li>
  </ul>
</li>
    </ul>
    <ul className="navbar-nav navbar-sidenav sidenav-toggler">
      <li className="nav-item">
        <a className="nav-link text-center" id="sidenavToggler">
          <i className="fa fa-fw fa-angle-right"/>
        </a>
      </li>
    </ul>

              <ul className="navbar-nav navbar-right">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle mr-lg-2" href="#" id="alertsDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-fw fa-bell nav-icon"/>
                    <span className="d-lg-none">پیغام ها
                          <span className="badge badge-pill badge-success">6</span>
                        </span>
                    <span className="new-indicator d-none d-lg-block">
                          <i className="fa fa-fw fa-circle"/>
                          <span className="number">12</span>
                        </span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                    <h6 className="dropdown-header">پیغام های جدید:</h6>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">
                      <div className="dropdown-message small">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی".</div>
                      <span className="small text-muted">12:12</span>
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">
                      <div className="dropdown-message small">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی".</div>
                      <span className="small text-muted">12:12</span>
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item" href="#">
                      <div className="dropdown-message small">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی".</div>
                      <span className="small text-muted">12:12</span>
                    </a>
                    <div className="dropdown-divider"/>
                    <a className="dropdown-item small" href="#">
                      تمام پیغام ها
                    </a>
                  </div>
                </li>
                <li id="tool" className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarUserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded-circle" src="http://via.placeholder.com/50x50" width="30" height="30"/>
                      {props.yourName}
                  </a>
                  <div id="profile" className="dropdown-menu" aria-labelledby="navbarUserDropdown">
                    <a className="dropdown-item" href="#">خروج</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

  );
};
Header2.PropTypes = {
  yourName : PropTypes.object.isRequired
};

export default Header2;
