import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment-jalaali';
import {Button} from 'reactstrap'
const MileStoneTemplate = ({CP}) => {
    if(CP) {
        if (CP.is_started) {
            var date = moment(CP.submission_deadline, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss');
            return (
                <div>
                    <article className="timeline-entry">
                        <div className="timeline-entry-inner">
                            <time className="timeline-time"><span> تاریخ پایان زمان آپلود:{date}
                            </span> <span className="text-muted">در حال انجام</span></time>
                            <div className="timeline-icon bg-primary">
                                <i className="entypo-location"/>
                            </div>
                            <div className="timeline-label">
                                <h2><a href="#">{CP.description}</a></h2>
                                <Button type="submit" color="secondary" className="btn btn-secondary btn-rec" >
                                    <i className="fa fa-download"/>
                                </Button>
                                <Button type="submit" color="secondary" className="btn btn-secondary btn-rec" >
                                    آپلود کنید
                                </Button>
                            </div>
                        </div>
                    </article>
                </div>
            )
        }
        else if(CP.is_submitted){
            return(
                <div>
                    <article className="timeline-entry">
                        <div className="timeline-entry-inner">
                            <time className="timeline-time"><span>آپلود شده</span> <span className="text-muted">پایان یافته</span></time>
                            <div className="timeline-icon bg-success">
                                <i className="entypo-location"/>
                            </div>
                            <div className="timeline-label">
                                <h2><a href="#">{CP.description}</a></h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                <button type="submit" className="btn btn-secondary btn-rec" disabled>
                                    <i className="fa fa-download"/>
                                </button>
                                <button type="submit" className="btn btn-secondary btn-rec" disabled>
                                    نرسیده
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            )
        }
        else if(CP.is_last_element){
            var date2 = moment(CP.submission_deadline, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss');
            return(
                <div>
                    <article className="timeline-entry">
                        <div className="timeline-entry-inner">
                            <time className="timeline-time"><span> تاریخ پایان زمان آپلود:{date2}  </span> <span className="text-muted">هنوز نرسیده</span></time>
                            <div className="timeline-icon bg-danger">
                                <i className="entypo-location"/>
                            </div>
                            <div className="timeline-label">
                                <h2><a href="#">{CP.description}</a></h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                <button type="submit" className="btn btn-secondary btn-rec" disabled>
                                    <i className="fa fa-download"/>
                                </button>
                                <button type="submit" className="btn btn-secondary btn-rec" disabled>
                                    نرسیده
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
    else {
        return(
            <div>
                Hello
            </div>
        )
    }
};
MileStoneTemplate.PropTypes = {
    CP: PropTypes.object.isRequired
};

export default MileStoneTemplate;