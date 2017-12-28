import React from 'react';

const Button = (props) =>{
    return(
        <div className="col-sm-4">
            <div className="con mb-4">
                <h5 className="project-title">
                    درباره پروژه
                </h5>
                <div className="divider"/>
                <div className="sub-heading">
                    <span className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></span>
                    <span className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.budget} تومان</span>
                    <span className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {props.TimeLimit} روز</span>
                    <span className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> دو ساعت قبل</span>
                </div>
            </div>
                <div className="con mb-4">
                    <button  type="submit" className="btn btn-primary btn-rec" >
دیدن اطلاعات پیشنهادات                   </button>
                </div>
            </div>

    )
};

export default Button;