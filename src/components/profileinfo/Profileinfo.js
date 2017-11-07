import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as profileInfo from '../../actions/profileInfo.js';


class Profileinfo extends React.Component{
  render(){
    return(
      <div>
      <div className="content-wrapper py-3">
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-6 d-block mx-auto">
                <div className="dash-con dash-profile-info con-body mb-4">
                    <h5>تغییر عکس پروفایل</h5>
                    <div className="dash-divider"></div>
                    <form className="">
                        <div className="media">
                            <a href="#" className="">
                                <img className="rounded-circle d-flex ml-3" src="http://via.placeholder.com/100x100"></img>
                                <i className="fa fa-camera"></i>
                            </a>
                            <div className="media-body">
                                <label htmlFor="" className="col-form-label">
                                    برای تغییر عکس پروفایل، روی عکس خود کلیک کنید.
                                </label>
                                <label htmlFor="" className="col-form-label sub-label">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i> فریلنسر هایی که برای خود عکسی با ظاهری دوستانه و حرفه ای انتخاب می کنند، تا 5 برابر شانس بیشتری برای پروژه انجام دادن دارند.
                                </label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-rec">
                            <i className="fa fa-check"></i>آپلود عکس
                        </button>
                    </form>
                </div>
                <div className="dash-con dash-profile-info con-body mb-4">
                    <h5>تغییر اطلاعات شخصی</h5>
                    <div className="dash-divider"></div>
                    <form className="">
                        <div id="" className="form-group">
                            <label htmlFor="" className="col-form-label">
                                برای تغییر هر مورد روی آن کلیک کنید.
                            </label>
                            <label htmlFor="" className="col-form-label">
                                عنوان حرفه ای کوتاه.
                            </label>
                            <input type="text" className="form-control form-control-danger" id="" value="مترجم رسمی فارسی به انگلیسی" readOnly/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="" className="col-form-label">
                                توضیح کامل در مورد من.
                            </label>
                            <input type="text" className="form-control" id="" value={this.props.profileInfo.bio}readOnly/>

                        </div>
                        <div className="input-group">
                            <label htmlFor="" className="col-form-label">
                                شغل.
                            </label>
                            <input type="text" className="form-control" id="" value={this.props.profileInfo.job} readOnly/>
                            <label htmlFor="" className="col-form-label">
                                مدرک تحصیلی.
                            </label>
                            <input type="text" className="form-control" id="" value={this.props.profileInfo.degree} readOnly/>
                            <label htmlFor="" className="col-form-label">
                                دانشگاه.
                            </label>
                            <input type="text" className="form-control" id="" value={this.props.profileInfo.university} readOnly/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-rec">
                            <i className="fa fa-check"></i>ثبت تغییرات
                        </button>
                    </form>
                </div>
                <div className="dash-con dash-profile-info con-body mb-4">
                    <h5>تغییر تخصص ها</h5>
                    <div className="dash-divider"></div>
                    <form className="">
                        <div className="input-group">
                            <label htmlFor="skillType" className="col-form-label">
                                در چه رشته هایی از ترجمه تخصص دارید؟
                            </label>
                            <select className="selectpicker" data-style="form-control" id="skillType" multiple data-max-options="4" title="پزشکی، ادبی، سیاسی">
                                <option className="selected">پزشکی</option>
                                <option className="selected">ادبی</option>
                                <option className="selected">سیاسی</option>
                                <option>ریاضی</option>
                                <option>شیمی</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="skillLangs" className="col-form-label">
                                توانایی ترجمه ی چه زبان هایی را دارید؟
                            </label>
                            <div className="row">
                                <div className="col-sm-6">
                                    <select className="selectpicker" data-style="form-control" id="skillLangsFrom" title="از زبان ...">
                                        <option>فارسی</option>
                                        <option>انگلیسی</option>
                                        <option>فرانسوی</option>
                                        <option>عربی</option>
                                        <option>اسپانیایی</option>
                                        <option>آلمانی</option>
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <select className="selectpicker" data-style="form-control" id="skillLangsTo" title="به زبان ...">
                                        <option>فارسی</option>
                                        <option>انگلیسی</option>
                                        <option>فرانسوی</option>
                                        <option>عربی</option>
                                        <option>اسپانیایی</option>
                                        <option>آلمانی</option>
                                    </select>
                                </div>
                            </div>
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
                        <h5>تغییر رمز عبور</h5>
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
    actions : PropTypes.object.isRequired
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