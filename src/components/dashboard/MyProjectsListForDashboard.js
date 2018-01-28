import React from 'react' ;
import PropTypes from 'prop-types';
import MyProjectsTemplateDashboard from "../notifspage/MyProjectsTemplateDashboard";
import {Button} from 'reactstrap';

const MyProjectsListForDashboard = (props) =>{
    var Size = props.size(props.profileInfo.client_projects);
    var x;
    if(Size > 3){
        x =  props.profileInfo.client_projects.slice(0,3);
    }
if(Size<3 && Size>0) {
    return (
        <div className="dash-con con-body dash-notif mb-4">
            <h5>پروژه های من</h5>
            <div className="dash-divider"/>
            {props.profileInfo.client_projects.map((projects , index) =>
                <MyProjectsTemplateDashboard key={index} Detail={projects}  goToMyProjectPublic={props.goToMyProjectPublic}/>
            )}
            <button className="btn btn-primary btn-rec" onClick={props.myFunc}> <i
                className="fa fa-angle-right" aria-hidden="true"/> بیشتر</button>
        </div>
    )
}
else if(Size>3){
        return(
            <div className="dash-con con-body dash-notif mb-4">
                <h5>پروژه های من</h5>
                <div className="dash-divider"/>
                {x.map((projects , index) =>
                    <MyProjectsTemplateDashboard key={index} Detail={projects} goToMyProjectPublic={props.goToMyProjectPublic}/>
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

        </div>
    )
}
};


MyProjectsListForDashboard.PropTypes = {
    Notifications : PropTypes.object.isRequired,
    myFunc : PropTypes.func.isRequired,
};


export default MyProjectsListForDashboard;
