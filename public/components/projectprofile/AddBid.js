import React from 'react'

const Addbid = ({props}) =>{
    return(
        <div className="col-sm-4">
                <div className="con mb-4">
                    <h5 className="project-title">
                        درباره پروژه
                    </h5>
                    <div className="divider"/>
                    <div className="sub-heading">
                        <span className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></span>
                        <span className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> 2,000,000 تومان</span>
                        <span className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> 3 ماه</span>
                        <span className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> دو ساعت قبل</span>
                    </div>

                    <div className="modal fade" id="biddingModal" tabIndex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="biddingModalLabel">فرم پیشنهاد مناقصه</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form className="signup-form" action="javascript:gotonext2();">
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-danger" id="" placeholder="قیمت پیشنهادی (تومان)"/>
                                        </div>
                                        <div className="form-group">
                                            <textarea type="text" className="form-control" id="" placeholder="توضیحات"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="" placeholder="مهارت ها و ابزار هایی که قصد استفاده از آن ها را دارید."/>
                                        </div>
                                        <label htmlFor="skillType" className="col-form-label d-block">
                                            بازه های تحویل پروژه را انتخاب کنید
                                        </label>
                                        <div className="input-group mb-1">
                                            <input type="number" className="form-control" id="" placeholder="تعداد موعدهای تحویل پروژه" value="5"/>
                                                <button type="submit" className="btn btn-success btn-rec">انتخاب</button>

                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-6 text-muted">
                                                حداقل: <span className="badge badge-success">4</span>
                                            </div>
                                            <div className="col-sm-6 text-muted">
                                                حداکثر: <span className="badge badge-danger">6</span>
                                            </div>
                                        </div>
                                    </form>


                                    <div className="jumbotron">
                                        <div className="container">
                                            <div className="row">
                                                <div className="timeline-centered">
                                                    <article className="timeline-entry">
                                                        <div className="timeline-entry-inner">
                                                            <time className="timeline-time"><span>۲۴ آبان</span></time>
                                                            <div className="timeline-icon bg-primary">
                                                                <i className="entypo-feather"/>
                                                            </div>
                                                            <div className="timeline-label">
                                                                <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
                                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    <article className="timeline-entry left-aligned">
                                                        <div className="timeline-entry-inner">
                                                            <time className="timeline-time"><span>۲۴ آبان</span></time>
                                                            <div className="timeline-icon bg-primary">
                                                                <i className="entypo-suitcase"/>
                                                            </div>
                                                            <div className="timeline-label">
                                                                <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
                                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    <article className="timeline-entry">
                                                        <div className="timeline-entry-inner">
                                                            <time className="timeline-time"><span>۲۴ آبان</span></time>
                                                            <div className="timeline-icon bg-primary">
                                                                <i className="entypo-location"/>
                                                            </div>
                                                            <div className="timeline-label">
                                                                <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
                                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                    <article className="timeline-entry left-aligned">
                                                        <div className="timeline-entry-inner">
                                                            <time className="timeline-time"><span>۲۴ آبان</span></time>
                                                            <div className="timeline-icon bg-primary">
                                                                <i className="entypo-location"/>
                                                            </div>
                                                            <div className="timeline-label">
                                                                <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
                                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

                                                            </div>
                                                        </div>
                                                    </article>


                                                    <article className="timeline-entry begin">

                                                        <div className="timeline-entry-inner">
                                                            <time className="timeline-time"><span>۲۴ آبان</span></time>

                                                            <div className="timeline-icon bg-primary" style={{WebkitTransform : 'rotate(-90deg)', MozTransform: 'rotate(-90deg)'}}>
                                                                <i className="entypo-flight"/>
                                                            </div>

                                                            <div className="timeline-label">
                                                                <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
                                                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

                                                            </div>
                                                        </div>

                                                    </article>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary btn-rec">ثبت پیشنهاد</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="con mb-4">
                    <button id="biddingBtn" type="submit" className="btn btn-primary btn-rec" data-toggle="modal" data-target="#biddingModal">
                        پیشنهاد قیمت
                    </button>
                </div>
            </div>
        )
    };

export default Addbid;