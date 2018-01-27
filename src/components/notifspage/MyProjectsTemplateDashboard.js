import React from 'react';
import  PropTypes from 'prop-types';
import {Button , Badge} from 'reactstrap';

const MyProjectsTemplateDashboard = (props) => {
var y = props.Detail.slug;
    return(
        <div onClick={(event)=>{props.goToMyProjectPublic(y);}}>
            <a className="notif" >
                <Badge color="primary">پروژه ثبت شده توسط شما</Badge>
                <div className="notif-txt"> {props.Detail.title }
                    <Button className="dashboard-my-projects">رفتن به صفحه ی پروژه</Button>
                </div>
            </a>

            <div className="dash-divider"/>
        </div>
    )
};

MyProjectsTemplateDashboard.PropTypes = {
    Notification: PropTypes.object.isRequired,
};

export default MyProjectsTemplateDashboard;