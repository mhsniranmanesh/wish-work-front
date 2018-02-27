import React from 'react';
import {Button} from 'reactstrap';
import moment from 'moment-jalaali';
const MileStoneTemplateForClient = ({CPClient , downloadFileModal ,
                                        priceForCashIn , reviseOnChange ,toPersianNum,
                                        reviseValue, submitFeedBack , donate})=>{
    var today = new Date().getTime();
    var revision_deadline = new Date(CPClient.revision_deadline).getTime();
    var submission_deadline = new Date(CPClient.submission_deadline).getTime();
    var timeDiffFromSubmission = submission_deadline - today;
    var diffSecFromSubmission = Math.floor(timeDiffFromSubmission / 1000);
    var timeDiffFromRevison = revision_deadline - today;
    var diffSecFromRevison = Math.floor(timeDiffFromRevison / 1000);
    if(CPClient.is_started){
        if(CPClient.is_submitted){
            if(CPClient.is_revised){
                return (
                    <div>

                        <article className="timeline-entry">
                            <div className="timeline-entry-inner">
                                <div className="col-sm-6">
                                    <div className="timeline-icon bg-success">
                                        <i className="entypo-location"/>
                                    </div>
                                    <div className="timeline-label">
                                        <h2 className="form-header-fontsize"><a href="#">{toPersianNum(CPClient.description)}</a></h2>
                                    </div>
                                </div>
                                <time className="timeline-time">
                                  <div className="dash-cp-file">
                                      <a download="wish-work-file" href={CPClient.project_controller_element_attachments[0].file} target="_blank">
                                              <span id="download-symbol-dash-cp">
                                                <i className="fa fa-download fa-download-dash-cp" aria-hidden="true"/>
                                              </span>
                                              <span className="file-subject">فایل پروژه ی شما</span>
                                      </a>
                                  </div>
                                  <span className="text-muted">بازنگری شده</span>
                                </time>
                            </div>
                        </article>
                    </div>
                )
            }
            else if(diffSecFromRevison>0){
                //mohlat vase emal nazar dare
                if(CPClient.project_controller_element_attachments[0].file){
                    if(!CPClient.is_last_element) {
                        var date = moment(CPClient.revision_deadline, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss');
                        return (
                            <div>

                                <article className="timeline-entry">
                                    <div className="timeline-entry-inner">
                                      <div className="col-sm-6">
                                            <div className="timeline-icon bg-warning">
                                                <i className="entypo-location"/>
                                            </div>
                                            <div className="timeline-label">
                                                <h2 className="form-header-fontsize"><a href="#">{toPersianNum(CPClient.description)}</a></h2>
                                                <textarea type="text" className="form-control form-body-fontsize"
                                                          id="Popover4"
                                                          placeholder="انتقادات و پیشنهادات خود را در این بخش بنویسید"
                                                          onChange={reviseOnChange} value={reviseValue}/>
                                                <button
                                                        className="btn btn-success btn-rec" onClick={(event) => {
                                                    submitFeedBack(CPClient.project_controller_element_attachments[0].uuid);
                                                }}>
                                                    <i className="fa fa-comment fa-download-dash-cp-now"/>
                                                    تایید
                                                </button>
                                            </div>
                                        </div>
                                        <time className="timeline-time">
                                          <div className="dash-cp-file">
                                              <a download="wish-work-cp-file" href={CPClient.project_controller_element_attachments[0].file} target="_blank">
                                                  <span id="download-symbol-dash-cp">
                                                    <i className="fa fa-download fa-download-dash-cp" aria-hidden="true"/>
                                                  </span>
                                                  <span className="file-subject">فایل پروژه ی شما</span>
                                              </a>
                                          </div>
                                          <span className="text-muted form-body-fontsize">فایل خود را دانلود کنید ، اگر پیشنهاد و یا انتقادی به ترجمه دارید میتوانید اینجا بفرستید،
                                            در غیر این صورت بر روی تایید کلیک کنید. <span className="point">مهلت ثبت بازنگری {date}</span>
                                          </span>
                                        </time>
                                    </div>
                                </article>
                            </div>
                        )
                    }
                    else {
                        //milestone e akhar
                        return (
                            <div>
                                <article className="timeline-entry">
                                    <div className="timeline-entry-inner">
                                        <div className="col-sm-6">
                                            <div className="timeline-icon bg-warning">
                                                <i className="entypo-location"/>
                                            </div>
                                            <div className="timeline-label">
                                                <h2 className="form-header-fontsize"><a href="#">{toPersianNum(CPClient.description)}</a></h2>
                                                <textarea type="text" className="form-control form-body-fontsize" id="Popover4"
                                                          placeholder="انتقادات و پیشنهادات خود را در این بخش بنویسید"/>
                                                <button type="submit" className="btn btn-secondary btn-rec">
                                                    تایید
                                                    <i className="fa fa-comment"/>
                                                </button>
                                            </div>
                                        </div>
                                        <time className="timeline-time">
                                            <div className="dash-cp-file" onClick={(event) => {
                                                downloadFileModal('its the end' , CPClient.project_controller_element_attachments[0].uuid);donate();
                                            }}>
                                                <a download="wish-work-file" target="_blank">
                                                  <span id="download-symbol-dash-cp">
                                                    <i className="fa fa-download fa-download-dash-cp"  aria-hidden="true"/>
                                                  </span>
                                                  <span className="file-subject">فایل پروژه ی شما</span>
                                                </a>
                                            </div>
                                            <span className="text-muted form-body-fontsize">فایل خود را دانلود کنید ، اگر پیشنهاد و یا انتقادی به ترجمه دارید میتوانید اینجا بفرستید،
                                              در غیر این صورت بر روی تایید کلیک کنید</span>
                                        </time>
                                    </div>
                                </article>
                            </div>
                        )
                    }
                }
                else if(priceForCashIn) {
                    return (
                        <div>

                            <article className="timeline-entry">
                                <div className="timeline-entry-inner">
                                    <div className="col-sm-6">
                                        <div className="timeline-icon bg-warning">
                                            <i className="entypo-location"/>
                                        </div>
                                        <div className="timeline-label">
                                            <h2 className="form-header-fontsize"><a href="#">{toPersianNum(CPClient.description)}</a></h2>
                                        </div>
                                    </div>
                                    <div className="btn btn-primary" onClick={(event) => {
                                        downloadFileModal(priceForCashIn, CPClient.uuid);
                                    }}>
                                        <a download="wish-work-cp-file" target="_blank">
                                            <span className="file-subject">پرداخت وجه</span>
                                        </a>
                                    </div>
                                    <time className="timeline-time">
                                        <span className="text-muted form-body-fontsize">برای دیدن فایل پروژه ی خود ابتدا باید مبلغ مایل استون بعدی را واریز کنید</span>
                                    </time>
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
                //مهلت بازنگری تمام شده است
                return (
                    <div>
                        <article className="timeline-entry">
                            <div className="timeline-entry-inner">
                                <div className="col-sm-6">
                                    <div className="timeline-icon bg-danger">
                                        <i className="entypo-location"/>
                                    </div>
                                    <div className="timeline-label">
                                        <h2 className="col-sm-6"><a href="#">{toPersianNum(CPClient.description)}</a></h2>
                                    </div>
                                </div>
                                <time className="timeline-time">
                                    <span className="text-muted form-body-fontsize">پروژه از طرف شما به علت نپرداختن وجه کنسل شد.</span>
                                </time>
                            </div>
                        </article>
                    </div>
                )

            }
        }
        else{
            //هنوز سابمیت نکرده
            if(diffSecFromSubmission>0) {
                return (
                    <div>
                        <article className="timeline-entry">
                            <div className="timeline-entry-inner">
                                <div className="col-sm-6">
                                  <div className="timeline-icon bg-primary">
                                      <i className="entypo-location"/>
                                  </div>
                                  <div className="timeline-label">
                                      <h2 className="form-header-fontsize"><a href="#">{toPersianNum(CPClient.description)}</a></h2>
                                    {  /*<Button type="submit" color="secondary" className="btn btn-secondary btn-rec">
                                          <i className="fa fa-download fa-download-dash-cp-now"/>
                                      </Button>*/}
                                  </div>
                                </div>
                                <time className="timeline-time">
                                  <span className="text-muted form-body-fontsize">در حال انجام</span>
                                </time>
                            </div>
                        </article>
                    </div>
                )
            }
            else {
                return(
                    <div>
                        <article className="timeline-entry">
                            <div className="timeline-entry-inner">
                                <div className="col-sm-6">
                                    <div className="timeline-icon bg-warning">
                                        <i className="entypo-location"/>
                                    </div>
                                    <div className="timeline-label">
                                        <h2 className="form-header-fontsize"><a href="#">{toPersianNum(CPClient.description)}</a></h2>
                                    </div>
                                </div>
                                <time className="timeline-time">
                                    <span className="text-muted form-body-fontsize">فریلنسر شما پروژه را انجام نداده و پروژه به صورت خودکار کنسل شد، وجه شما طی دوروز آینده به حسابتان واریز می شود</span>
                                </time>
                            </div>
                        </article>
                    </div>

                )
            }
        }
    }
    else{
        //هنوز نرسیده
        return (
            <div>
                <article className="timeline-entry">
                    <div className="timeline-entry-inner">
                        <div className="col-sm-6">
                          <div className="timeline-icon bg-secondary">
                              <i className="entypo-location"/>
                          </div>
                          <div className="timeline-label">
                              <h2 className="form-header-fontsize"><a href="#">{toPersianNum(CPClient.description)}</a></h2>
                          </div>
                        </div>
                        <time className="timeline-time">
                            <span className="text-muted form-body-fontsize">هنوز نرسیده</span>
                        </time>

                    </div>
                </article>
            </div>
        )

    }
    return(
        <div></div>
    )
};

export default MileStoneTemplateForClient;
