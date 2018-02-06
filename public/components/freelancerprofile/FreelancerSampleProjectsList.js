import React from 'react';
import FreelancerSampleProjectTemplate from './FreelancerSampleProjectTemplate'

const FreelancerSampleProjectsList = ({ProjectsList}) =>{
    if(ProjectsList) {
        return (
            <div className="con mb-4">
                <h5 className="project-title">
                    پروژه ها
                </h5>
                <div className="divider"/>
                <div className="card-columns">
                    {ProjectsList.map(Project =>
                        <FreelancerSampleProjectTemplate key={Project.uuid} Project={Project}/>)}
                </div>
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
};


export default FreelancerSampleProjectsList