import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'redux';
import 'react-redux';

class ProjectSubmitionForm extends React.Component{
  render(){
    return(
      <div class="content-wrapper py-3">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-sm-6 d-block mx-auto">
                      <div class="dash-con dash-new-project con-body mb-4">
                          <h5>ایجاد پروژه جدید</h5>
                          <div class="dash-divider"></div>
                          <form class="">
                            <div class="form-group">
                            <input type="text" class="form-control" id="" placeholder="عنوان پروژه"></input>
                            </div>
                            <div class="input-group">
                                <select class="selectpicker" data-style="form-control" id="" title="زمینه ترجمه را انتخاب کنید.">
                                    <option>پزشکی</option>
                                    <option>ادبی</option>
                                    <option>سیاسی</option>
                                    <option>ریاضی</option>
                                    <option>شیمی</option>
                                </select>
                            </div>
                            <div class="row">
                              <div class="col-sm-6">
                                <div class="input-group">
                                    <select class="selectpicker" data-style="form-control" id="" title="از زبان ...">
                                        <option>فارسی</option>
                                        <option>انگلیسی</option>
                                        <option>فرانسوی</option>
                                        <option>عربی</option>
                                        <option>اسپانیایی</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col-sm-6">
                                  <div class="input-group">
                                    <select class="selectpicker" data-style="form-control" id="" title="به زبان ...">
                                        <option>فارسی</option>
                                        <option>انگلیسی</option>
                                        <option>فرانسوی</option>
                                        <option>عربی</option>
                                        <option>اسپانیایی</option>
                                    </select>
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <textarea type="text" class="form-control" id="" placeholder="توضیحاتی را در مورد پروژه بنویسید."></textarea>
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control" id="" placeholder="مهارت های لازم فریلنسر."></input>
                              <button type="submit" class="btn btn-success btn-rec">
                                <i class="fa fa-plus"></i>افزودن مهارت
                              </button>
                              <span class="sub-heading">
                                <a class="tag" href="#">علمی</a>
                                <a class="tag" href="#">زیست شناسی</a>
                                <a class="tag" href="#">میکرو بیولوژی</a>
                                <a class="tag" href="#">فوری</a>
                                <a class="tag" href="#">علمی</a>
                                <a class="tag" href="#">زیست شناسی</a>
                                <a class="tag" href="#">میکرو بیولوژی</a>
                              </span>
                            </div>
                            <div class="form-group">
                              <label for="" class="col-form-label">
                                  بودجه ی خود را مشخص کنید.
                              </label>
                              <input type="text" class="form-control" id="priceInput"></input>
                              <div id="price-range"></div>
                              <span class="price-msg">
                                  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                  نارنجی: بودجه تعیین شده به نسبت ارزش پروژه کمتر است! ویش ورک پیشنهاد می کند که برای بالا بردن شانس انجام پروژه ی با کیفیت، کف بودجه را افزایش دهید.
                              </span>
                            </div>
                            <div class="form-group">
                              <label for="" class="col-form-label">
                                  زمان دلخواه خود را مشخص کنید.
                              </label>
                              <input type="text" class="form-control" id="timeInput"></input>
                              <div id="time-range"></div>
                              <span class="time-msg">
                                  <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                                  آبی: مقدار زمان طلب شده به نسبت اندازه ی پروژه مطلوب می باشد!
                              </span>
                            </div>
                            <button type="submit" class="btn btn-primary btn-rec">
                              ایجاد پروژه
                            </button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
module.exports = ProjectSubmitionForm ;
