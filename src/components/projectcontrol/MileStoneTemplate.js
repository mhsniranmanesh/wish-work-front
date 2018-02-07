import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment-jalaali';
import {Button} from 'reactstrap';
//project_controller_element_attachments
const MileStoneTemplate = ({CP , uploadFile , uploadSendToServerButton, sendUploadedFileByFreelancer}) => {
    var today = new Date().getTime();
    var submission_deadline = new Date(CP.submission_deadline).getTime();
    var timeDiffFromSubmission = submission_deadline - today;
    var diffSecFromSubmission = Math.floor(timeDiffFromSubmission / 1000);
    var diffMinutesFromSubmission = Math.floor(diffSecFromSubmission / 60) % 60;
    var diffHoursFromSubmission = Math.floor(diffSecFromSubmission / 3600) % 24;
    var diffDaysFromSubmission = Math.floor(diffSecFromSubmission / (3600 * 24));
    if(CP) {
        if (CP.is_started) {
            if (diffSecFromSubmission > 0) {
                if (!CP.is_submitted) {
                    var date = moment(CP.submission_deadline, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss');
                    return (
                        <div>
                            <article className="timeline-entry">
                                <div className="timeline-entry-inner">
                                    <time className="timeline-time"><span> تاریخ پایان مهلت زمان آپلود:{date}
                            </span> <span className="text-muted">در حال انجام</span></time>
                                    <div className="timeline-icon bg-primary">
                                        <i className="entypo-location"/>
                                    </div>
                                    <div className="timeline-label">
                                        <h2><a href="#">{CP.description}</a></h2>
                                        {uploadSendToServerButton ? <Button type="submit"
                                                                            color="secondary"
                                                                            className="btn btn-secondary btn-rec"
                                                                            onClick={sendUploadedFileByFreelancer}>
                                            <i className="fa fa-download fa-download-dash-cp-success"/>
                                        </Button> : (null)}
                                        <input type="file" color="secondary" className="btn btn-secondary btn-rec"
                                               onChange={(event) => {
                                                   uploadFile(event, CP.uuid);
                                               }} placeholder="آپلود کنید"/>
                                    </div>
                                </div>
                            </article>
                        </div>
                    )
                }
                else if (CP.is_submitted && (!CP.is_revised)) {
                    return (
                        <div>
                            <article className="timeline-entry">
                                <div className="timeline-entry-inner">
                                    <time className="timeline-time">
                                      <span>آپلود شده</span> <span className="text-muted">در انتظار نظر کارفرما  </span>
                                    </time>
                                    <div className="timeline-icon bg-warning">
                                        <i className="entypo-location"/>
                                    </div>
                                    <div className="timeline-label">
                                        <h2><a href="#">{CP.description}</a></h2>
                                        {/*<button type="submit" className="btn btn-secondary btn-rec" disabled>*/}
                                        {/*<i className="fa fa-download"/>*/}
                                        {/*</button>*/}
                                        {uploadSendToServerButton ?
                                            <Button type="submit" color="secondary"
                                                    className="btn btn-secondary btn-rec"
                                                    onClick={sendUploadedFileByFreelancer}>
                                                <i className="fa fa-download fa-download-dash-cp-notyet"/>
                                            </Button> : (null)}
                                        <input type="file" color="secondary" className="btn btn-secondary btn-rec"
                                               onChange={(event) => {
                                                   uploadFile(event, CP.uuid);
                                               }} placeholder="تغییر فایل"/>
                                    </div>
                                </div>
                            </article>
                        </div>
                    )
                }
                else if (CP.is_submitted && CP.is_revised) {
                    return (
                        <div>
                            <article className="timeline-entry">
                                <div className="timeline-entry-inner">
                                    <time className="timeline-time"><span>  </span> <span
                                        className="text-muted">پایان یافته</span></time>
                                    <div className="timeline-icon bg-success">
                                        <i className="entypo-location"/>
                                    </div>
                                    <div className="timeline-label">
                                        <h2><a href="#">{CP.description}</a></h2>
                                        <p>خواسته ی کارفرما از شما برای مایل استون بعدی</p>
                                        <p>{CP.project_controller_element_attachments[0].client_feedback}</p>
                                        {/*<button type="submit" className="btn btn-secondary btn-rec" disabled>*/}
                                        {/*<i className="fa fa-download"/>*/}
                                        {/*</button>*/}
                                        {/*<button type="submit" className="btn btn-secondary btn-rec" disabled>*/}
                                        {/*نرسیده*/}
                                        {/*</button>*/}
                                    </div>
                                </div>
                            </article>
                        </div>
                    )
                }
                else {
                    return (
                        <div>
                        </div>
                    )
                }
            }
            else {
                //submission deadline end ?
                return (
                    <div>
                        <article className="timeline-entry">
                            <div className="timeline-entry-inner">
                                <time className="timeline-time"><span>  </span> <span className="text-muted">
                                    پروژه ی شما به علت تاخیر در ارائه فایل کنسل شد</span>
                                </time>
                                <div className="timeline-icon bg-danger">
                                    <i className="entypo-location"/>
                                </div>
                                <div className="timeline-label">
                                    <h2><a href="#">{CP.description}</a></h2>
                                    {/*<button type="submit" className="btn btn-secondary btn-rec" disabled>*/}
                                    {/*<i className="fa fa-download"/>*/}
                                    {/*</button>*/}
                                    {/*<button type="submit" className="btn btn-secondary btn-rec" disabled>*/}
                                    {/*نرسیده*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </article>
                    </div>
                )
            }
        }
        else {
            //is_started false ?
            return (
                <div>
                    <article className="timeline-entry">
                        <div className="timeline-entry-inner">
                            <time className="timeline-time"><span>  </span> <span
                                className="text-muted">شروع نشده</span></time>
                            <div className="timeline-icon bg-secondary">
                                <i className="entypo-location"/>
                            </div>
                            <div className="timeline-label">
                                <h2><a href="#">{CP.description}</a></h2>
                                {/*<button type="submit" className="btn btn-secondary btn-rec" disabled>*/}
                                {/*<i className="fa fa-download"/>*/}
                                {/*</button>*/}
                                {/*<button type="submit" className="btn btn-secondary btn-rec" disabled>*/}
                                {/*نرسیده*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    </article>
                </div>
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
