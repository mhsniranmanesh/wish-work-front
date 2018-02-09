import React from 'react';
import MileStoneFatherForFreelancer from './MileStoneFatherForFreelancer';
import MileStoneFatherForClient from './MileStoneFatherForClient';
import arraySort from 'array-sort';

const MileStones = (props)=> {
    let FreelancerProject = [];
    let ClientProject = [];
    console.log(props.AsFreelancerProject, 'AsFreelancerProject');
    console.log(props.AsClientProject, 'AsClientProject');
    if(props.AsFreelancerProject.length) {
        for (var i = 0; i < props.AsFreelancerProject.length; i++) {
            FreelancerProject[2*i]=<MileStoneFatherForFreelancer key={i}
                                                                 project_controller={props.AsFreelancerProject[i].project_controller}
                                                                 uploadFile={props.uploadFile}
                                                                 fileIsUpload={props.fileIsUpload}
                                                                 mileStoneid={props.mileStoneid}
                                                                 sendUploadedFileByFreelancer={props.sendUploadedFileByFreelancer}

            />
        }
    }
    if(props.AsClientProject.length) {
        for (var j = 0; j < props.AsClientProject.length; j++) {
            ClientProject[2*j+1]=<MileStoneFatherForClient key={j}
                                                         project_controller={props.AsClientProject[j].project_controller}
                                                         fileIsUpload={props.fileIsUpload}
                                                         mileStoneid={props.mileStoneid}
                                                         downloadFileModal={props.downloadFileModal}
                                                         reviseOnChange={props.reviseOnChange}
                                                         reviseValue={props.reviseValue}
                                                         submitFeedBack={props.submitFeedBack}
            />
        }
    }
    //yek myfunc tuye toolbar tarif kon ke az babae miad , badesh ru un ke click mikone ye chi tu state avaz mishe ke un inja ham hast va baes mishe inja
    //ham avaz she
    // tuye tul bar yeja be onvane freelancer va client dare ;)
    if(props.AsFreelancerProject.length && (props.numberSee%2 === 0)) {
        return (
            <div>
                {FreelancerProject[props.numberSee]}
            </div>
        )
    }
    else if(props.AsClientProject.length && (props.numberSee %2 === 1)){
        console.log(ClientProject , 'ClientProject');
        return(
            <div>
                {ClientProject[props.numberSee]}
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
    }
};
export default MileStones;

// <div className="container">
//     <div className="row">
//     <div className="timeline-centered">
//     <article className="timeline-entry">
//     <div className="timeline-entry-inner">
//     <time className="timeline-time"><span>۲۴ آبان</span> <span className="text-muted">تحویل و تایید شد</span></time>
// <div className="timeline-icon bg-primary">
//     <i className="entypo-feather"/>
// </div>
// <div className="timeline-label">
//     <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
// <p className="form-body-fontsize beauty-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
// <button type="submit" className="btn btn-primary btn-rec">
//     <i className="fa fa-download"/>
//     </button>
// <button type="submit" className="btn btn-secondary btn-rec" disabled>
//     تایید شده
// </button>
// </div>
// </div>
// </article>
// <article className="timeline-entry left-aligned">
//     <div className="timeline-entry-inner">
//         <time className="timeline-time"><span>۲۴ آبان</span> <span className="text-muted">تحویل در انتظار تایید</span></time>
//         <div className="timeline-icon bg-success">
//         <i className="entypo-suitcase"/>
//         </div>
//         <div className="timeline-label">
//             <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
//             <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
//             <button type="submit" className="btn btn-primary btn-rec">
//                 <i className="fa fa-download"/>
//             </button>
//             <button type="submit" className="btn btn-primary btn-rec">
//                 تایید؟
//             </button>
//         </div>
//         </div>
// </article>
// <article className="timeline-entry">
//     <div className="timeline-entry-inner">
//         <time className="timeline-time"><span>۲۴ آبان</span> <span className="text-muted">هنوز نرسیده</span></time>
//         <div className="timeline-icon bg-secondary">
//             <i className="entypo-location"/>
//         </div>
//         <div className="timeline-label">
//             <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
//             <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
//             <button type="submit" className="btn btn-secondary btn-rec" disabled>
//                 <i className="fa fa-download"/>
//             </button>
//             <button type="submit" className="btn btn-secondary btn-rec" disabled>
//                 نرسیده
//             </button>
//         </div>
//     </div>
//     </article>
//     <article className="timeline-entry left-aligned">
//         <div className="timeline-entry-inner">
//             <time className="timeline-time"><span>۲۴ آبان</span> <span className="text-muted">هنوز نرسیده</span></time>
//             <div className="timeline-icon bg-secondary">
//                 <i className="entypo-location"/>
//             </div>
//             <div className="timeline-label">
//                 <h2><a href="#"><span>صفحات </span>۱ تا ۲۵</a></h2>
//                 <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
//                 <button type="submit" className="btn btn-secondary btn-rec" disabled>
//                     <i className="fa fa-download"/>
//                 </button>
//                 <button type="submit" className="btn btn-secondary btn-rec" disabled>
//                     نرسیده
//                 </button>
//             </div>
//         </div>
//     </article>
//
//
//     <article className="timeline-entry begin">
//     <div className="timeline-entry-inner">
//     <div className="timeline-icon" style={{WebkitTransform: 'rotate(-90deg)',MozTransform: 'rotate(-90deg)'}}>
//     <i className="entypo-flight"/>
//     </div>
// </div>
//
// </article>
//
// </div>
// </div>
// </div>
