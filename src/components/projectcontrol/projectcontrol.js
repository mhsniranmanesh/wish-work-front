import React from 'react';

class ProjectControl extends React.Component{
  render(){
    return(
      <div className="content-wrapper py-3">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-8 d-block mx-auto">
                      <div className="dash-con dash-new-project con-body mb-4">
                          <h5 className="form-title-fontsize">کنترل پروژه</h5>
                          <div className="dash-divider"/>
                          <label className="col-form-label form-header-fontsize">زمان بندی پروژه شما</label>
                          <div className="container">
                              <div className="row">
                                  <div className="timeline-centered">
                                      <article className="timeline-entry">
                                          <div className="timeline-entry-inner">
                                              <time className="timeline-time"><span>۲۴ آبان</span> <span className="text-muted">تحویل و تایید شد</span></time>
                                              <div className="timeline-icon bg-primary">
                                                  <i className="entypo-feather"/>
                                              </div>
                                              <div className="timeline-label">
                                                  <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
                                                  <p className="form-body-fontsize beauty-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                                  <button type="submit" className="btn btn-primary btn-rec">
                                                      <i className="fa fa-download"/>
                                                  </button>
                                                  <button type="submit" className="btn btn-secondary btn-rec" disabled>
                                                      تایید شده
                                                  </button>
                                              </div>
                                          </div>
                                      </article>
                                      <article className="timeline-entry left-aligned">
                                          <div className="timeline-entry-inner">
                                              <time className="timeline-time"><span>۲۴ آبان</span> <span className="text-muted">تحویل در انتظار تایید</span></time>
                                              <div className="timeline-icon bg-success">
                                                  <i className="entypo-suitcase"/>
                                              </div>
                                              <div className="timeline-label">
                                                  <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
                                                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                                  <button type="submit" className="btn btn-primary btn-rec">
                                                      <i className="fa fa-download"/>
                                                  </button>
                                                  <button type="submit" className="btn btn-primary btn-rec">
                                                      تایید؟
                                                  </button>
                                              </div>
                                          </div>
                                      </article>
                                      <article className="timeline-entry">
                                          <div className="timeline-entry-inner">
                                              <time className="timeline-time"><span>۲۴ آبان</span> <span className="text-muted">هنوز نرسیده</span></time>
                                              <div className="timeline-icon bg-secondary">
                                                  <i className="entypo-location"/>
                                              </div>
                                              <div className="timeline-label">
                                                  <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
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
                                      <article className="timeline-entry left-aligned">
                                          <div className="timeline-entry-inner">
                                              <time className="timeline-time"><span>۲۴ آبان</span> <span className="text-muted">هنوز نرسیده</span></time>
                                              <div className="timeline-icon bg-secondary">
                                                  <i className="entypo-location"/>
                                              </div>
                                              <div className="timeline-label">
                                                  <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
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


                                      <article className="timeline-entry begin">

                                          <div className="timeline-entry-inner">
                                            <div className="timeline-icon" style={{WebkitTransform: 'rotate(-90deg)',MozTransform: 'rotate(-90deg)'}}>
                                               <i className="entypo-flight"/>
                                            </div>
                                          </div>

                                      </article>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

module.exports = ProjectControl;
