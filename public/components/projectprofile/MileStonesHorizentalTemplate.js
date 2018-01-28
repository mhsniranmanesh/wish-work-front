import React from 'react';
import {Row , Col} from 'reactstrap';

const MileStonesHorizentalTemplate = (props) =>{
   // for(var x=0 ; x< props.number_of_milestones x++)
    // var numberDivided = Math.floor(numberDivided/)
    var end = props.a -1;
    if(props.i === 0 && end === 0) {
        return (
            <div>
                <div className="milestone">
                    <article className="timeline-entry">
                        <Row>
                            <div className="timeline-entry-inner">
                                <Col>
                                    <time className="timeline-time"><span className="cp-deadline-left">شروع!</span>
                                    </time>
                                </Col>
                                <Col id="badge-margin">
                                    <div className="timeline-icon bg-success" id="bg-primary-right">
                                        <i className="entypo-feather"/>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="timeline-label ">
                                        <h2><a href="#">
                                            <div></div>
                                        </a></h2>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </article>
                </div>
                <div className="milestone">
                    <article className="timeline-entry">
                        <Row>
                            <div className="timeline-entry-inner">
                                <Col>
                                    <time className="timeline-time"><span className="cp-deadline-left">تا {props.x} روز دیگر</span>
                                    </time>
                                </Col>
                                <Col id="badge-margin">
                                    <div className="timeline-icon bg-danger" id="bg-primary-right">
                                        <i className="entypo-feather"/>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="timeline-label ">
                                        <h2><a href="#">
                                            <div>تا صفحه {props.page}</div>
                                        </a></h2>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </article>
                </div>
            </div>


        );
    }
    else if(props.i === 0){
        return (
            <div className="milestone">
                <article className="timeline-entry">
                    <Row>
                        <div className="timeline-entry-inner">
                            <Col>
                                <time className="timeline-time"><span className="cp-deadline-left">شروع!</span></time>
                            </Col>
                            <Col id="badge-margin">
                                <div className="timeline-icon bg-success" id="bg-primary-right">
                                    <i className="entypo-feather"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="timeline-label ">
                                    <h2><a href="#"><div></div></a></h2>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </article>
                <div>
                    <article className="timeline-entry left-aligned">
                        <Row>
                            <div className="timeline-entry-inner">
                                <Col>
                                    <time className="timeline-time"><span className="cp-deadline-right">تا {props.x} روز دیگر </span></time>
                                </Col>
                                <Col>
                                    <div className="timeline-icon bg-primary" id="bg-primary-left">
                                        <i className="entypo-suitcase"/>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="timeline-label">
                                        <h2><a href="#"><div>تا صفحه {props.page}</div></a></h2>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </article>
                </div>
            </div>


        )
    }
    else if(props.i === end){
        return(
            <div className="milestone">
                <article className="timeline-entry">
                    <Row>
                        <div className="timeline-entry-inner">
                            <Col>
                                <time className="timeline-time"><span className="cp-deadline-left">تا {props.x} روز دیگر</span></time>
                            </Col>
                            <Col id="badge-margin">
                                <div className="timeline-icon bg-danger" id="bg-primary-right">
                                    <i className="entypo-feather"/>
                                </div>
                            </Col>
                            <Col>
                                <div className="timeline-label ">
                                    <h2><a href="#"><div>تا صفحه {props.page}</div></a></h2>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </article>
            </div>
        )
    }
    else if((props.i % 2 !== 0) && (props.i !== end)) {
        return (
            <div className="milestone">
                <article className="timeline-entry">
                  <Row>
                        <div className="timeline-entry-inner">
                          <Col>
                            <time className="timeline-time"><span className="cp-deadline-left">تا {props.x} روز دیگر</span></time>
                          </Col>
                          <Col id="badge-margin">
                            <div className="timeline-icon bg-primary" id="bg-primary-right">
                                <i className="entypo-feather"/>
                            </div>
                          </Col>
                          <Col>
                            <div className="timeline-label ">
                                <h2><a href="#"><div>تا صفحه {props.page}</div></a></h2>
                            </div>
                          </Col>
                        </div>
                  </Row>
                </article>
            </div>
        )
    }

    else {
        return(
        <div>
            <article className="timeline-entry left-aligned">
              <Row>
                  <div className="timeline-entry-inner">
                    <Col>
                      <time className="timeline-time"><span className="cp-deadline-right">تا {props.x} روز دیگر </span></time>
                    </Col>
                    <Col>
                      <div className="timeline-icon bg-primary" id="bg-primary-left">
                          <i className="entypo-suitcase"/>
                      </div>
                    </Col>
                    <Col>
                      <div className="timeline-label">
                          <h2><a href="#"><div>تا صفحه {props.page}</div></a></h2>
                      </div>
                    </Col>
                  </div>
              </Row>
            </article>
        </div>
        )

    }
};

export default MileStonesHorizentalTemplate;
