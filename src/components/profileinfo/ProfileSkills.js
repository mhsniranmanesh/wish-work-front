import React from 'react';
const LANGUAGES = require('../../Datas/STATIC_DATAS');
import {Row,Col , Button} from 'reactstrap';
import Select from 'react-select';
import PropTypes from 'prop-types';
import TranslationTagTemplate from './TranslationTagTemplate';
import TranslationTags from "./TranslationTags";

const ProfileSkills = (props) =>{
    var options1 = LANGUAGES.AVAILABLETOLANGUAGES;
    var options2 = LANGUAGES.AVAILABLEFROMLANGUAGES;
  return(
      <div>
          <div className="dash-con dash-profile-info con-body mb-4">


                      <span className="projectinfo">
                        <i className="fa fa-wrench" aria-hidden="true"/>

                        <h5 style={{display:'inline'}}>تغییر تخصص ها</h5>
                      </span>
              <div className="dash-divider"/>
              <form >
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
                                      <input className="btn-radio" type="checkbox" name="rb" id="rb1" checked={props.is_general} onChange={props.IsGeneral}/>
                                      <span htmlFor="rb1" className="checkbox-text">عمومی</span>
                                  </label>
                              </Col>
                              <Col>
                                  <label>
                                      <input className="btn-radio" type="checkbox" name="rb" id="rb2" checked={props.is_technical} onChange={props.IsTechnical}/>
                                      <span htmlFor="rb2" className="checkbox-text">فنی</span>
                                  </label>
                              </Col>
                          </Row>
                          <Row className="fields">
                              <Col>
                                  <label>
                                      <input className="btn-radio" type="checkbox" name="rb" id="rb3" checked={props.is_medical} onChange={props.IsMedical}/>
                                      <span htmlFor="rb3" className="checkbox-text">پزشکی</span>
                                  </label>
                              </Col>
                              <Col>
                                  <label>
                                      <input className="btn-radio" type="checkbox" name="rb" id="rb4" checked={props.is_legal} onChange={props.IsLaw}/>
                                      <span htmlFor="rb4" className="checkbox-text">حقوقی</span>
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
                                      placeholder="از زبان ..."
                                      options={options1}
                                      simpleValue
                                      clearable
                                      name="select-language"
                                      value={props.selectValueTF}
                                      onChange={props.updateValueTF}
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
                                  value={props.selectValueTT}
                                  onChange={props.updateValueTT}
                                  labelKey="name"
                                  valueKey="index"
                              />
                          </Col>
                      </Row>
                      <div className="form-group">
                          <Button color="primary" className="btn btn-success btn-rec" onClick={props.addSkills}>
                              <i className="fa fa-plus"/>افزودن
                          </Button>
                      </div>
                      <label htmlFor="" className="col-form-label sub-label">
                          <i className="fa fa-quote-left" aria-hidden="true"/> برای حذف موارد انتخاب شده روی آن ها کلیک کنید.
                      </label>
                        <TranslationTags Skills={props.Skills} />
                      {/*<div className="tags" >*/}
                          {/*<li className='addedTag'>*/}
                              {/*<i className='fa fa-times-circle' aria-hidden={true}/> فارسی به انگلیسی*/}
                          {/*</li>*/}
                      {/*</div>*/}
                      {/*<div className="sub-heading" >*/}
                          {/*<a className="tag" href="#">علمی</a>*/}
                          {/*<a className="tag" href="#">زیست شناسی</a>*/}
                          {/*<a className="tag" href="#">میکرو بیولوژی</a>*/}
                          {/*<a className="tag" href="#">فوری</a>*/}
                          {/*<a className="tag" href="#">علمی</a>*/}
                          {/*<a className="tag" href="#">زیست شناسی</a>*/}
                          {/*<a className="tag" href="#">میکرو بیولوژی</a>*/}
                      {/*</div>*/}
                      <br/>
                      <Button color="primary" className="btn btn-primary btn-rec" onClick={props.formSubmitted}>
                          <i className="fa fa-check" />ثبت تغییرات
                      </Button>
                  </div>
              </form>
          </div>
      </div>
  )
};

ProfileSkills.PropTypes = {
    is_legal : PropTypes.object.isRequired,
    is_technical : PropTypes.object.isRequired,
    is_medical : PropTypes.object.isRequired,
    is_general : PropTypes.object.isRequired,
    IsGeneral : PropTypes.func.isRequired,
    IsTechnical : PropTypes.func.isRequired,
    IsMedical : PropTypes.func.isRequired,
    IsLaw : PropTypes.func.isRequired,
    Skills : PropTypes.object.isRequired,
    formSubmitted: PropTypes.func.isRequired
};

export default ProfileSkills;