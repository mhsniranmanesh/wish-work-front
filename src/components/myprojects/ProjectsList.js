import React from 'react';
import ProjectTemplate from './ProjectTemplate';
import PropTypes from 'prop-types';

const ProjectsList = (props) =>{
    console.log('ClientProjectsK' , props.ClientProjects);

    if(props.ClientProjects) {
        return (
            <div>
                {props.ClientProjects.map(
                    ClientProjects =>
                        <ProjectTemplate key={ClientProjects.uuid} ClientProjects={ClientProjects} />
                )}
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
};
ProjectsList.PropTypes = {
    ClientProjects: PropTypes.object.isRequired
};

export default ProjectsList;