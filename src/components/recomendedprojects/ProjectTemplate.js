import React from 'react';
import PropTypes from 'prop-types';

const ProjectTemplate = ({ProjectDetail}) =>{
    return(
        <div>
            <div className="dash-recom-item recom">
              {/* <span className="dollar">
                  <div>
                    <svg>
                      <rect className="price-fair" />
                    </svg>
                  </div>
                  <div>
                    <svg>
                      <rect className="price-low" />
                    </svg>
                  </div>
                </span>*/}
                <a href="#">
                    <h6 ><strong className="form-header-fontsize">{ProjectDetail.title}</strong></h6>
                </a>
                <div id="wrap">
                    <h6  className="form-body-fontsize">
                        {ProjectDetail.description}                    </h6>
                </div>
                <div className="sub-heading">
                    <a className="tag" href="#">{ProjectDetail.tags}</a>
                </div>
                <div className="sub-heading">
                    <i className="fa fa-user" style={{paddingLeft:'2px'}}></i> <a href="#">4/5</a>
                    <i className="fa fa-usd" style={{marginRight:'10px', paddingLeft:'2px'}}></i> {ProjectDetail.price}
                    <i className="fa fa-clock-o" style={{marginRight:'10px' , paddingLeft:'2px'}}></i>{ProjectDetail.releaseTime}
                </div>
            </div>
          {/*<div className="dash-divider"/>*/}
        </div>


    )
};

ProjectTemplate.PropTypes ={
    ProjectDetail: PropTypes.object.isRequired

};

export default ProjectTemplate ;
