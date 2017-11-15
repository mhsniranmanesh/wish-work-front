import React from 'react';
import PropTypes from 'prop-types';

const NotifsTemplateForHeader = ({Notification}) => {

    return(
        <div>
            <a className="dropdown-item" href="#">
                <div className="dropdown-message small">{Notification.descriptionFor} 
                </div>
                <span className="small text-muted">{Notification.ReleaseTime}</span>
            </a>
            <div className="dropdown-divider"/>
        </div>
    )
};

NotifsTemplateForHeader.PropTypes ={
    Notification : PropTypes.object.isRequired
};

export default NotifsTemplateForHeader;