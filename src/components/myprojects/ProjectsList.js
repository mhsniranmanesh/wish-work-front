import React from 'react';
import ProjectTemplate from './ProjectTemplate';
import PropTypes from 'prop-types';
import ProjectTemplateForFreelancer from './ProjectTemplateForFreelancer';

const ProjectsList = (props) =>{
    //console.log('ClientProjectsK' , props.ClientProjects);

    if(props.ClientProjects) {
        return (
            <div>
                {props.ClientProjects.map(
                    ClientProjects =>
                        <ProjectTemplate key={ClientProjects.uuid} deleteProject={props.deleteProject}
                                         ClientProjects={ClientProjects} goToTender={props.goToTender} goToCP={props.goToCP}/>
                )}
            </div>
        )
    }
    else if(props.FreelancerProjects) {
        return(
            <div>
            {props.FreelancerProjects.map(FreelancerProject =>
                <ProjectTemplateForFreelancer key={FreelancerProject.uuid} goToCP={props.goToCP} FreelancerProject={FreelancerProject}/>
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
    ClientProjects: PropTypes.object.isRequired,
    goToCash : PropTypes.func.isRequired
};

export default ProjectsList;