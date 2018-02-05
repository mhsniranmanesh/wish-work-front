import React from 'react';

const ProjectTemplate = (props)=>{
    var x = [];
    if(props.AsFreelancerProject) {
        if(props.AsFreelancerProject.category === 1){
            x = 'پروژه ی ترجمه'
        }
        return (
            <li className="contact active" onClick={(event) => {props.changeView(props.numberSee);}}>
                <div className="wrap d-flex flex-row">
                    <div className="meta">
                        <p className="name">{props.AsFreelancerProject.title}</p>
                        <span className="badge badge-pill badge-success">در حال انجام</span>
                        <p className="time">فریلنسر</p>
                        <p className="preview">{x}</p>
                    </div>
                </div>
            </li>
        )
    }
    else if(props.AsClientProject){
        if(props.AsClientProject.category === 1){
            x = 'پروژه ی ترجمه'
        }
        return (
            <li className="contact active" onClick={(event) => {props.changeView(props.numberSee);}}>
                <div className="wrap d-flex flex-row">
                    <div className="meta">
                        <p className="name">{props.AsClientProject.title}</p>
                        <span className="badge badge-pill badge-success">در حال انجام</span>
                        <p className="time">مشتری</p>
                        <p className="preview">{x}</p>
                    </div>
                </div>
            </li>
        )
    }
    else {
        return null;
    }
};

export default ProjectTemplate;