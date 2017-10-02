import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../DashboardProfileSection/DashboardProfileSection.js';
import QuickProjectRegister from '../QuickProjectRegistration/QuickProjectRegistration.js';
import NewNotifDashboard from '../NewNotifDashboard/NewNotifDashboard.js';
import SuggestedProjectsDashboard from '../SuggestedProjectsDashboard/SuggestedProjectsDashboard.js';
class DashboardSectionsSizesColsm5 extends React.Component{
  render(){
    return(

      <div className="col-sm-5">
      <Profile/>
      <QuickProjectRegister/>
      </div>


    );
  }
}
class DashboardSectionsSizesColsm7 extends React.Component{
  render(){
    return(
      <div className="col-sm-7">
      <NewNotifDashboard/>
      <SuggestedProjectsDashboard/>
      </div>
    )
  }
}
module.exports = { comp1 : DashboardSectionsSizesColsm5 ,comp2 : DashboardSectionsSizesColsm7} ;
