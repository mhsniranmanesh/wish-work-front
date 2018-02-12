import React from 'react';
import {Badge , Button} from 'reactstrap';
import moment from 'moment-jalaali';
const ProjectTemplateForFreelancer = (props) =>{
    let category ;
    var date = moment(props.FreelancerProject.release_date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss');
    console.log('props.FreelancerProject.category' , props.FreelancerProject.category);
    if(props.FreelancerProject.category === 1){
        category = 'ترجمه'
    }
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
                      <i className="fa fa-calendar"/> تاریخ ثبت پروژه:                     {date}

                </span>
                <div className="SubmittedPr"> {category}</div>
                <button className="btn btn-primary btn-rec" onClick={props.goToCP}>
                    کنترل پروژه
                </button>
            </div>
        </div>
    )
};

export default ProjectTemplateForFreelancer;
