import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as profileInfo from '../../actions/profileInfo.js';
import {bindActionCreators} from 'redux';
import * as recomendedProject from '../../actions/recomendedProjectForFreelancer.js';
import DashboardProjectSubmission from "./DashboardProjectSubmisson";
import ProjectsListForDashboard from './ProjectsListForDashboard';


class Dashboard extends React.Component{
  constructor(props , context){
    super(props , context);

    this.gotoRecomendedProjects = this.gotoRecomendedProjects.bind(this);
    this.submitProject = this.submitProject.bind(this);
  }
  // profileRow(profileInfo , index){
  //   return <div key={index}>{profileInfo.first_name +' '+ profileInfo.last_name}</div>;
  // }
    submitProject(event){
        event.preventDefault();
        this.context.router.history.push('/projectsubmition');
    }

    gotoRecomendedProjects(event){
        event.preventDefault();
        this.context.router.history.push('/recomendedprojects');
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
                              <img src="http://via.placeholder.com/125x125" className="rounded-circle"/>
                              <h5> {this.props.profileInfo.first_name + ' ' + this.props.profileInfo.last_name} </h5>
                              <h6 className="dash-profile-stars">
                            <i className="fa fa-star shine-on"/>
                            <i className="fa fa-star shine-on"/>
                            <i className="fa fa-star shine-on"/>
                            <i className="fa fa-star-o shine-on"/>
                            <i className="fa fa-star-o shine-on"/>
                          </h6>
                          </div>
                      </div>
                  </div>
                 <DashboardProjectSubmission myFunc={this.submitProject}/>
              </div>
              <div className="col-sm-7">
                  <div className="dash-con con-body dash-notif mb-4">
                      <h5>اطلاعیه های جدید</h5>
                      <div className="dash-divider"/>
                      <a className="notif" href="#">
                          <span className="notif-cat notif-project">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"/>
                      <a className="notif" href="#">
                          <span className="notif-cat notif-msg">پیام</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <div className="dash-divider"/>
                      <a className="notif" href="#">
                          <span className="notif-cat notif-project">پروژه</span>
                          <div className="notif-txt">چهار روز دیگر تا اتمام مهلت ارسال پروژه ی "متن حرفه ای در زمینه زیست شناسی مولوکولی". چهار روز دیگر تا اتمام مهلت ارسال پروژه.</div>
                          <span className="text-muted">12:12</span>
                      </a>
                      <button type="submit" className="btn btn-primary btn-rec">
                        <i className="fa fa-angle-right" aria-hidden="true"/> بیشتر
                      </button>
                  </div>
                  {/*<div className="dash-con dash-recoms mb-4">*/}
                      {/*<h5>پروژه های پیشنهادی</h5>*/}
                      {/*<div className="dash-divider"/>*/}

                            <ProjectsListForDashboard Projects={this.props.recomendedProject} myFunc={this.gotoRecomendedProjects}/>

                      {/*<div className="dash-recom-item price-good">*/}
                          {/*<a href="#">*/}
                              {/*<h6><strong>{this.props.recomendedProject.title}</strong></h6>*/}
                          {/*</a>*/}
                          {/*<span className="sub-heading">*/}
                            {/*<a className="tag" href="#">{this.props.recomendedProject.tags}</a>*/}
                          {/*</span>*/}
                          {/*<div className="sub-heading">*/}
                              {/*<i className="fa fa-user"/> <a href="#">4/5</a>*/}
                              {/*<i className="fa fa-usd"/> {this.props.recomendedProject.price}*/}
                              {/*<i className="fa fa-clock-o"/> {this.props.recomendedProject.releaseTime}*/}
                          {/*</div>*/}
                      {/*</div>*/}
                      {/*<div className="dash-divider"/>*/}
                      {/*<div className="dash-recom-item price-fair">*/}
                          {/*<a href="#">*/}
                              {/*<h6><strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong></h6>*/}
                          {/*</a>*/}
                          {/*<span className="sub-heading">*/}
                            {/*<a className="tag" href="#">#فارسی_به_انگلیسی</a>*/}
                            {/*<a className="tag" href="#">#علمی</a>*/}
                            {/*<a className="tag" href="#">#زیست_شناسی</a>*/}
                            {/*<a className="tag" href="#">#میکرو_بیولوژی</a>*/}
                            {/*<a className="tag" href="#">#فوری</a>*/}
                          {/*</span>*/}
                          {/*<div className="sub-heading">*/}
                              {/*<i className="fa fa-user"/> <a href="#">4/5</a>*/}
                              {/*<i className="fa fa-usd"/> 2,000,000 تومان*/}
                              {/*<i className="fa fa-clock-o"/> دو ساعت قبل*/}
                          {/*</div>*/}
                      {/*</div>*/}
                      {/*<div className="dash-divider"/>*/}
                      {/*<div className="dash-recom-item price-low">*/}
                          {/*<a href="#">*/}
                              {/*<h6><strong>متن آکادمیک فوری، در حوزه ی زیست شناسی</strong></h6>*/}
                          {/*</a>*/}
                          {/*<span className="sub-heading">*/}
                            {/*<a className="tag" href="#">#فارسی_به_انگلیسی</a>*/}
                            {/*<a className="tag" href="#">#علمی</a>*/}
                            {/*<a className="tag" href="#">#زیست_شناسی</a>*/}
                            {/*<a className="tag" href="#">#میکرو_بیولوژی</a>*/}
                            {/*<a className="tag" href="#">#فوری</a>*/}
                          {/*</span>*/}
                          {/*<div className="sub-heading">*/}
                              {/*<i className="fa fa-user"/> <a href="#">4/5</a>*/}
                              {/*<i className="fa fa-usd"/> 2,000,000 تومان*/}
                              {/*<i className="fa fa-clock-o"/> دو ساعت قبل*/}
                          {/*</div>*/}
                      {/*</div>*/}
                      {/*<form action="dashboard-project-recoms.html">*/}
                          {/*<button type="submit" className="btn btn-primary btn-rec">*/}
                              {/*<i className="fa fa-angle-right" aria-hidden="true"/> بیشتر*/}
                          {/*</button>*/}
                      {/*</form>*/}
                  {/*</div>*/}
              </div>
          </div>
      </div>
  </div>
      </div>
    );
  }
}

Dashboard.contextTypes = {
    router: PropTypes.object.isRequired
};

Dashboard.PropTypes = {
    profileInfo: PropTypes.array.isRequired,
    recomendedProject: PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired
};

function mapStateToProps(state , ownProps){
  return{
        profileInfo : state.profileInfo,
        recomendedProject : state.recomendedProject
  };
}
function mapDispatchToProps(dispatch){
  return{
  actions : bindActionCreators(profileInfo , recomendedProject , dispatch)
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Dashboard);
