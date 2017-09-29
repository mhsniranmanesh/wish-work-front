import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../DashboardProfileSection/DashboardProfileSection.js';
import QuickProjectRegister from '../QuickProjectRegistration/QuickProjectRegistration.js';
var DashboardSectionsSizesColsm5 = require('../DashboardSectionsSizes/DashboardSectionsSizes.js').comp1;
var DashboardSectionsSizesColsm7 = require('../DashboardSectionsSizes/DashboardSectionsSizes.js').comp2;


class MainContentWrapper extends React.Component{
render(){
  return(
          <div className="content-wrapper py-3">
            <div className="container-fluid">
              <div className="row">
              <DashboardSectionsSizesColsm5/>
              <DashboardSectionsSizesColsm7/>
              </div>
              </div>
            </div>

    );
  }
}
module.exports = MainContentWrapper;
