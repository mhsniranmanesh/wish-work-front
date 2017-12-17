import React from 'react';
import ProjectTemplate from './ProjectTemplate';

const ProjectsList = ({props}) =>{
    return(
        <div>
            {props.ProjectsSubmitted.map(
                ProjectSubmitted =>
                    <ProjectTemplate key={ProjectSubmitted.id} ProjectSubmitted = {ProjectSubmitted}/>
            )}
        </div>
    )
};

export default ProjectsList;