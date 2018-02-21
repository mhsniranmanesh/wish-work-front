import React from 'react';
import  PropTypes from 'prop-types';
import {Button , Badge} from 'reactstrap';

const MyProjectsTemplateDashboard = (props) => {
var y = props.Detail.slug;
var x,z;
    if(props.profileInfo.username === props.Detail.client){
      z = 'success';
        x = 'کارفرما';

    }
    else {
        x = 'فریلنسر';
        z = 'primary';
    }
    // return(
    //     <div onClick={(event)=>{props.goToMyProjectPublic(y);}}>
    //         <a className="notif" >
    //             <Badge color={z}  pill> {x}</Badge>
    //             <span className="notif-txt">
    //                {props.Detail.title }
    //              </span>
    //             <span>
    //                 <Button className="dashboard-my-projects" id="dashboard-my-projects">   صفحه ی پروژه</Button>
    //             </span>
    //         </a>

    if((props.Detail.is_canceled)){
        return (
            <div onClick={(event) => {
                props.goToMyProjectPublic(y);
            }}>
                <a className="notif">
                    <Badge color='danger' pill className="badge-cancel"> لغو شده</Badge>
                    <span className="notif-txt">
                       {props.Detail.title}
                     </span>
                    <span>
                        <Button className="dashboard-my-projects" id="dashboard-my-projects">   صفحه ی پروژه</Button>
                    </span>
                </a>

                <div className="dash-divider"/>
            </div>
        )
    }

      else if(props.profileInfo.username === props.Detail.client){

        if((!props.Detail.is_started) && (!props.Detail.is_completed) && (!props.Detail.is_canceled)) {
            return (
                <div onClick={(event) => {
                    props.goToMyProjectPublic(y);
                }}>
                    <a className="notif">
                        <Badge color='success' pill className="badge-freelancer"> کارفرما</Badge>
                        <span className="notif-txt">
                       {props.Detail.title}
                     </span>
                        <span>
                        <Button className="dashboard-my-projects" id="dashboard-my-projects">   صفحه ی پروژه</Button>
                    </span>
                    </a>

                    <div className="dash-divider"/>
                </div>
            )
        }
        else if(props.Detail.is_started && (!props.Detail.is_completed)  && (!props.Detail.is_canceled)){
            return (
                <div onClick={(event) => {
                    props.goToCP();
                }}>
                    <a className="notif">
                        <Badge color='success' pill className="badge-freelancer"> کارفرما</Badge>
                        <span className="notif-txt">
                       {props.Detail.title} (شروع شده)
                     </span>
                        <span>
                        <Button className="dashboard-my-projects" id="dashboard-my-projects">   صفحه ی پروژه</Button>
                    </span>
                    </a>

                    <div className="dash-divider"/>
                </div>
            )
        }
        else if(props.Detail.is_started && (props.Detail.is_completed)  && (!props.Detail.is_canceled)){
            return (
                <div onClick={(event) => {
                    props.goToCP();
                }}>
                    <a className="notif">
                        <Badge color='success' pill className="badge-freelancer"> پایان یافته</Badge>
                        <span className="notif-txt">
                       {props.Detail.title}
                     </span>
                        <span>
                        <Button className="dashboard-my-projects" id="dashboard-my-projects">   صفحه ی پروژه</Button>
                    </span>
                    </a>

                    <div className="dash-divider"/>
                </div>
            )
        }

    }
        else {
        if (props.Detail.is_started && (!props.Detail.is_completed) && (!props.Detail.is_canceled)) {
            return (
                <div onClick={(event) => {
                    props.goToCP();
                }}>
                    <a className="notif">
                        <Badge color='success' pill className="badge-freelancer"> کارفرما</Badge>
                        <span className="notif-txt">
                       {props.Detail.title} (شروع شده)
                     </span>
                        <span>
                        <Button className="dashboard-my-projects" id="dashboard-my-projects">   صفحه ی پروژه</Button>
                    </span>
                    </a>

                    <div className="dash-divider"/>
                </div>
            )
        }
        else {
            return (
                <div onClick={(event) => {
                    props.goToCP();
                }}>
                    <a className="notif">
                        <Badge color='primary' pill className="badge-client"> فریلنسر</Badge>
                        <span className="notif-txt">
                       {props.Detail.title}
                     </span>
                        <span>
                        <Button className="dashboard-my-projects" id="dashboard-my-projects">   صفحه ی پروژه</Button>
                    </span>
                    </a>

                    <div className="dash-divider"/>
                </div>
            )
        }
    }
};

MyProjectsTemplateDashboard.PropTypes = {
    Notification: PropTypes.object.isRequired,
};

export default MyProjectsTemplateDashboard;
