import React from 'react';
import ReactDOM from 'react-dom';
// import 'dva-reducer';
// import 'redux-thunk';
// import 'redux-router';
// import 'reducers/index.js';
// import 'react-redux'; //layout or MainContentWrapper
//
// import Profile from '../../components/ProjectSubmitionForm/ProjectSubmitionForm.js';
// import thunk from "redux-thunk"; //store
// import promise from 'redux-promise-middleware'; //store
// import {applyMiddleware , createStore } from 'redux'  //store
// export default function reducer(state={
//   user: {
//     name : "Amirhosein"
//     lastname: "Shirani"
//     id:"1"
//   },
//   fetching: false,
//   fetched: false,
//   error: null
// } , action){
//   switch (action.type) {
//     case : "FETCH_USER":{
//       return{...state, fetching:true}
//     }
//     case : "FETCH_USER_REJECTED"
//       return{...state, fetching: false}
//
//   }
// }
// export function changetoprofile(){
//   return function(dispatch){
//     //axios.get
//     <Profile/>
//   }
// }
//
//
//
//
//
// const store = createStore(reducer, 0);
//
// store.dispatch({type: "INCREMENT" , payload:1})
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






class SideNavbar extends React.Component{
  constructor(props){
    super(props);
    this.state = { Projectsublitionform : 'ایجاد پروژه' , Dashboard : 'داشبورد'}
  }
  render(){
    return(
      <div>
        <ul className="navbar-nav navbar-sidenav">
          <li className="nav-item active" data-toggle="tooltip" data-placement="right" title="داشبورد">
            <a className="nav-link" href="#">
              <i className="fa fa-fw fa-dashboard"></i>
              <span className="nav-link-text">{this.state.Dashboard}</span>
            </a>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-placement="right" title="پروژه">
            <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents">
              <i className="fa fa-fw fa-tasks"></i>
              <span className="nav-link-text">پروژه</span>
            </a>
            <ul className="sidenav-second-level collapse" id="collapseComponents">
              <li>
                <a href="dashboard-project-new.html">{this.state.Projectsublitionform}</a>
              </li>
              <li>
                <a href="dashboard-project-recoms.html">دریافت پروژه</a>
              </li>
              <li>
                <a href="#">کنترل پروژه</a>
              </li>
              <li>
                <a href="#">پروژه های سابق</a>
              </li>
            </ul>
          </li>
          <li className="nav-item" data-toggle="tooltip" data-placement="right" title="پروفایل">
            <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#profileComponents">
              <i className="fa fa-fw fa-user"></i>
              <span className="nav-link-text">پروفایل</span>
            </a>
            <ul className="sidenav-second-level collapse" id="profileComponents">
              <li>
                <a href="dashboard-profile-info.html">ویرایش اطلاعات</a>
              </li>
              <li>
                <a href="dashboard-profile-notif.html">اطلاعیه ها</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="navbar-nav navbar-sidenav sidenav-toggler">
          <li className="nav-item">
            <a className="nav-link text-center" id="sidenavToggler">
              <i className="fa fa-fw fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
module.exports = SideNavbar;
