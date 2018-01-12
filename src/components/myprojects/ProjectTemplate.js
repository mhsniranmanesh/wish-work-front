import React from 'react';
import PropTypes from 'prop-types';
//import Moment from 'react-moment';
import moment from 'moment-jalaali';
import {Button , Badge , Alert} from 'reactstrap';

const ProjectTemplate = (props) => {
    var x = "";
    console.log(props.ClientProjects.release_date,'release date')
    moment.loadPersian({usePersianDigits: true});
    var date = moment(props.ClientProjects.release_date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss');
    console.log(date , 'date');


    var XClass = "";
    var XButtonName = "";
    var XHref = props.ClientProjects;
    var y = props.ClientProjects.slug;
    //console.log(date , 'datedatedate');
    if (props.ClientProjects.is_banned) {
        x = "مسدود شده";
        XClass = "badge badge-danger"
    }
    else {
        if (!props.ClientProjects.is_verified) {
            x = "در انتظار تایید";
            XClass = "badge badge-default";
        }
        else if ((!props.ClientProjects.is_started) && props.ClientProjects.is_verified) {
            x = "در حال مناقصه";
            XClass = "badge badge-primary";
            XButtonName = "صفحه ی مناقصه";

        }
        else if (props.ClientProjects.is_started && (!props.ClientProjects.is_completed)) {
            x = "در حال انجام";
            XClass = "badge badge-info";
            XButtonName = "کنترل پروژه"
        }
        else if (props.ClientProjects.is_completed) {
            x = "انجام شده";
            XClass = "badge badge-success";
            XButtonName = "مشاهده فایل ها"
        }

    }
    if (!props.ClientProjects.is_verified) {
        return (
            <div>
                <div className="dash-con dash-new-project con-body mb-4">
                    <h6>
                        {/*<strong>{ProjectSubmitted.title}</strong>*/}
                        <strong>{props.ClientProjects.title}</strong>
                        <Badge color="secondary" pill>{x}</Badge>
                        {/*<span>{ProjectSubmitted.badge}</span>*/}
                    </h6>


                    {/*<h6 className="beauty-text dash-recom-item-discription">*/}
                    {/*{ProjectSubmitted.description}*/}
                    {/*</h6>*/}
                    <div className="SubmittedPr">
                        <p >
                            لطفا منتظر تایید پروژه باشید.
                        </p>
                    </div>
                    <span className="sub-heading">
                            <i className="fa fa-calendar"/>  ثبت شده در {m}
            </span>
                    {/*<span className="sub-heading">*/}
                    {/*<i className="fa fa-calendar"/> {ProjectSubmitted.ReleaseTime}*/}
                    {/*</span>*/}
                    {/*<button type="submit" className="btn btn-primary btn-rec">*/}
                    {/*کنترل پروژه*/}
                    {/*</button>*/}

                    {/*<Button color="primary" className="btn btn-primary btn-rec" onClick={(event) => {*/}
                        {/*props.goToTender(y);*/}
                    {/*}}>*/}
                        {/*{XButtonName}*/}
                    {/*</Button>*/}
                </div>
            </div>
        )
    }
    else if ((!props.ClientProjects.is_started) && props.ClientProjects.is_verified) {
        return (
            <div>
                <div className="dash-con dash-new-project con-body mb-4">
                    <h6>
                        {/*<strong>{ProjectSubmitted.title}</strong>*/}
                        <strong>{props.ClientProjects.title}</strong>
                        <Badge color="info" pill>{x}</Badge>
                        {/*<span>{ProjectSubmitted.badge}</span>*/}
                    </h6>


                    {/*<h6 className="beauty-text dash-recom-item-discription">*/}
                    {/*{ProjectSubmitted.description}*/}
                    {/*</h6>*/}
                    <span className="sub-heading">
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
    else if (props.ClientProjects.is_started && (!props.ClientProjects.is_completed)) {
        return(
            <div>
                <div className="dash-con dash-new-project con-body mb-4">
                    <h6>
                        {/*<strong>{ProjectSubmitted.title}</strong>*/}
                        <strong>{props.ClientProjects.title}</strong>
                        <span className={XClass}>{x}</span>
                        {/*<span>{ProjectSubmitted.badge}</span>*/}
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
