import React from 'react';
import {Badge} from 'reactstrap';

const FreelancerSampleProjectTemplate = ({Project}) =>{
    if(Project.is_completed) {
        return (
            <div className="card">
                <div className="card-body">
                <span>
                <h4 className="card-title"><i className="fa fa-pencil translation-pencil-public"/> {Project.title}</h4>
                </span>
                    <Badge color="primary">انجام شده</Badge>
                    {/*<p className="card-text">{Project.Describtion}</p>*/}
                    {/*<p className="card-text"><small className="text-muted">{Project.ReleaseTime}</small></p>*/}
                </div>
            </div>
        )
    }
    else if(!(Project.is_completed) && Project.is_started){
        return (
            <div className="card">
                <div className="card-body">
                <span>
                <h4 className="card-title"><i className="fa fa-pencil translation-pencil-public"/> {Project.title}</h4>
                </span>
                    <Badge color="success">در حال انجام</Badge>

                    {/*<p className="card-text">{Project.Describtion}</p>*/}
                    {/*<p className="card-text"><small className="text-muted">{Project.ReleaseTime}</small></p>*/}
                </div>
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
};

export default FreelancerSampleProjectTemplate;