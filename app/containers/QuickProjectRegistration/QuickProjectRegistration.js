import React from 'react';
import ReactDOM from 'react-dom';
import button from '../../components/DashboardButton/DashboardButton.js'

class QuickProjectRegister extends React.Component{
  constructor(props){
    super(props);
}
  render(){
    return(
      <div className="dash-con dash-new-project con-body mb-4">
          <h5>ایجاد پروژه جدید</h5>
          <div className="dash-divider"></div>
          <form className="">
              <div className="form-group">
                <input type="text" className="form-control" id="" placeholder="عنوان پروژه"></input>
              </div>
              <div className="input-group">
                  <select className="selectpicker" data-style="form-control" id="" placeholder="زمینه ترجمه را انتخاب کنید.">
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
          <form action="dashboard-project-new.html">
            <button type="submit" className="btn btn-primary btn-rec">
                ایجاد پروژه
            </button>
          </form>
      </div>

    )
  }
}
module.exports = QuickProjectRegister;
