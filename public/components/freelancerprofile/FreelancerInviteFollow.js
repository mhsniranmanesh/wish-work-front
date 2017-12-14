import React from 'react';

const FreelancerInviteFollow = ({props}) =>{
    return(
        <div className="col-sm-4">
            <div className="con mb-4">
                <button id="inviteBtn" type="submit" className="btn btn-primary btn-rec mb-3">
                    دعوت به همکاری
                </button>
                <button id="followBtn" type="submit" className="btn btn-success btn-rec mb-3">
                    دنبال کردن
                </button>
            </div>
            <div className="con mb-4">
                <h5 className="project-title">
                    تاریخچه کاری
                </h5>
                <div className="divider"/>
                <div className="sub-heading">
                    <span className="not-inline"> <strong>تعداد پروژه ها:</strong> <a href="#">12</a></span>
                    <span className="not-inline"> <strong>درآمد:</strong> 3,500,000 تومان</span>
                </div>
            </div>
        </div>
    )
};

export default FreelancerInviteFollow