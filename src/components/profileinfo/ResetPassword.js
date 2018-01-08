import React from 'react';
import {Button} from 'reactstrap';

const ResetPassword = (props) =>{
  return(
      <div className="dash-con dash-profile-info con-body mb-4">

                      <span className="projectinfo">
                        <i className="fa fa-unlock-alt" aria-hidden="true"/>
                      </span>
          <span className="projectinfo">
                      <h5 style={{display:'inline'}}>تغییر رمز عبور</h5>

                      </span>
          <div className="dash-divider"/>
          <form className="">
              <div id="" className="form-group">
                  <input type="password" className="form-control form-control-danger" id="" placeholder="رمز عبور فعلی"/>
                  <div id="form-control-feedback-username" className="form-control-feedback" >رمز عبور فعلی صحیح نمیباشد!</div>
              </div>
              <div id="" className="form-group">
                  <input type="password" className="form-control form-control-danger" id="" placeholder="رمز عبور جدید"/>
              </div>
              <Button color="primary" className="btn btn-primary btn-rec" >
                  <i className="fa fa-check" />ثبت تغییرات
              </Button>
          </form>
      </div>
  )
};

export default ResetPassword;