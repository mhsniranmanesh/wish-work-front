import React from 'react';
import PropTypes from 'prop-types';
import ProjectTemplate from './ProjectTemplate';

const ProjectsList = ({Projects}) =>{
    return(
              <div>
                  {Projects.map(ProjectDetail =>
                      <ProjectTemplate key={ProjectDetail.id} ProjectDetail={ProjectDetail}/>
                  )}
              </div>
    )
};

ProjectsList.PropTypes = {
  Projects : PropTypes.object.isRequired
};

export default ProjectsList;