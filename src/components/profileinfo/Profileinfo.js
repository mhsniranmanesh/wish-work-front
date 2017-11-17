import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileInfo from '../../actions/profileInfo.js';
import {Input,Row,Col,InputGroupAddon} from 'reactstrap';
import Select from 'react-select';

const LANGUAGES = require('./Datas/Languages.js')


class Profileinfo extends React.Component{
    constructor(props){
        super(props);
        this.state = { bioReadOnly : true , jobReadOnly : true , degreeReadOnly : true, universityReadOnly : true ,
                       bio: "" , job:"" , degree:"", university:"" , selectValueTF :"" , selectValueTT : ""};

        this.getInitialState = this.getInitialState.bind(this);
        this.updateValueTF = this.updateValueTF.bind(this);
        this.updateValueTT = this.updateValueTT.bind(this);
        this.state.bio = this.props.profileInfo.bio;
        this.state.job = this.props.profileInfo.job;
        this.state.degree = this.props.profileInfo.degree;
        this.state.university = this.props.profileInfo.university;
        this.changeBioInput = this.changeBioInput.bind(this);
        this.changeJobInput = this.changeJobInput.bind(this);
        this.changeDegreeInput = this.changeDegreeInput.bind(this);
        this.changeUniversityInput = this.changeUniversityInput.bind(this);
        this.changeBioOnChange = this.changeBioOnChange.bind(this);
        this.changeJobOnChange = this.changeJobOnChange.bind(this);
        this.changeDegreeOnChange = this.changeDegreeOnChange.bind(this);
        this.changeUniversityOnChange = this.changeUniversityOnChange.bind(this);

        this.submitChanges = this.submitChanges.bind(this);
    }

    getInitialState(){
      return{};
    }
    updateValueTT (newValue) {
    	this.setState({
    		selectValueTT: newValue
  		});
	  }
    updateValueTF(newValue) {
      this.setState({
        selectValueTF: newValue
      });
    }
    changeBioInput(){
        this.setState(prevState => ({bioReadOnly: !prevState.bioReadOnly}))

    };
    changeJobInput(){
        this.setState(prevState => ({jobReadOnly: !prevState.jobReadOnly}))
    }
    changeDegreeInput(){
        this.setState(prevState => ({degreeReadOnly : !prevState.degreeReadOnly}) )
    }
    changeUniversityInput(){
        this.setState(prevState => ({universityReadOnly : !prevState.universityReadOnly}))
    }
    changeBioOnChange(event) {
        this.setState({bio : event.target.value});
    }
    changeJobOnChange(event){
        this.setState({job : event.target.value});

    }
    changeDegreeOnChange(event){
        this.setState({degree : event.target.value});

    }
    changeUniversityOnChange(event){
        this.setState({university : event.target.value});

    }
    submitChanges(){
        //action from redux
        this.props.actions.updateInformations(this.state);
    }
  render(){
    var options1 = LANGUAGES.AVAILABLETOLANGUAGES;
    var options2 = LANGUAGES.AVAILABLEFROMLANGUAGES;
    return(
      <div>
      <div className="content-wrapper py-3">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 d-block mx-auto">
                    <div className="dash-con dash-profile-info con-body mb-4">

                        <span className="projectinfo">
                          <h5 style={{display:'inline'}}>تغییر عکس پروفایل</h5>
                        </span>
                        <span className="projectinfo">
                          <i className="fa fa-camera" aria-hidden="true"/>
                        </span>

                        <div className="dash-divider"/>
                        <form className="">
                            <div className="media">
                                <a href="#" className="">
                                    <img className="rounded-circle d-flex ml-3" src="http://via.placeholder.com/100x100"/>
                                    <i className="fa fa-camera"/>
                                </a>
                                <div className="media-body">
                                    <label htmlFor="" className="col-form-label">
                                            برای تغییر عکس پروفایل، روی عکس خود کلیک کنید.
                                    </label>
                                    <label htmlFor="" className="col-form-label sub-label">
                                        <span className="quote justify">
                                          <i className="fa fa-quote-left" aria-hidden="true"/> فریلنسر هایی که برای خود عکسی با ظاهری دوستانه و حرفه ای انتخاب می کنند، تا 5 برابر شانس بیشتری برای پروژه انجام دادن دارند.
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-rec">
                                <i className="fa fa-check"/>آپلود عکس
                            </button>
                        </form>
                    </div>
                    <div className="dash-con dash-profile-info con-body mb-4">
                      <span className="projectinfo">
                        <h5 style={{display:'inline'}}>تغییر اطلاعات شخصی</h5>
                      </span>
                      <span className="projectinfo">
                        <i className="fa fa-user" aria-hidden="true"></i>
                      </span>

                        <div className="dash-divider"/>
                        <form className="">
                            <div id="" className="form-group">
                                <label htmlFor="" className="col-form-label">
                                  <span className="point">
                                    <i className="fa fa-exclamation point" aria-hidden="true"></i>
                                      برای تغییر هر مورد روی آن دوبار کلیک کنی
                                  </span>
                                </label>
                                <div>
                                <label htmlFor="" className="col-form-label">
                                    عنوان حرفه ای کوتاه
                                </label>
                              </div>
                                <input type="text" className="form-control form-control-danger" id="" value="مترجم رسمی فارسی به انگلیسی" readOnly />
                            </div>
                            <div className="form-group">
                              <div>
                                <label htmlFor="" className="col-form-label">
                                    توضیح کامل در مورد من.
                                </label>
                              </div>
                                <Input type="textarea" className="form-control" id="" value={this.state.bio} onDoubleClick={this.changeBioInput} onChange={this.changeBioOnChange} readOnly={this.state.bioReadOnly}/>
                            </div>


                            <div className="form-group">
                                <label htmlFor="" className="col-form-label">
                                    شغل
                                </label>
                                <Input className="form-control" id="" value={this.state.job} onDoubleClick={this.changeJobInput} onChange={this.changeJobOnChange} readOnly={this.state.jobReadOnly}/>
                                <label htmlFor="" className="col-form-label">
                                    مدرک تحصیلی
                                </label>
                                <Input className="form-control" id="" value={this.state.degree} onDoubleClick={this.changeDegreeInput} onChange={this.changeDegreeOnChange} readOnly={this.state.degreeReadOnly}/>
                                <label htmlFor="" className="col-form-label">
                                    دانشگاه
                                </label>
                                <Input className="form-control" id="" value={this.state.university} onDoubleClick={this.changeUniversityInput} onChange={this.changeUniversityOnChange} readOnly={this.state.universityReadOnly}/>
                            </div>



                            <button type="submit" className="btn btn-primary btn-rec">
                                <i className="fa fa-check" onClick={this.submitChanges}/>ثبت تغییرات
                            </button>
                        </form>
                    </div>
                    <div className="dash-con dash-profile-info con-body mb-4">
                      <span className="projectinfo">
                        <h5 style={{display:'inline'}}>تغییر تخصص ها</h5>
                      </span>
                      <span className="projectinfo">
                        <i className="fa fa-wrench" aria-hidden="true"></i>
                      </span>
                        <div className="dash-divider"></div>
                        <form className="">
                            <div className="input-group">

                                <div className="input-group">
                                      <legend>
                                        <label htmlFor="skillType" className="col-form-label">
                                            <h6>در چه رشته هایی از ترجمه تخصص دارید؟</h6>
                                        </label>
                                      </legend>
                                        <Row className= "fields">
                                          <Col>
                                            <label>
                                              <input className="btn-radio" type="radio" name="rb" id="rb1" />
                                                <span for="rb1" className="radio-text">عمومی</span>
                                            </label>
                                        </Col>
                                        <Col>
                                          <label>
                                            <input className="btn-radio" type="radio" name="rb" id="rb2" />
                                            <span for="rb2" className="radio-text">فنی</span>
                                        </label>
                                        </Col>
                                      </Row>
                                        <Row className="fields">
                                          <Col>
                                            <label>
                                              <input className="btn-radio" type="radio" name="rb" id="rb3" />
                                              <span for="rb3" className="radio-text">پزشکی</span>
                                            </label>
                                        </Col>
                                        <Col>
                                          <label>
                                            <input className="btn-radio" type="radio" name="rb" id="rb4" />
                                            <span for="rb4" className="radio-text">حقوقی</span>
                                          </label>
                                        </Col>
                                        </Row>
                                </div>
                            </div>
                            <div className="input-group">
                                <label htmlFor="skillLangs" className="col-form-label">
                                    توانایی ترجمه ی چه زبان هایی را دارید؟
                                </label>
                                <Row>
                                  <Col>
                                      <div className="section">
                                          <Select
                                            className="customPicker"
                                            ref="fromLanguage"
                                            placeholder="از زبان ..."
                                            options={options1}
                                            name="select-language"
                                            value={this.state.selectValueTF}
                                            onChange={this.updateValueTF}
                                            labelKey="name"
                                            valueKey="name"
                                          />
                                      </div>
                                    </Col>
                                    <Col>
                                          <Select
                                            placeholder="به زبان ..."
                                            className="customPicker section"
                                            ref="toLanguage"
                                            options={options2}
                                            simpleValue
                                            clearable
                                            name="select-language"
                                            value={this.state.selectValueTT}
                                            onChange={this.updateValueTT}
                                            searchable
                                            labelKey="name"
                                            valueKey="name"
                                          />
                                  </Col>
                                </Row>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success btn-rec">
                                        <i className="fa fa-plus"></i>افزودن
                                    </button>
                                </div>
                                <label htmlFor="" className="col-form-label sub-label">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i> برای حذف موارد انتخاب شده روی آن ها کلیک کنید.
                                </label>
                                <div className="sub-heading" >
                                    <a className="tag" href="#">علمی</a>
                                    <a className="tag" href="#">زیست شناسی</a>
                                    <a className="tag" href="#">میکرو بیولوژی</a>
                                    <a className="tag" href="#">فوری</a>
                                    <a className="tag" href="#">علمی</a>
                                    <a className="tag" href="#">زیست شناسی</a>
                                    <a className="tag" href="#">میکرو بیولوژی</a>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-rec">
                                        <i className="fa fa-check"></i>ثبت تغییرات
                                    </button>
                                </div>
                                </div>
                            </form>
                        </div>

                    <div className="dash-con dash-profile-info con-body mb-4">
                      <span className="projectinfo">
                        <h5 style={{display:'inline'}}>تغییر رمز عبور</h5>
                      </span>
                      <span className="projectinfo">
                        <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                      </span>
                        <div className="dash-divider"></div>
                        <form className="">
                            <div id="" className="form-group">
                                <input type="password" className="form-control form-control-danger" id="" placeholder="رمز عبور فعلی"></input>
                                <div id="form-control-feedback-username" className="form-control-feedback" >رمز عبور فعلی صحیح نمیباشد!</div>
                            </div>
                            <div id="" className="form-group">
                                <input type="password" className="form-control form-control-danger" id="" placeholder="رمز عبور جدید"></input>
                            </div>
                            <button type="submit" className="btn btn-primary btn-rec">
                                <i className="fa fa-check"></i>ثبت تغییر
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
  }
}


Profileinfo.PropTypes = {
    profileInfo: PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired,
    //action for changing information :
    //updateInformations : PropTypes.func.isRequired
};

function mapStateToProps(state , ownProps){
    return{
        profileInfo : state.profileInfo,
    };
}
function mapDispatchToProps(dispatch){
    return{
        actions : bindActionCreators(profileInfo  , dispatch)
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Profileinfo);
