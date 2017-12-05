import React from 'react';

const FreelancerSampleProjectTemplate = ({Project}) =>{
    return(
        <div className="card">
            <div className="card-body">
                <h4 className="card-title"><a href="#">{Project.Title}</a></h4>
                <p className="card-text">{Project.Describtion}</p>
                <p className="card-text"><small className="text-muted">{Project.ReleaseTime}</small></p>
            </div>
        </div>
    )
};

export default FreelancerSampleProjectTemplate;