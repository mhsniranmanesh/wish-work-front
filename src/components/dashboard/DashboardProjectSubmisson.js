import React from 'react';
import {PropTypes} from 'prop-types';
import Select from 'react-select';
import {Row , Col ,Button} from 'reactstrap';
const STATIC_DATAS = require('../../Datas/STATIC_DATAS.js');


//const LANGUAGES = require('./Datas/Languages.js');


const DashboardProjectSubmission = (props) =>{
    var options1 = STATIC_DATAS.AVAILABLETOLANGUAGES;
    var options2 = STATIC_DATAS.AVAILABLEFROMLANGUAGES;

        return (
            <div className="dash-con dash-new-project con-body mb-4">
                <h5>ایجاد پروژه جدید</h5>
                <div className="dash-divider"/>
                <form className="">
                    <legend className="form-header-fontsize pt-2">زمینه ترجمه تان را انتخاب کنید</legend>
                    <Row className= "fields">
                        <Col>
                            <label>
                                <input className="btn-radio" type="radio" name="rb" id="rb1" checked={props.is_general} onChange={props.IsGeneral}/>
                                <span htmlFor="rb1" className="radio-text">عمومی</span>
                            </label>
                        </Col>
                        <Col>
                            <label>
                                <input className="btn-radio" type="radio" name="rb" id="rb2" checked={props.is_technical} onChange={props.IsTechnical}/>
                                <span htmlFor="rb2" className="radio-text">فنی</span>
                            </label>
                        </Col>
                    </Row>
                    <Row className="fields">
                        <Col>
                            <label>
                                <input className="btn-radio" type="radio" name="rb" id="rb3" checked={props.is_medical} onChange={props.IsMedical}/>
                                <span htmlFor="rb3" className="radio-text">پزشکی</span>
                            </label>
                        </Col>
                        <Col>
                            <label>
                                <input className="btn-radio" type="radio" name="rb" id="rb4" checked={props.is_law} onChange={props.IsLaw}/>
                                <span htmlFor="rb4" className="radio-text">حقوقی</span>
                            </label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="section">
                                <Select
                                    className="customPicker"
                                    placeholder="از زبان ..."
                                    options={options1}
                                    simpleValue
                                    clearable
                                    name="select-language"
                                    value={props.translationFrom}
                                    onChange={props.upVTF}
                                    labelKey="name"
                                    valueKey="index"
                                />
                            </div>
                        </Col>
                        <Col>
                            <Select
                                placeholder="به زبان ..."
                                className="customPicker"
                                options={options2}
                                simpleValue
                                clearable
                                name="select-language"
                                value={props.translationTo}
                                onChange={props.upVTT}
                                labelKey="name"
                                valueKey="index"
                            />
                        </Col>
                    </Row>
                    <Button color="primary" type="submit" className="btn btn-primary btn-rec" onClick={props.myFunc}>
                        ایجاد پروژه
                    </Button>
                </form>

            </div>
        );
    };

DashboardProjectSubmission.PropTypes = {
    myFunc : PropTypes.func.isRequired,
    upVTT : PropTypes.func.isRequired,
    upVTF : PropTypes.func.isRequired,
    translationTo : PropTypes.object.isRequired,
    translationFrom : PropTypes.object.isRequired,
    is_law : PropTypes.object.isRequired,
    is_technical : PropTypes.object.isRequired,
    is_medical : PropTypes.object.isRequired,
    is_general : PropTypes.object.isRequired,
    IsGeneral : PropTypes.func.isRequired,
    IsTechnical : PropTypes.func.isRequired,
    IsMedical : PropTypes.func.isRequired,
    IsLaw : PropTypes.func.isRequired,
};


export default DashboardProjectSubmission ;
