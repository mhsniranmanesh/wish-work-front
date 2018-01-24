import React from 'react';
import PropTypes from 'prop-types';
import ProjectTemplate from './ProjectTemplate';

const ProjectsList = ({Projects , goToProjectProfile}) =>{
    if(Projects) {
        return (
            <div>
                {Projects.map((ProjectDetail, index) =>
                    <ProjectTemplate key={index} ProjectDetail={ProjectDetail} goToProjectProfile={goToProjectProfile}/>
                )}
            </div>
        )
    }
    else {
        return(
            null
        )
    }
};

ProjectsList.PropTypes = {
  Projects : PropTypes.object.isRequired
};

export default ProjectsList;