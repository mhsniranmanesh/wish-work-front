import React from 'react';
import  PropTypes from 'prop-types';
import {Button , Badge} from 'reactstrap';

const MyProjectsTemplateDashboard = (props) => {
var y = props.Detail.slug;
    return(
        <div onClick={(event)=>{props.goToMyProjectPublic(y);}}>
            <a className="notif" >
                <Badge color="primary" className="badge-client" > کارفرما</Badge>
                <span className="notif-txt">
                   {props.Detail.title }
                 </span>
                <span>
                    <Button className="dashboard-my-projects" id="dashboard-my-projects">   صفحه ی پروژه</Button>
                </span>
            </a>

            <div className="dash-divider"/>
        </div>
    )
};

MyProjectsTemplateDashboard.PropTypes = {
    Notification: PropTypes.object.isRequired,
};

export default MyProjectsTemplateDashboard;
