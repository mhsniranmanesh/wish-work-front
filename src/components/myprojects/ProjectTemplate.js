import React from 'react';
import PropTypes from 'prop-types';

const ProjectTemplate = (props ) => {
    var x = "" ;
    var XClass = "";
    var XButtonName = "";
    var XHref = "#";
    if(props.ClientProjects.is_banned){
        x="مصدود شده";
        XClass = "badge badge-primary"
    }
    else {
        if(!props.ClientProjects.is_verified){
            x = "در انتظار تایید";
            XClass = "badge badge-primary";
        }
        else if ((!props.ClientProjects.is_started) && props.ClientProjects.is_verified) {
            x = "در حال مناقصه";
            XClass = "badge badge-primary";
            XButtonName = "صفحه ی مناقصه";

        }
        else if (props.ClientProjects.is_started && (!props.ClientProjects.is_completed)) {
            x = "در حال انجام";
            XClass = "badge badge-primary";
            XButtonName = "کنترل پروژه"
        }
        else if(props.ClientProjects.is_completed){
            x = "انجام شده";
            XClass = "badge badge-primary";
            XButtonName = "مشاهده فایل ها"
        }

            }
    return (
        <div className="dash-con dash-new-project con-body mb-4">
            <h6>
                {/*<strong>{ProjectSubmitted.title}</strong>*/}
                <strong>{props.ClientProjects.title}</strong>
                <span className={XClass}>{x}</span>
                {/*<span>{ProjectSubmitted.badge}</span>*/}
            </h6>

            <h6 className="beauty-text dash-recom-item-discription">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد ...
            </h6>
            {/*<h6 className="beauty-text dash-recom-item-discription">*/}
                {/*{ProjectSubmitted.description}*/}
            {/*</h6>*/}
            <span className="sub-heading">
                            <i className="fa fa-calendar"/> ۱۳۹۶/۵/۹
                        </span>
            {/*<span className="sub-heading">*/}
                            {/*<i className="fa fa-calendar"/> {ProjectSubmitted.ReleaseTime}*/}
                        {/*</span>*/}
            {/*<button type="submit" className="btn btn-primary btn-rec">*/}
                {/*کنترل پروژه*/}
            {/*</button>*/}

            <button type="submit" className="btn btn-primary btn-rec">
                {XButtonName}            </button>
        </div>
    )
};
ProjectTemplate.PropTypes = {
    goToProjectAuctionPage : PropTypes.func.isRequired
};

export default ProjectTemplate;