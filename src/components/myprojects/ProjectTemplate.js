import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-jalaali';
import {Button , Badge , Alert} from 'reactstrap';
//import Moment from 'react-moment';

const ProjectTemplate = (props) => {
    var x = "";
    // console.log(props.ClientProjects.release_date,'release date');
    moment.loadPersian({usePersianDigits: true});
    var date = moment(props.ClientProjects.release_date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss');
    // console.log(date , 'date');
    var XClass = "";
    var XButtonName = "";
    var XHref = props.ClientProjects;
    var y = props.ClientProjects.slug;
    //console.log(date , 'datedatedate');
    if (props.ClientProjects.is_banned) {
        x = "مسدود شده";
        XClass = "badge badge-banned";
    }
    else {
        if (!props.ClientProjects.is_verified) {
            x = "در انتظار تایید";
            XClass = "badge badge-neutral";
        }
        else if ((!props.ClientProjects.is_started) && props.ClientProjects.is_verified) {
            x = "در حال مناقصه";
            XClass = "badge badge-during-auction";
            XButtonName = "صفحه ی مناقصه";
        }
        else if (props.ClientProjects.is_started && (!props.ClientProjects.is_completed)) {
            x = "در حال انجام";
            XClass = "badge badge-doing";
            XButtonName = "کنترل پروژه"
        }
        else if ((props.ClientProjects.is_canceled)){
            x = "لغو شده";
            XClass = "badge badge-cancel";
            XButtonName = "کنترل پروژه"

        }
        else if (props.ClientProjects.is_completed) {
            x = "انجام شده";
            XClass = "badge badge-done";
            XButtonName = "مشاهده فایل ها"
        }

    }
    if (!props.ClientProjects.is_verified) {
        return (
            <div>
                <div className="dash-con dash-new-project con-body mb-4">
                    <h6>
                        <strong>{props.ClientProjects.title}</strong>
                        <badge className={XClass}>{x}</badge>
                    </h6>
                    <div className="SubmittedPr">
                        <p >
                            لطفا منتظر تایید پروژه باشید.
                        </p>
                    </div>
                    <span className="sub-heading delete-project">
                        <i className="fa fa-trash-o" onClick={(event)=>{props.deleteProject(props.ClientProjects.uuid);}}><a> پاک کردن پروژه</a></i>
</span>
                    <span className="sub-heading">
                            <i className="fa fa-calendar"/>  ثبت شده در {date}
            </span>
                </div>
            </div>
        )
    }
    else if ((!props.ClientProjects.is_started) && props.ClientProjects.is_verified) {
        return (
            <div>
                <div className="dash-con dash-new-project con-body mb-4">
                    <h6>
                        <strong>{props.ClientProjects.title}</strong>
                          <badge className={XClass}>{x}</badge>

                    </h6>

                    <span className="sub-heading">
                         {/*<i className="fa fa-trash-o"/>*/}
                            <i className="fa fa-calendar"/> ثبت شده در {date}
            </span>


                    <Button color="primary" className="btn btn-primary btn-rec" onClick={(event) => {
                        props.goToTender(y);
                    }}>
                        {XButtonName}
                    </Button>
                </div>
            </div>
        )
    }
    else if (props.ClientProjects.is_started && (!props.ClientProjects.is_completed) && (!props.ClientProjects.is_canceled)) {
        return(
            <div>
                <div className="dash-con dash-new-project con-body mb-4">
                    <h6>
                        <strong>{props.ClientProjects.title}</strong>
                          <badge className={XClass}>{x}</badge>
                    </h6>



                    <span className="sub-heading">
                            <i className="fa fa-calendar"/> {date}
            </span>


                    <Button color="primary" className="btn btn-primary btn-rec" onClick={props.goToCP}>
                        {XButtonName}
                    </Button>
                </div>
            </div>
        )
    }
    else if((props.ClientProjects.is_canceled)){
        return(
            <div>
                <div className="dash-con dash-new-project con-body mb-4">
                    <h6>
                        <strong>{props.ClientProjects.title}</strong>
                        <badge className={XClass}>{x}</badge>
                    </h6>



                    <span className="sub-heading">
                            <i className="fa fa-calendar"/> {date}
            </span>


                    <Button color="primary" className="btn btn-primary btn-rec" onClick={props.goToCP}>
                        {XButtonName}
                    </Button>
                </div>
            </div>
        )
    }
    else if(props.ClientProjects.is_completed){
        return(
            <div>
                <div className="dash-con dash-new-project con-body mb-4">
                    <h6>
                        <i className="fa fa-trash-o" aria-hidden="true"/>
                        <strong>{props.ClientProjects.title}</strong>
                          <badge className={XClass}>{x}</badge>
                    </h6>



                    <span className="sub-heading">
                            <i className="fa fa-calendar"/> {date}
            </span>


                    <Button color="primary" className="btn btn-primary btn-rec" onClick={(event) => {
                        props.goToTender(y);
                    }}>
                        {XButtonName}
                    </Button>
                </div>
            </div>
        )

    }
};


ProjectTemplate.PropTypes = {
    goToProjectAuctionPage : PropTypes.func.isRequired,
    goToCash : PropTypes.func.isRequired
};

export default ProjectTemplate;
