import React from 'react';
import PropTypes from 'prop-types';
import ProjectTemplateForDashboard from './ProjectTemplateForDashboard';


const ProjectsListForDashboard = ({Projects , myFunc , goToProjectProfile , WordCount , size}) =>{
    if(Projects !== []) {
        var ProjectsArr = Projects;
        var Size = size(Projects);
        if(Size >=3){
            ProjectsArr =  Projects.slice(0,3);
        }
        return (
            <div className="dash-con dash-recoms mb-4">
                <h5>پروژه های پیشنهادی</h5>
                <div className="dash-divider"/>
                {ProjectsArr.map((ProjectDetail, index) =>
                    <ProjectTemplateForDashboard key={index} ProjectDetail={ProjectDetail}
                                                 goToProjectProfile={goToProjectProfile} WordCount={WordCount}/>
                )}
                <form onSubmit={myFunc}>

                    <button type="submit" className="btn btn-primary btn-rec">
                        <i className="fa fa-angle-right" aria-hidden="true"/> بیشتر
                    </button>
                </form>
            </div>
        )
    }
    else {
        return(
            <div className="dash-con dash-recoms mb-4">
            </div>
        )
    }
};

ProjectsListForDashboard.PropTypes = {
  Projects :  PropTypes.object.isRequired,
  myFunc : PropTypes.func.isRequired,
};


export default ProjectsListForDashboard;