import React from 'react';
import PropTypes from 'prop-types';


const ProjectTemplateForDashboard = ({ProjectDetail}) => {
    return (
            <div>
                <div className="dash-recom-item price-fair">
                    <a href="#">
                        <h6><strong></strong>{ProjectDetail.title}</h6>
                    </a>
                    <span className="sub-heading">
                            {/*/!*list for tag*!/*/}
                            {/*<a className="tag" href="#">#فارسی_به_انگلیسی</a>*/}
                            {/*<a className="tag" href="#">#علمی</a>*/}
                            {/*<a className="tag" href="#">#زیست_شناسی</a>*/}
                            {/*<a className="tag" href="#">#میکرو_بیولوژی</a>*/}
                            {/*<a className="tag" href="#">#فوری</a>*/}
                        <a className="tag" href="#">{ProjectDetail.tags}</a>
                          </span>
                    <div className="sub-heading">
                        <i className="fa fa-user"/> <a href="#">4/5</a>
                        <i className="fa fa-usd"/> {ProjectDetail.price}
                        <i className="fa fa-clock-o"/> {ProjectDetail.releaseTime}
                    </div>
                </div>
            </div>
    )
};

ProjectTemplateForDashboard.PropTypes ={
    ProjectDetail : PropTypes.object.isRequired
};

export default ProjectTemplateForDashboard ;