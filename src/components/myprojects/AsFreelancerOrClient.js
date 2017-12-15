import React from 'react';

const AsFreelancerOrClient = ({props}) => {
  return(
      <div className="dash-con dash-new-project con-body mb-4">
          <h5>لیست پروژه‌های من</h5>
          <div className="dash-divider"/>
          <ul className="nav justify-content-center mx-auto" id="depositTab" role="tablist" style={{width: 162}}>
              <li className="nav-item">
                  <a className="nav-link active" id="deposit-tab" data-toggle="tab" href="#deposit" role="tab" aria-controls="deposit" aria-selected="true">فریلنسر</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" id="draw-tab" data-toggle="tab" href="#draw" role="tab" aria-controls="draw" aria-selected="false">کارفرما</a>
              </li>
          </ul>
      </div>
  )
};

export default AsFreelancerOrClient ;