import React from 'react';
import PropTypes from 'prop-types';

const ProjectTemplate = ({ProjectDetail}) =>{
    return(
        <div>
            <div className="dash-recom-item price-fair">
                <span className="prices">
                  <div>
                    <svg width="5px" height="20vh">
                      <rect className="price-good" width="5px" height="10vh" />
                    </svg>
                  </div>
                  <div>
                    <svg width="5px" height="8vh">
                      <rect className="price-low" width="5px" height="8vh"/>
                    </svg>
                  </div>
                </span>
                <a href="#">
                    <h6><strong>{ProjectDetail.title}</strong></h6>
                </a>
                <div id="wrap">
                    <h6 className="dash-recom-item-discription">
                        {ProjectDetail.description}                    </h6>
                </div>
                <div className="sub-heading">
                    <a className="tag" href="#">{ProjectDetail.tags}</a>
                </div>
                <div className="sub-heading">
                    <i className="fa fa-user"></i> <a href="#">4/5</a>
                    <i className="fa fa-usd"></i> {ProjectDetail.price}
                    <i className="fa fa-clock-o"></i>{ProjectDetail.releaseTime}
                </div>
            </div>
          <div className="dash-divider"/>
        </div>


    )
};

ProjectTemplate.PropTypes ={
    ProjectDetail: PropTypes.object.isRequired

};

export default ProjectTemplate ;
