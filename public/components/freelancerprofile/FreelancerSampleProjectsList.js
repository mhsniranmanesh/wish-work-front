import React from 'react';
import FreelancerSampleProjectTemplate from './FreelancerSampleProjectTemplate'

const FreelancerSampleProjectsList = ({ProjectsList}) =>{
    return(
        <div className="con mb-4">
                <h5 className="project-title">
                    پروژه ها
                </h5>
                <div className="divider"/>
                <div className="card-columns">
                {ProjectsList.map(Project =>
                <FreelancerSampleProjectTemplate key={Project.id} Project={Project}/>)}
            </div>
        </div>
    )
};

export default FreelancerSampleProjectsList