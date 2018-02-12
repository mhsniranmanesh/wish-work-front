import React from 'react';
import {Badge , Button} from 'reactstrap';
const ProjectTemplateForFreelancer = (props) =>{
    return(
        <div>
            <div className="dash-con dash-new-project con-body mb-4">
                <h6>
                    <strong>{props.FreelancerProject.title}</strong>
                    <Badge color="success" pill>در حال انجام</Badge>
                </h6>
                <div className="SubmittedPr">
                </div>
                <span className="sub-heading delete-project">
</span>
                <span className="sub-heading">
                            <i className="fa fa-calendar"/>
            </span>
                <Button color="primary" className="btn btn-primary btn-rec" onClick={props.goToCP}>
                    کنترل پروژه
                </Button>
            </div>
        </div>
    )
};

export default ProjectTemplateForFreelancer;
