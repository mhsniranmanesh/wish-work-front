import React from 'react';

const AddedBidsMileStone = (props) =>{
    return(
        <div className="modal fade" id="accBiddingModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="biddingModalLabel">اطلاعات پیشنهاد فریلنسر</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
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

                                                <div className="timeline-icon bg-primary" style={{WebkitTransform: 'rotate(-90)', MozTransform: 'rotate(-90)'}}>
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
                        <button type="button" className="btn btn-primary btn-rec">قبول پیشنهاد</button>
                    </div>
                </div>
            </div>
        </div>
    )    
};

export default AddedBidsMileStone;