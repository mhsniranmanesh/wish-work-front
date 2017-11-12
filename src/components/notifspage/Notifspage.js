import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NotificationsTemplate from './notificationsTemplate';
import * as Notifications from "../../actions/Notifications";
import NotifList from './NotifList';

class Notifspage extends React.Component{

    constructor(props, context){
        super(props , context);

    }
    render(){
    return(
      <div className="content-wrapper py-3">
      <div className="container-fluid">
          <div className="row">
              <div className="col-sm-6 d-block mx-auto">
                  <div className="dash-con dash-profile-info con-body mb-4">
                      <h5>اطلاعیه ها</h5>
                      {/*<div className="dash-divider"/>*/}
                      {/*<a className="notif" href="#">*/}
                          {/*<span className="notif-cat notif-project">{this.props.Notifications.Title}</span>*/}
                          {/*<div className="notif-txt">{this.props.Notifications.Description}</div>*/}
                          {/*<span className="text-muted">{this.props.Notifications.ReleaseTime}</span>*/}
                      {/*</a>*/}
                      <div className="dash-divider"/>
                            <NotifList Notifications={this.props.Notifications}/>

                    {/*<NotificationsTemplate descriptionFor={' ' + this.props.Notifications.descriptionFor} timeRelease={this.props.Notifications.ReleaseTime} Title={this.props.Notifications.Title}/>*/}
                    {/*<NotificationsTemplate descriptionFor={' ' + this.props.Notifications.descriptionFor} timeRelease={this.props.Notifications.ReleaseTime} Title={this.props.Notifications.Title}/>*/}

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

Notifspage.PropTypes ={
  Notifications  : PropTypes.object.isRequired,
  actions : PropTypes.object.isRequired,
};
function mapStateToProps(state , ownProps) {
    return{
        Notifications : state.Notifications,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Notifications, dispatch)
    };
}

export default connect(mapStateToProps , mapDispatchToProps)(Notifspage) ;
