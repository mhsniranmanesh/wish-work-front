import React from 'react';

const notificationsTemplate = (props) =>{
    return(

        <div>
            <a className="notif" href="#">
                <span className="notif-cat notif-project">{props.title}</span>
                <div className="notif-txt">{props.description}</div>
                <span className="text-muted">{props.timeRelease}</span>
            </a>
            <div className="dash-divider"/>
        </div>
    )
};


export default notificationsTemplate