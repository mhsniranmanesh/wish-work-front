import React from 'react';
import PropTypes from 'prop-types';
import NotificationsTemplate from './MyProjectsTemplateDashboard';

const NotifList = ({Notifications}) => {
    return (
        <div>
    {Notifications.map(Notification =>
        <NotificationsTemplate key={Notification.id} Notification={Notification}/>
        )}
        </div>

    )
};

NotifList.PropTypes ={
    Notifications: PropTypes.object.isRequired
};

export default NotifList;