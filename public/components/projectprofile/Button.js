import React from 'react';
import moment from 'moment-jalaali';

const Button = (props) =>{
    if(props.release_date) {
        moment.loadPersian({usePersianDigits: true});
        var m = moment(props.release_date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss');
        console.log(props.isLoggedIn , 'props.isLoggedIn')
    }
    if(!props.is_freelancer_selected) {
        return (
            <div>
                <div className="con mb-4">
                    <h5 className="project-title form-header-fontsize">
                        درباره پروژه
                    </h5>
                    <div className="divider"/>
                    <div className="about-sub-heading">
                        {/*<div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a*/}
                            {/*href="#">4/5</a></div>*/}
                        <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.budget}
                            تومان
                        </div>
                        <div className="not-inline"><i className="fa fa-calendar-o"/>
                            <strong>مهلت:</strong> {props.TimeLimit} روز
                        </div>
                        <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m}
                            قبل
                        </div>
                    </div>
                </div>
                <div className="con mb-4">
                    <div className="public-page-descript form-body-fontsize">
                        صفحه ی پروژه ی شما
                    </div>
                </div>
            </div>

        )
    }
    else {
        return(
            <div>
                <div className="con mb-4">
                    <h5 className="project-title">
                        درباره پروژه
                    </h5>
                    <div className="divider"/>
                    <div className="about-sub-heading">
                        <div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a
                            href="#">4/5</a></div>
                        <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.budget}
                            تومان
                        </div>
                        <div className="not-inline"><i className="fa fa-calendar-o"/>
                            <strong>مهلت:</strong> {props.TimeLimit} روز
                        </div>
                        <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> دو ساعت
                            قبل
                        </div>
                    </div>
                </div>
                <div className="con mb-4">
                    <div className="public-page-descript form-body-fontsize">
                         شما فریلنسر خود را انتخاب کرده اید. منتظر تایید او باشید
                    </div>
                </div>
            </div>
        )
    }
};

export default Button;
