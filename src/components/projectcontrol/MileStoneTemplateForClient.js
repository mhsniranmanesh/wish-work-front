import React from 'react';
import {Button} from 'reactstrap';
const MileStoneTemplateForClient = ({CPClient})=>{
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
                    <div className="row">
                        <article className="timeline-entry">
                            <div className="timeline-entry-inner">
                                <time className="timeline-time">
                                  <span className="text-muted">بازنگری شده</span>
                                </time>
                                <div className="timeline-icon bg-success">
                                    <i className="entypo-location"/>
                                </div>
                                <div className="timeline-label">
                                    <h2><a href="#">{CPClient.description}</a></h2>
                                      <button type="submit" class="btn btn-primary btn-rec">
                                          <i class="fa fa-download fa-download-dash-cp-success"></i>
                                      </button>
                                    <input type="file" color="secondary" className="btn btn-secondary btn-rec" placeholder="آپلود کنید"/>
                                </div>
                            </div>
                        </article>
                    </div>
                )
            }
            else if(diffSecFromRevison>0){
                //mohlat vase emal nazar dare
                return (
                    <div className="row">
                        <article className="timeline-entry">
                              <div className="timeline-entry-inner">
                                <div className="timeline-time">
                                  <span className="text-muted">فایل خود را دانلود کنید ، اگر پیشنهاد و یا انتقادی به ترجمه دارید میتوانید اینجا بفرستید،
                                    در غیر این صورت بر روی تایید کلیک کنید</span>
                                </div>

                                  <div className="timeline-icon bg-warning">
                                      <i className="entypo-location"/>
                                  </div>

                                  <div className="timeline-label">
                                      <h2><a href="#">{CPClient.description}</a></h2>
                                      <textarea type="text" className="form-control form-body-fontsize" id="Popover4" placeholder="انتقادات و پیشنهادات خود را در این بخش بنویسید"/>
                                      <Button type="submit" color="secondary" className="btn btn-secondary btn-rec">
                                          <i className="fa fa-download fa-download-dash-cp-now"/>
                                      </Button>
                                  </div>
                                </div>
                         </article>
                    </div>
                )
            }
            else {
                //مهلت بازنگری تمام شده است
                return (
                    <div>
                        <article className="timeline-entry">
                            <div className="timeline-entry-inner">
                                <time className="timeline-time"><span>
                            </span> <span className="text-muted">پروژه از طرف شما به علت نپرداختن وجه کنسل شد.</span></time>
                                <div className="timeline-icon bg-danger">
                                    <i className="entypo-location"/>
                                </div>
                                <div className="timeline-label">
                                    <h2><a href="#">{CPClient.description}</a></h2>
                                    <Button type="submit" color="secondary" className="btn btn-secondary btn-rec">
                                        <i className="fa fa-download fa-download-dash-cp-notyet"/>
                                    </Button>
                                    <input type="file" color="secondary" className="btn btn-secondary btn-rec" placeholder="آپلود کنید"/>
                                </div>
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
                                <time className="timeline-time"><span>
                            </span> <span className="text-muted">در حال انجام</span></time>
                                <div className="timeline-icon bg-primary">
                                    <i className="entypo-location"/>
                                </div>
                                <div className="timeline-label">
                                    <h2><a href="#">{CPClient.description}</a></h2>
                                    <Button type="submit" color="secondary" className="btn btn-secondary btn-rec">
                                        <i className="fa fa-download fa-download-dash-cp-notyet"/>
                                    </Button>
                                </div>
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
                                <time className="timeline-time"><span>
                            </span> <span className="text-muted">فریلنسر شما پروژه را انجام نداده و پروژه به صورت خودکار کنسل شد، وجه شما طی دوروز آینده به حسابتان واریز می شود</span></time>
                                <div className="timeline-icon bg-warning">
                                    <i className="entypo-location"/>
                                </div>
                                <div className="timeline-label">
                                    <h2><a href="#">{CPClient.description}</a></h2>
                                    <Button type="submit" color="secondary" className="btn btn-secondary btn-rec">
                                        <i className="fa fa-download fa-download-dash-cp-notyet"/>
                                    </Button>
                                </div>
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
                        <time className="timeline-time"><span>
                            </span> <span className="text-muted">هنوز نرسیده</span></time>
                        <div className="timeline-icon bg-secondary">
                            <i className="entypo-location"/>
                        </div>
                        <div className="timeline-label">
                            <h2><a href="#">{CPClient.description}</a></h2>
                            <Button type="submit" color="secondary" className="btn btn-secondary btn-rec">
                                <i className="fa fa-download fa-download-dash-cp-notyet"/>
                            </Button>
                        </div>
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
