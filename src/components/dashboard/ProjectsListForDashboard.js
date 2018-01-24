import React from 'react';
import PropTypes from 'prop-types';
import ProjectTemplateForDashboard from './ProjectTemplateForDashboard';

const ProjectsListForDashboard = ({Projects , myFunc}) =>{
    return (
        <div className="dash-con dash-recoms mb-4">
            <h5>پروژه های پیشنهادی</h5>
            <div className="dash-divider"/>
            {Projects.map((ProjectDetail , index) =>
                <ProjectTemplateForDashboard key={index} ProjectDetail = {ProjectDetail}/>
                
            )}
            <form onSubmit={myFunc}>

                <button type="submit" className="btn btn-primary btn-rec">
                    <i className="fa fa-angle-right" aria-hidden="true"/> بیشتر
                </button>
            </form>
        </div>
    )
};

ProjectsListForDashboard.PropTypes = {
  Projects :  PropTypes.object.isRequired,
  myFunc : PropTypes.func.isRequired
};


export default ProjectsListForDashboard;