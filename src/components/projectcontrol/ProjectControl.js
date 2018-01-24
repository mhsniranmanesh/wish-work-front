import React from 'react';
import MileStones from './MileStones';

class ProjectControl extends React.Component{
  render(){
    return(
      <div className="content-wrapper py-3">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-8 d-block mx-auto">
                      <div className="dash-con dash-new-project con-body mb-4">
                          <h5 className="form-title-fontsize">کنترل پروژه</h5>
                          <div className="dash-divider"/>
                          <label className="col-form-label form-header-fontsize">زمان بندی پروژه شما</label>
                          <MileStones/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default ProjectControl;
