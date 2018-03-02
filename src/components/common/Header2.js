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
            profileInfo:Object.assign({} , props.profileInfo[0]) , classForCollapseProject:"nav-link nav-link-collapse collapsed" ,
            classForCollapseProfileInfo : "nav-link nav-link-collapse collapsed"  , classForCollapseAccount: "nav-link nav-link-collapse collapsed",
            classCollapseChildProject:"sidenav-second-level collapse" , classCollapseChildProfile:"sidenav-second-level collapse" ,
            classCollapseChildAccount : "sidenav-second-level collapse" , colorBackground: -1 ,
            colorCode: 0 , Image: null , toggleForResponsiveCollapse:"collapse navbar-collapse"
        };
        this.dashboardActive = this.dashboardActive.bind(this);
        this.projectActive = this.projectActive.bind(this);
        this.profileActive = this.profileActive.bind(this);
        this.accountingActive = this.accountingActive.bind(this);
        this.messageActive = this.messageActive.bind(this);
        this.exit = this.exit.bind(this);
        this.size = this.size.bind(this);
        this.toggleForResponsive = this.toggleForResponsive.bind(this);
    }
    toggleForResponsive(){
        if(this.state.toggleForResponsiveCollapse === "collapse navbar-collapse" ) {
            this.setState({toggleForResponsiveCollapse:"collapse navbar-collapse show"})
        }
        else {
            this.setState({toggleForResponsiveCollapse:"collapse navbar-collapse"})
        }
    }
    size (obj) {
        let x = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) x++;
        }
        return x;
    };
    exit(){
        localStorage.removeItem('current_login_token');
        // window.location.assign('http://wishworkstage.ir/login/');
        window.location.assign('http://wishwork.ir/login/');
        // this.context.router.history.push({
        //     pathname:'/login/'
        // });
    }
    componentWillMount(){
        let x = this.size(this.props.profileInfo);
        if(x>0){
            let Image ;
            // console.log(Image , 'IMMMAAAGEEE');
            var colorBackground = -1;
            var colorCode;
            if((this.props.profileInfo[x-1].profile_picture != null) || (this.props.profileInfo[x-1].profile_picture != undefined)){
                if(this.props.profileInfo[x-1].profile_picture == '/media/'){
                    Image = require("../../../static/img/profile_pic/" + this.props.profileInfo[x-1].first_name[0].charCodeAt() + ".png");
                    colorBackground = this.props.profileInfo[x-1].first_name[0].charCodeAt()%5;
                }
                else {
                    Image = this.props.profileInfo[x-1].profile_picture;
                    // console.log("/media/", Image);
                }
            }
            else{
                Image= require("../../../static/img/profile_pic/" + this.props.profileInfo[x-1].first_name[0].charCodeAt() + ".png");
                colorBackground = this.props.profileInfo[x-1].first_name[0].charCodeAt()%5;
            }
            if(colorBackground === 0){
                colorCode = '#018abe'
            }
            else if(colorBackground === 1){
                colorCode = '#014762'
            }
            else if(colorBackground === 2){
                colorCode = '#69144F'
            }
            else if(colorBackground === 3){
                colorCode = '#c96929'
            }
            else if(colorBackground === 4){
                colorCode = '#707117'
            }
            this.setState({colorBackground: colorBackground , colorCode:colorCode , Image:Image});
            // console.log(nextProps.profileInfo[0]);
            // this.setState({profileInfo: Object.assign({}, nextProps.profileInfo[0])});
        }
    }
    componentWillReceiveProps(nextProps){
        let x = this.size(nextProps.profileInfo);
        if(this.props.profileInfo != nextProps.profileInfo ) {
            let Image ;
            // console.log(Image , 'IMMMAAAGEEE');
            var colorBackground = -1;
            var colorCode;
            if((nextProps.profileInfo[x-1].profile_picture != null) || (nextProps.profileInfo[x-1].profile_picture != undefined)){
                if(nextProps.profileInfo[x-1].profile_picture == '/media/'){
                    Image = require("../../../static/img/profile_pic/" + nextProps.profileInfo[x-1].first_name[0].charCodeAt() + ".png");
                    colorBackground = nextProps.profileInfo[x-1].first_name[0].charCodeAt()%5;
                }
                else {
                    Image = nextProps.profileInfo[x-1].profile_picture;
                    // console.log("/media/", Image);
                }
            }
            else{
                Image= require("../../../static/img/profile_pic/" + nextProps.profileInfo[x-1].first_name[0].charCodeAt() + ".png");
                colorBackground = nextProps.profileInfo[x-1].first_name[0].charCodeAt()%5;
            }
            if(colorBackground === 0){
                colorCode = '#018abe'
            }
            else if(colorBackground === 1){
                colorCode = '#014762'
            }
            else if(colorBackground === 2){
                colorCode = '#69144F'
            }
            else if(colorBackground === 3){
                colorCode = '#c96929'
            }
            else if(colorBackground === 4){
                colorCode = '#707117'
            }
            this.setState({colorBackground: colorBackground , colorCode:colorCode , Image:Image});
            console.log(nextProps.profileInfo[0]);
            this.setState({profileInfo: Object.assign({}, nextProps.profileInfo[x-1])});
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
            this.setState({classForCollapseProject: "nav-link nav-link-collapse ",
                classForCollapseProfileInfo:"nav-link nav-link-collapse collapsed",
                classForCollapseAccount:"nav-link nav-link-collapse collapsed",
                classCollapseChildProject:"sidenav-second-level collapse show",
                classCollapseChildAccount:"sidenav-second-level collapse",
                classCollapseChildProfile:"sidenav-second-level collapse"
            });
            this.setState(prevState => ({activeProject: !prevState.activeProject}));
            this.setState({activeDashboard : false ,activeProfile : false,activeAccounting:false, activeMessage : false })
        }
    }
    profileActive(){
        if(!this.state.activeProfile){
            this.setState({classForCollapseProject: "nav-link nav-link-collapse collapsed",
                classForCollapseProfileInfo:"nav-link nav-link-collapse ",
                classForCollapseAccount:"nav-link nav-link-collapse collapsed",
                classCollapseChildProject:"sidenav-second-level collapse",
                classCollapseChildAccount:"sidenav-second-level collapse",
                classCollapseChildProfile:"sidenav-second-level collapse show"
            });
            this.setState(prevState => ({activeProfile: !prevState.activeProfile}));
            this.setState({activeDashboard : false ,activeProject : false, activeAccounting:false, activeMessage : false })

        }
    }
    accountingActive() {
        if (!this.state.activeAccounting) {
            this.setState({classForCollapseProject: "nav-link nav-link-collapse collapsed",
                classForCollapseProfileInfo:"nav-link nav-link-collapse collapsed",
                classForCollapseAccount:"nav-link nav-link-collapse ",
                classCollapseChildProject:"sidenav-second-level collapse",
                classCollapseChildAccount:"sidenav-second-level collapse show",
                classCollapseChildProfile:"sidenav-second-level collapse"
            });
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
                            aria-label="Toggle navigation" onClick={this.toggleForResponsive}>
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className={this.state.toggleForResponsiveCollapse} id="navbarResponsive">
                        <ul className="navbar-nav navbar-sidenav">
                            <li className={this.state.activeDashboard ? "nav-item active" : "nav-item"} data-toggle="tooltip" data-placement="right"
                                title="داشبورد" onClick={this.dashboardActive}>
                                <NavLink to="/dashboard" className="nav-link" onClick={this.toggleForResponsive}>
                                    <i className="fa fa-fw fa-dashboard"/>
                                    <span className="nav-link-text">داشبورد</span>
                                </NavLink>
                            </li>
                            <li className = { this.state.activeProject ? "nav-item active" : "nav-item" } data-toggle="tooltip" data-placement="right" title="پروژه"
                                onClick={this.projectActive}>
                                <a className={this.state.classForCollapseProject} data-toggle="collapse" href="#collapseComponents">
                                    <i className="fa fa-fw fa-tasks"/>
                                    <span className="nav-link-text">پروژه</span>
                                </a>
                                <ul className={this.state.classCollapseChildProject} id="collapseComponents">
                                    <li onClick={this.toggleForResponsive}>
                                        <NavLink to="/project/submit">ثبت پروژه</NavLink>
                                    </li>
                                    {this.state.profileInfo.is_freelancer?<li onClick={this.toggleForResponsive}>
                                        <NavLink to="/project/recommend">دریافت پروژه</NavLink>
                                    </li> : (null)
                                    }
                                    <li onClick={this.toggleForResponsive}>
                                        <NavLink to="/project/control">کنترل پروژه</NavLink>
                                    </li>
                                    <li onClick={this.toggleForResponsive}>
                                        <NavLink to="/project/me">پروژه های من</NavLink>
                                    </li>
                                </ul>
                            </li>
                            {/*"nav-link nav-link-collapse collapsed"*/}
                            <li className={this.state.activeProfile ? "nav-item active" : "nav-item"} data-toggle="tooltip" data-placement="right" title="پروفایل"
                                onClick={this.profileActive}>
                                <a className={this.state.classForCollapseProfileInfo} data-toggle="collapse"
                                   href="#profileComponents">
                                    <i className="fa fa-fw fa-user"/>
                                    <span className="nav-link-text">پروفایل</span>
                                </a>
                                <ul className={this.state.classCollapseChildProfile} id="profileComponents">
                                    <li onClick={this.toggleForResponsive}>
                                        <NavLink to="/profile/edit">ویرایش اطلاعات</NavLink>
                                    </li>
                                    {/*<li>*/}
                                        {/*<NavLink to="/profile/notif">اطلاعیه ها</NavLink>*/}
                                    {/*</li>*/}
                                </ul>
                            </li>
                            <li className={this.state.activeAccounting ? "nav-item active" : "nav-item"} data-toggle="tooltip" data-placement="right" title="حساب"
                                onClick={this.accountingActive}>
                                <a className={this.state.classForCollapseAccount} data-toggle="collapse"
                                   href="#accountComponents">
                                    <i className="fa fa-fw fa-usd"/>
                                    <span className="nav-link-text">حساب</span>
                                </a>
                                <ul className={this.state.classCollapseChildAccount} id="accountComponents">
                                    <li onClick={this.toggleForResponsive}>
                                        <NavLink to="/account/cash">واریز - برداشت</NavLink>
                                    </li>
                                    {/*<li>*/}
                                        {/*<NavLink to='/account/manage'>مدیریت مالی</NavLink>*/}
                                    {/*</li>*/}
                                    <li onClick={this.toggleForResponsive}>
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
                        {/*<ul className="navbar-nav navbar-sidenav sidenav-toggler">*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link text-center" id="sidenavToggler">*/}
                                    {/*<i className="fa fa-fw fa-angle-right"/>*/}
                                {/*</a>*/}
                            {/*</li>*/}
                        {/*</ul>*/}

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
                            {/*<li className="nav-item dropdown">*/}
                                {/*<a className="nav-link dropdown-toggle mr-lg-2" href="#" id="alertsDropdown"*/}
                                   {/*data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
                                    {/*<i className="fa fa-fw fa-bell nav-icon"/>*/}
                                    {/*<span className="d-lg-none">پیغام ها*/}
                          {/*<span className="badge badge-pill badge-success">6</span>*/}
                        {/*</span>*/}
                                    {/*<span className="new-indicator d-none d-lg-block">*/}
                          {/*<i className="fa fa-fw fa-circle"/>*/}
                          {/*<span className="number">12</span>*/}
                        {/*</span>*/}
                                {/*</a>*/}

                                {/*<NotifsListForHeader Notifications={this.props.Notifications}/>*/}

                            {/*</li>*/}
                            <li id="tool" className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com"
                                   id="navbarUserDropdown" data-toggle="dropdown" aria-haspopup="true"
                                   aria-expanded="false">
                                    <img className="rounded-circle" src={this.state.Image} style={{height:30 , width:30 , backgroundColor:this.state.colorCode}}/>
                                    {this.state.profileInfo.first_name + ' ' + this.state.profileInfo.last_name}
                                </a>
                                <div id="profile" className="dropdown-menu" aria-labelledby="navbarUserDropdown" onClick={this.exit}>
                                    <a className="dropdown-item" >خروج</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}
Header2.contextTypes = {
    router: PropTypes.object.isRequired
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
