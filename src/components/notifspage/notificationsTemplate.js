import React from 'react';
import  {PropTypes} from 'prop-types';

const NotificationsTemplate = ({Notification}) => {

    return(
        <div>
            <a className="notif" href="#">
                <span className="notif-cat notif-project">{Notification.Title}</span>
                <div className="notif-txt">{Notification.descriptionFor}</div>
                <span className="text-muted">{Notification.timeRelease}</span>
            </a>
            <div className="dash-divider"/>
        </div>
    )
};

NotificationsTemplate.PropTypes = {
    Notification: PropTypes.object.isRequired
};

export default NotificationsTemplate;