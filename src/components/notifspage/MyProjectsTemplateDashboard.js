import React from 'react';
import  PropTypes from 'prop-types';
import {Button , Badge} from 'reactstrap';

const MyProjectsTemplateDashboard = (props) => {
var y = props.Detail.slug;
var x,z;
    if(props.profileInfo.username === props.Detail.client){
      x = 'فریلنسر';
      z = 'success';
    }
    else {
      x = 'کارفرما';
      z = 'primary';
    }
    return(
        <div onClick={(event)=>{props.goToMyProjectPublic(y);}}>
            <a className="notif" >
                <Badge color={z}  pill> {x}</Badge>
                <span className="notif-txt">
                   {props.Detail.title }
                 </span>
                <span>
                    <Button className="dashboard-my-projects" id="dashboard-my-projects">رفتن به صفحه ی پروژه</Button>
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
