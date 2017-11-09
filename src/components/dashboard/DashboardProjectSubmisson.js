import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


const DashboardProjectSubmission = (props) =>{
        return(
            <div className="dash-con dash-new-project con-body mb-4">
                <h5>ایجاد پروژه جدید</h5>
                <div className="dash-divider"/>
                <form className="">
                    <div className="form-group">
                        <input type="text" className="form-control" id="" placeholder="عنوان پروژه"/>
                    </div>
                    <div className="input-group">
                        <select className="selectpicker" data-style="form-control" id="" title="زمینه ترجمه را انتخاب کنید.">
                            <option>پزشکی</option>
                            <option>ادبی</option>
                            <option>سیاسی</option>
                            <option>ریاضی</option>
                            <option>شیمی</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <select className="selectpicker" data-style="form-control" id="" title="از زبان ...">
                            <option>فارسی</option>
                            <option>انگلیسی</option>
                            <option>فرانسوی</option>
                            <option>عربی</option>
                            <option>اسپانیایی</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <select className="selectpicker" data-style="form-control" id="" title="به زبان ...">
                            <option>فارسی</option>
                            <option>انگلیسی</option>
                            <option>فرانسوی</option>
                            <option>عربی</option>
                            <option>اسپانیایی</option>
                        </select>
                    </div>
                </form>
                <form onSubmit={props.myFunc}>
                    <button type="submit" className="btn btn-primary btn-rec">
                        ایجاد پروژه
                    </button>
                </form>
            </div>
        );
    };




export default DashboardProjectSubmission ;
