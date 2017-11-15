import React from 'react';
import PropTypes from 'prop-types';
import NotifsTemplateForHeader from './NotifsTemplateForHeader';

const NotifsLisForHeader = ({Notifications}) => {
    return (
        <div className="dropdown-menu" aria-labelledby="alertsDropdown">
            <h6 className="dropdown-header">پیغام های جدید:</h6>
            <div className="dropdown-divider"/>
            {Notifications.map(Notification =>
                <NotifsTemplateForHeader key={Notification.id} Notification = {Notification} />
            )}
        </div>
    )
};

NotifsLisForHeader.PropTypes = {
    Notifications : PropTypes.object.isRequired
};

export default NotifsLisForHeader;