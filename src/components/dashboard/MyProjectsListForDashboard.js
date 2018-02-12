import React from 'react' ;
import PropTypes from 'prop-types';
import MyProjectsTemplateDashboard from "../notifspage/MyProjectsTemplateDashboard";
import {Button} from 'reactstrap';
import arraySort from 'array-sort';
const MyProjectsListForDashboard = (props) =>{
    var Size = props.size(props.profileInfo.client_projects);
    var SizeF = props.size(props.profileInfo.freelancer_projects);
    var x,y = null;
    if(props.profileInfo.client_projects) {
         x = props.profileInfo.client_projects;
    }
    if(props.profileInfo.freelancer_projects) {
         y = props.profileInfo.freelancer_projects;
    }
    var Total;
    console.log(props.profileInfo.client_projects , 'props.profileInfo.client_projects');
    console.log(Size , 'Size');
    if(SizeF >= 3){
        y = props.profileInfo.freelancer_projects.slice(0,4);
    }
    if(Size >= 3){
        x =  props.profileInfo.client_projects.slice(0,4);
    }
    if(x && y) {
        Total = x.concat(y);
    }
    else if(x){
        Total = x;
    }
    else if(y){
        Total = y;
    }
    console.log(Total , 'Total');
    var TotalSort = arraySort(Total , 'release_time');
    console.log(TotalSort , 'TotalSort');
if(Size<4 && Size>0) {
    return (
        <div className="dash-con con-body dash-notif mb-4">
            <h5>پروژه های من</h5>
            <div className="dash-divider"/>
            {TotalSort.map((projects , index) =>
                <MyProjectsTemplateDashboard key={index} Detail={projects} profileInfo={props.profileInfo} goToCP={props.goToCP}
                                             goToMyProjectPublic={props.goToMyProjectPublic} gotoMyProjects={props.gotoMyProjects}/>
            )}
            <button className="btn btn-primary btn-rec" onClick={props.myFunc}> <i
                className="fa fa-angle-right" aria-hidden="true"/> بیشتر</button>
        </div>
    )
}
else if(Size>=4){
        return(
            <div className="dash-con con-body dash-notif mb-4">
                <h5>پروژه های من</h5>
                <div className="dash-divider"/>
                {TotalSort.map((projects , index) =>
                    <MyProjectsTemplateDashboard key={index} Detail={projects} profileInfo={props.profileInfo} goToCP={props.goToCP}
                                                 goToMyProjectPublic={props.goToMyProjectPublic} gotoMyProjects={props.gotoMyProjects}/>
                )}
                <button className="btn btn-primary btn-rec" onClick={props.myFunc}> <i
                    className="fa fa-angle-right" aria-hidden="true"/> بیشتر</button>
            </div>
        )
}
else {
    return(
        <div className="dash-con con-body dash-notif mb-4">
            <h5>پروژه های من</h5>
            <div className="dash-divider"/>
            <button className="btn btn-primary btn-rec" onClick={props.submitProject}>ثبت پروژه </button>
        </div>
    )
}
};


MyProjectsListForDashboard.PropTypes = {
    Notifications : PropTypes.object.isRequired,
    myFunc : PropTypes.func.isRequired,
};


export default MyProjectsListForDashboard;
