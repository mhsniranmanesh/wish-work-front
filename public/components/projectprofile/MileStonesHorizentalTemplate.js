import React from 'react';

const MileStonesHorizentalTemplate = (props) =>{
   // for(var x=0 ; x< props.number_of_milestones x++)
    if(props.i % 2 === 0) {
        return (
            <div>
                <article className="timeline-entry">
                    <div className="timeline-entry-inner">
                        <time className="timeline-time"><span>تا {props.x}</span></time>
                        <div className="timeline-icon bg-primary">
                            <i className="entypo-feather"/>
                        </div>
                        <div className="timeline-label">
                            <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
    else {
        return(
        <div>
            <article className="timeline-entry left-aligned">
                <div className="timeline-entry-inner">
                    <time className="timeline-time"><span>تا {props.x}</span></time>
                    <div className="timeline-icon bg-primary">
                        <i className="entypo-suitcase"/>
                    </div>
                    <div className="timeline-label">
                        <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                    </div>
                </div>
            </article>
        </div>
        )

    }
};

export default MileStonesHorizentalTemplate;