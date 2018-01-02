import React from 'react';
import PropTypes from 'prop-types';

const ProjectDetail = (props) =>{

  return(
          <div className="con mb-4">
              {/* <span className="price-badge"><i className="fa fa-usd"/></span>
              <span className="time-badge"><i className="fa fa-calendar-o"/></span> */}
              <h5 className="project-title">
                  {props.Detail.title}
              </h5>

              <div className="divider"/>
              <h6 className="project-discript">
                  {props.Detail.description}
              </h6>
              <div className="sub-heading">
                  <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                  <a className="tag" href="#">#علمی</a>
                  <a className="tag" href="#">#زیست_شناسی</a>
                  <a className="tag" href="#">#میکرو_بیولوژی</a>
                  <a className="tag" href="#">#فوری</a>
              </div>
          </div>
  )
};

ProjectDetail.PropTypes = {
  Detail : PropTypes.object.isRequired
};


export default ProjectDetail;