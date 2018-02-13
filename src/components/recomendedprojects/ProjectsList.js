import React from 'react';
import PropTypes from 'prop-types';
import ProjectTemplate from './ProjectTemplate';

const ProjectsList = ({Projects , goToProjectProfile}) =>{
    if(Projects.length) {
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
           <div>
               <br/>
               <h6 className="form-header-fontsize">در حال حاضر پروژه ی پیشنهادی برای شما وجود ندارد :(</h6>
           </div>
        )
    }
};

ProjectsList.PropTypes = {
  Projects : PropTypes.object.isRequired
};

export default ProjectsList;
