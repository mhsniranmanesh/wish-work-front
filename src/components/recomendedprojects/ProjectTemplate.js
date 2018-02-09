import React from 'react';
import PropTypes from 'prop-types';
import Flag from 'react-world-flags'

const ProjectTemplate = ({ProjectDetail , goToProjectProfile}) =>{
    var from_languageCode,
        from,
        to,
        to_languageCode;

    if (ProjectDetail.from_language) {
        if (ProjectDetail.from_language === 1) {
            from_languageCode = 'IRN';
            from = 'فارسی' ;
        }
        else if (ProjectDetail.from_language === 2) {
            from_languageCode = 'US';
            from = 'انگلیسی'
        }
        else if (ProjectDetail.from_language === 3) {
            from_languageCode = 'FR';
            from = 'فرانسوی'
        }
        else if (ProjectDetail.from_language === 4) {
            from_languageCode = 'SA';
            from = 'عرب'
        }
        else if (ProjectDetail.from_language === 5) {
            from_languageCode = 'ES';
            from = 'اسپانیایی'
        }
        else if (ProjectDetail.from_language === 6) {
            from_languageCode = 'DE';
            from = 'آلمانی'
        }
    }
    if (ProjectDetail.to_language) {
        if (ProjectDetail.to_language === 1) {
            to_languageCode = 'IRN';
            to = 'فارسی'
        }
        else if (ProjectDetail.to_language === 2) {
            to_languageCode = 'US';
            to = 'انگلیسی'
        }
        else if (ProjectDetail.to_language === 3) {
            to_languageCode = 'FR';
            to = 'فرانسوی'
        }
        else if (ProjectDetail.to_language === 4) {
            to_languageCode = 'SA';
            to = 'عربی'
        }
        else if (ProjectDetail.to_language === 5) {
            to_languageCode = 'ES';
            to = 'اسپانیایی'
        }
        else if (ProjectDetail.to_language === 6) {
            to_languageCode = 'DE';
            to = 'آلمانی'
        }
    }
    return(
        <div>
            <div className="dash-recom-item recom" onClick={(event) =>{goToProjectProfile(ProjectDetail.slug)}}>
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
                <a href="#" className="mb-2">
                    <span className="prject-title">
                          {ProjectDetail.title}
                    </span>
                  <span className="project-header-flag">
                        <span> <Flag code={from_languageCode} height="12"/> </span>
                        <span className="detail-fontsize">به</span>
                        <span> <Flag code={to_languageCode}  height="12"/> </span>
                  </span>
                </a>
                <div id="wrap">
                    <h6  className="form-body-fontsize">
                        {ProjectDetail.description}                    </h6>
                </div>
                {/*<div className="sub-heading">*/}
                    {/*<a className="tag" href="#">{ProjectDetail.tags}</a>*/}
                {/*</div>*/}
                {/*<div className="sub-heading">*/}
                    {/*<i className="fa fa-user" style={{paddingLeft:'2px'}}/> <a href="#">4/5</a>*/}
                    {/*<i className="fa fa-usd" style={{marginRight:'10px', paddingLeft:'2px'}}/> {ProjectDetail.price}*/}
                    {/*<i className="fa fa-clock-o" style={{marginRight:'10px' , paddingLeft:'2px'}}/>{ProjectDetail.releaseTime}*/}
                {/*</div>*/}
                <ul className="sub-heading">
                    {/*  <li className="project-prop">
                          <i className="fa fa-user"/>
                          4/5
                      </li>*/}

                    <li className="project-prop project-prop-money">
                        <i className="fa fa-usd"/>
                        {ProjectDetail.budget}
                    </li>
                    <li className="project-prop project-prop-time">
                        <i className="fa fa-clock-o"/>
                        {ProjectDetail.time_limit}
                    </li>
                </ul>
            </div>
          {/*<div className="dash-divider"/>*/}
        </div>


    )
};

ProjectTemplate.PropTypes ={
    ProjectDetail: PropTypes.object.isRequired

};

export default ProjectTemplate ;
