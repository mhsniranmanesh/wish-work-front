import React from 'react';
import PropTypes from 'prop-types';
import TagsRow from '../common/TagsRow';
import Flag from 'react-world-flags'

//TODO tags maping !

const ProjectTemplateForDashboard = ({ProjectDetail , goToProjectProfile}) => {
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

        return (
            <div>
                <div className="dash-recom-item recom" onClick={(event) => {goToProjectProfile(ProjectDetail.slug)}}>
              {/*    <span className="dollar">
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
                  </span> */}
                    <a href="#">
                        <h6 className="form-header-fontsize">{ProjectDetail.title} (<Flag code={to_languageCode} height="10"/> به <Flag code={from_languageCode}
                                                                                                                                        height="12"/>)</h6>
                    </a>
                    {ProjectDetail.description}

                    <span className="sub-heading">
                        {/*{ProjectDetail.tags.map(Tag =>*/}
                            {/*<TagsRow Tag = {Tag} />*/}
                        {/*)}*/}
                            {/*/!*list for tag*!/*/}
                            {/*<a className="tag" href="#">#فارسی_به_انگلیسی</a>*/}
                            {/*<a className="tag" href="#">#علمی</a>*/}
                            {/*<a className="tag" href="#">#زیست_شناسی</a>*/}
                            {/*<a className="tag" href="#">#میکرو_بیولوژی</a>*/}
                            {/*<a className="tag" href="#">#فوری</a>*/}
                        <a className="tag" href="#">{ProjectDetail.tags}</a>
                          </span>
                    <ul className="sub-heading">
                        <li><i className="fa fa-user"/> <span>4/5</span></li>
                        <li><i className="fa fa-usd"/> <span>{ProjectDetail.price}</span></li>
                        <li><i className="fa fa-clock-o"/> <span>{ProjectDetail.releaseTime}</span></li>
                    </ul>
                </div>
            </div>
    )
};

ProjectTemplateForDashboard.PropTypes ={
    ProjectDetail : PropTypes.object.isRequired
};

export default ProjectTemplateForDashboard ;
