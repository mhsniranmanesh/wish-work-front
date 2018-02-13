import React from 'react';

const NameOfFreelancer = (props) => {
    return(
        <div className="col-sm-4">
            {/*<div className="con mb-4">
                <div id="inviteBtn" className="public-page-descript">
                    <i className="fa fa-user" aria-hidden="true"/> صفحه ی رسمی فریلنسر                </div>
            </div>*/}
            <div className="con mb-4">
                <h5 className="project-title">
                    تاریخچه کاری
                </h5>
                <div className="divider"/>
                <div className="sub-heading">
                    <span className="not-inline"> <strong>تعداد پروژه ها:</strong>{props.numberOfProjects}</span>
                    {/*<span className="not-inline"> <strong>درآمد:</strong> 3,500,000 تومان</span>*/}
                </div>
            </div>
        </div>
    )
};

export default NameOfFreelancer;
