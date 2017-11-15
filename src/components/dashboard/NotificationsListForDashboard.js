import React from 'react' ;
import PropTypes from 'prop-types';
import NotificationTemplate from "../notifspage/notificationsTemplate";
import {Button} from 'reactstrap';

const NotificationsListForDashboard = ({Notifications , myFunc}) =>{

    return (

            <div className="dash-con con-body dash-notif mb-4">
                <h5>اطلاعیه های جدید</h5>
                <div className="dash-divider"/>
                {Notifications.map(Notification =>
                    <NotificationTemplate key={Notification.id} Notification ={Notification}/>
                )}
                <Button color="primary" className="btn btn-primary btn-rec" onClick={myFunc}> <i className="fa fa-angle-right" aria-hidden="true"/> بیشتر</Button>
            </div>


    )
};


NotificationsListForDashboard.PropTypes = {
    Notifications : PropTypes.object.isRequired,
    myFunc : PropTypes.func.isRequired
};


export default NotificationsListForDashboard;