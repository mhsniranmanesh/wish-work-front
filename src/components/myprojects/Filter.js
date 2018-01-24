import React from 'react';

const Filter = ({props}) =>{
  return(
      <div className="dash-con dash-new-project con-body mb-4">
          <div className="project-status mx-auto row">
              <span className=" boxes btn btn-primary btn-rec myproject-btn myproject-badge col-sm-4">
                                    <input type="checkbox" className="badgebox" id="ongoing"/>
                                    <label htmlFor="ongoing">در حال انجام</label>
                                  </span>

              <span className=" boxes btn btn-success btn-rec myproject-btn myproject-badge col-sm-4">
                                    <input type="checkbox" className="badgebox" id="did"/>
                                    <label htmlFor="did">انجام شده</label>
                                  </span>


              <span className=" boxes btn btn-danger btn-rec myproject-btn myproject-badge col-sm-4">
                                    <input type="checkbox" className="badgebox" id="canceled"/>
                                    <label htmlFor="canceled">کنسل شده</label>
                                  </span>

          </div>
      </div>
  )
};

export default Filter;