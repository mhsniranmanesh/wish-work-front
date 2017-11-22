import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Select from 'react-select';
const LANGUAGES = require('./Datas/Languages.js')



const DashboardProjectSubmission = (props) =>{


        return(
            <div className="dash-con dash-new-project con-body mb-4">
                <h5>ایجاد پروژه جدید</h5>
                <div className="dash-divider"/>
                <form className="">
                  <row>
                        <div className="section">
                            <Select
                              className="customPicker"
                              placeholder="از زبان ..."
                              options={ [
                                {name: 'فارسی'},
                                {name: 'انگلیسی'},
                                {name: 'فرانسوی'},
                                {name: 'عربی'},
                                {name: 'اسپانیایی'}
                              ]}
                              name="select-language"
                              value=''
                              // onChange={this.updateValueTF}
                              labelKey="name"
                              valueKey="name"
                            />
                        </div>
                      </row>
                      <row>
                            <Select
                              placeholder="به زبان ..."
                              className="customPicker section"
                              options={ [
                                {name: 'فارسی'},
                                {name: 'انگلیسی'},
                                {name: 'فرانسوی'},
                                {name: 'عربی'},
                                {name: 'اسپانیایی'}
                              ]}
                              simpleValue
                              clearable
                              name="select-language"
                              value=''
                              // onChange={this.updateValueTT}
                              searchable
                              labelKey="name"
                              valueKey="name"
                            />
                      </row>
                      <row>
                            <Select
                              placeholder="به زبان ..."
                              className="customPicker section"
                              options={ [
                                {name: 'فارسی'},
                                {name: 'انگلیسی'},
                                {name: 'فرانسوی'},
                                {name: 'عربی'},
                                {name: 'اسپانیایی'}
                              ]}
                              simpleValue
                              clearable
                              name="select-language"
                              value=''
                              // onChange={this.updateValueTT}
                              searchable
                              labelKey="name"
                              valueKey="name"
                            />
                      </row>
                </form>
                <form onSubmit={props.myFunc}>
                    <button type="submit" className="btn btn-primary btn-rec">
                        ایجاد پروژه
                    </button>
                </form>
            </div>
        );
    };

DashboardProjectSubmission.PropTypes = {
    myFunc : PropTypes.func.isRequired
};


export default DashboardProjectSubmission ;
