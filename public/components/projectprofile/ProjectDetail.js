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

                <div className="download-file">
                  <span  id="download-symbol"><a href="#"> <i className="fa fa-download " aria-hidden="true"></i> </a></span>
                  <span  ><a href="#" id="file-name"> فایل۱ - پروژه به شدت جالب و دانشی  </a></span>
                </div>

                <div className="download-file">
                  <span  id="download-symbol"><a href="#"> <i className="fa fa-download " aria-hidden="true"></i> </a></span>
                  <span  ><a href="#" id="file-name"> فایل۲ - پروژه به شدت ازدواجی آروین  </a></span>
                </div>

                <div className="download-file">
                  <span  id="download-symbol"><a href="#"> <i className="fa fa-download " aria-hidden="true"></i> </a></span>
                  <span  ><a href="#" id="file-name"> فایل۳ - پروژه زیبا در جهت تأمین منافع و شخصیتهای بزرگ علمی   </a></span>
                </div>

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
