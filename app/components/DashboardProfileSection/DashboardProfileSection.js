import React from 'react';
import ReactDOM from 'react-dom';
class DashboardProfileSection extends React.Component{
  render(){
    return(
      <div className="dash-con dash-profile mb-4">
          <div className="row">
            <div className="mx-auto">
              <img src="http://via.placeholder.com/125x125" className="rounded-circle"></img>
              <h5>وحید علوی</h5>
              <h6 className="dash-profile-stars">
                <i className="fa fa-star shine-on"></i>
                <i className="fa fa-star shine-on"></i>
                <i className="fa fa-star shine-on"></i>
                <i className="fa fa-star-o shine-on"></i>
                <i className="fa fa-star-o shine-on"></i>
              </h6>
            </div>
          </div>
      </div>
    );
  }
}
module.exports = DashboardProfileSection;
