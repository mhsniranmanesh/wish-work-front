import React from 'react';
import {Badge , Button} from 'reactstrap';
const ProjectTemplateForFreelancer = (props) =>{
    return(
        <div>
            <div className="dash-con dash-new-project con-body mb-4">
                <h6>
                    <strong>{props.FreelancerProject.title}</strong>
                    <badge className="badge badge-doing">در حال انجام </badge>
                </h6>
                <div className="SubmittedPr">
                </div>
                <span className="sub-heading delete-project">
                </span>
                <span className="sub-heading">
                      <i className="fa fa-calendar"/>
                </span>
                <button className="btn btn-primary btn-rec" onClick={props.goToCP}>
                    کنترل پروژه
                </button>
            </div>
        </div>
    )
};

export default ProjectTemplateForFreelancer;
