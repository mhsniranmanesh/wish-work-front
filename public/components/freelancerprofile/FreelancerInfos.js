import React from 'react';
import PropTypes from 'prop-types';

const FreelancerInfos = (props) =>{
    let Image ;
    if(props.freelancerDetail.profile_picture != null){
        Image = props.freelancerDetail.profile_picture

    }
    else{
        Image = "http://via.placeholder.com/125x125"
    }
    return(
        <div>
            <div className="con fl-p mb-4">
                <div className="media">
                    <img className="d-flex  ml-3 rounded-circle" src={Image} width="100" height="100"/>
                    <div className="media-body">
                        <h5 className="name">{props.freelancerDetail.first_name + ' ' + props.freelancerDetail.last_name} </h5>
                        <h6 className="s-discript">{props.freelancerDetail.title}</h6>
                        <div className="divider"/>
                        <span className="discript">
                                {props.freelancerDetail.bio}
                        </span>
                        <div className="sub-heading">
                            <a className="tag" href="#">#فارسی_به_انگلیسی</a>
                            <a className="tag" href="#">#علمی</a>
                            <a className="tag" href="#">#زیست_شناسی</a>
                            <a className="tag" href="#">#میکرو_بیولوژی</a>
                            <a className="tag" href="#">#فوری</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

FreelancerInfos.PropTypes = {
    freelancerDetail : PropTypes.object.isRequired
};

export default FreelancerInfos