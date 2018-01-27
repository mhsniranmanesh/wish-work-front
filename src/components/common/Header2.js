import React from 'react';
import { NavLink } from 'react-router-dom';
import  {PropTypes} from 'prop-types';
import  Notifications from '../../actions/Notifications';
import {connect} from 'react-redux';
import NotifsListForHeader from './NotifsListForHeader';
import * as profileInfo from '../../actions/profileInfo.js';
//import '../../src/styles.css';
//className = 'active' show the side navbar active when you click on the object
import FilterLink from './FilterLink';


class Header2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {activeDashboard : true , activeProject : false , activeProfile: false , activeAccounting : false , activeMessage : false,
            profileInfo:Object.assign({} , props.profileInfo[0])};
        this.dashboardActive = this.dashboardActive.bind(this);
        this.projectActive = this.projectActive.bind(this);
        this.profileActive = this.profileActive.bind(this);
        this.accountingActive = this.accountingActive.bind(this);
        this.messageActive = this.messageActive.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.profileInfo != nextProps.profileInfo ) {
            console.log(nextProps.profileInfo[0]);
            this.setState({profileInfo: Object.assign({}, nextProps.profileInfo[0])});
        }
    }
    dashboardActive (){
        if(!this.state.activeDashboard) {
            this.setState(prevState => ({activeDashboard: !prevState.activeDashboard}));
            this.setState({activeProject : false , activeProfile: false , activeAccounting: false , activeMessage: false})
        }
    }
    projectActive(){
        if(!this.state.activeProject) {
            this.setState(prevState => ({activeProject: !prevState.activeProject}));
            this.setState({activeDashboard : false ,activeProfile : false,activeAccounting:false, activeMessage : false })
        }
    }
    profileActive(){
        if(!this.state.activeProfile){
            this.setState(prevState => ({activeProfile: !prevState.activeProfile}));
            this.setState({activeDashboard : false ,activeProject : false, activeAccounting:false, activeMessage : false })

        }
    }
    accountingActive() {
        if (!this.state.activeAccounting) {
            this.setState(prevState => ({activeAccounting: !prevState.activeAccounting}));
            this.setState({activeDashboard: false, activeProject: false, activeProfile: false, activeMessage: false})
        }
    }
    messageActive() {
        if (!this.state.activeMessage) {
            this.setState(prevState => ({activeMessage: !prevState.activeMessage}));
            this.setState({activeDashboard: false, activeProject: false, activeProfile: false, activeAccounting: false})
        }
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={require('../../../static/img/IMG_2665.jpg')} height="30"
                             className="d-inline-block align-top" alt="nav-logo"/>
                    </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav navbar-sidenav">
                            <li className={this.state.activeDashboard ? "nav-item active" : "nav-item"} data-toggle="tooltip" data-placement="right"
                                title="داشبورد" onClick={this.dashboardActive}>
                                <NavLink to="/dashboard" className="nav-link">
                                    <i className="fa fa-fw fa-dashboard"/>
                                    <span className="nav-link-text">داشبورد</span>
                                </NavLink>
                            </li>
                            <li className = { this.state.activeProject ? "nav-item active" : "nav-item" } data-toggle="tooltip" data-placement="right" title="پروژه"
                                onClick={this.projectActive}>
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents">
                                    <i className="fa fa-fw fa-tasks"/>
                                    <span className="nav-link-text">پروژه</span>
                                </a>
                                <ul className="sidenav-second-level collapse" id="collapseComponents">
                                    <li>
                                        <NavLink to="/project/submit">ثبت پروژه</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/project/recommend">دریافت پروژه</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/project/control">کنترل پروژه</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/project/me">پروژه های من</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className={this.state.activeProfile ? "nav-item active" : "nav-item"} data-toggle="tooltip" data-placement="right" title="پروفایل"
                                onClick={this.profileActive}>
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse"
                                   href="#profileComponents">
                                    <i className="fa fa-fw fa-user"/>
                                    <span className="nav-link-text">پروفایل</span>
                                </a>
                                <ul className="sidenav-second-level collapse" id="profileComponents">
                                    <li>
                                        <NavLink to="/profile/edit">ویرایش اطلاعات</NavLink>
                                    </li>
                                    {/*<li>*/}
                                        {/*<NavLink to="/profile/notif">اطلاعیه ها</NavLink>*/}
                                    {/*</li>*/}
                                </ul>
                            </li>
                            <li className={this.state.activeAccounting ? "nav-item active" : "nav-item"} data-toggle="tooltip" data-placement="right" title="حساب"
                                onClick={this.accountingActive}>
                                <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse"
                                   href="#accountComponents">
                                    <i className="fa fa-fw fa-usd"/>
                                    <span className="nav-link-text">حساب</span>
                                </a>
                                <ul className="sidenav-second-level collapse" id="accountComponents">
                                    <li>
                                        <NavLink to="/account/cash">واریز - برداشت</NavLink>
                                    </li>
                                    {/*<li>*/}
                                        {/*<NavLink to='/account/manage'>مدیریت مالی</NavLink>*/}
                                    {/*</li>*/}
                                    <li>
                                        <NavLink to='/account/wishcoin'>ویش‌کوین</NavLink>
                                    </li>
                                    {/*<li>*/}
                                        {/*<NavLink to="/account/bill">صورت حساب</NavLink>*/}
                                    {/*</li>*/}
                                </ul>
                            </li>
                            {/*<li className={this.state.activeMessage ? "nav-item active" : "nav-item"} data-toggle="tooltip" data-placement="right" title="پیام‌رسان"*/}
                                 {/*onClick={this.messageActive}>*/}
                                {/*<NavLink className="nav-link" to='/messages'>*/}
                                    {/*<i className="fa fa-fw fa-comments"/>*/}
                                    {/*<span className="nav-link-text">پیام‌رسان</span>*/}
                                {/*</NavLink>*/}
                            {/*</li>*/}
                        </ul>
                        <ul className="navbar-nav navbar-sidenav sidenav-toggler">
                            <li className="nav-item">
                                <a className="nav-link text-center" id="sidenavToggler">
                                    <i className="fa fa-fw fa-angle-right"/>
                                </a>
                            </li>
                        </ul>

                        <ul className="navbar-nav navbar-right">
                            {/*   SEARCH BAR    */}
                            {/*<form className="form-inline">*/}
                                {/*<div className="input-group">*/}
                                    {/*<input type="text" className="form-control" placeholder="جستجو..." aria-label=""/>*/}
                                        {/*<div className="input-group-btn">*/}
                                            {/*<button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                                {/*<i className="fa fa-search"/>*/}
                                            {/*</button>*/}
                                            {/*<div className="dropdown-menu dropdown-menu-left">*/}
                                                {/*<a className="dropdown-item" href="#">در فریلنسر ها</a>*/}
                                                {/*<a className="dropdown-item" href="#">در پروژه ها</a>*/}
                                                {/*<div role="separator" className="dropdown-divider"/>*/}
                                                {/*<a className="dropdown-item" href="#">همه</a>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                {/*</div>*/}
                            {/*</form>*/}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle mr-lg-2" href="#" id="alertsDropdown"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fa fa-fw fa-bell nav-icon"/>
                                    <span className="d-lg-none">پیغام ها
                          <span className="badge badge-pill badge-success">6</span>
                        </span>
                                    <span className="new-indicator d-none d-lg-block">
                          <i className="fa fa-fw fa-circle"/>
                          <span className="number">12</span>
                        </span>
                                </a>

                                <NotifsListForHeader Notifications={this.props.Notifications}/>

                            </li>
                            <li id="tool" className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com"
                                   id="navbarUserDropdown" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">
                                    <img className="rounded-circle" src="http://via.placeholder.com/50x50" width="30"
                                         height="30"/>
                                    {this.state.profileInfo.first_name + ' ' + this.state.profileInfo.last_name}
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
    }
};
Header2.PropTypes = {
  yourName : PropTypes.object.isRequired,
  Notifications : PropTypes.object.isRequired,
    profileInfo: PropTypes.array.isRequired,
};

function mapStateToProps(state , ownProps) {
    return {
        Notifications: state.Notifications,
        profileInfo : state.profileInfo
    }
}



export default connect(mapStateToProps)(Header2);
