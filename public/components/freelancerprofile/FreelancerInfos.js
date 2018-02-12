import React from 'react';
import PropTypes from 'prop-types';
import Tags from './TranslationTags';
const FreelancerInfos = (props) =>{
    let Image ;
    let colorBackground;
    let colorCode;
    if(props.freelancerDetail.profile_picture != null){
        Image = props.freelancerDetail.profile_picture
    }
    else{
        Image = require("../../../static/img/profile_pic/" + Bid.freelancer.first_name[0].charCodeAt() + ".png");
        // Image = "http://via.placeholder.com/125x125";
        colorBackground = profileInfo.first_name[0].charCodeAt()%5;
    }
    if(colorBackground === 0){
        colorCode = '#018abe'
    }
    else if(colorBackground === 1){
        colorCode = '#014762'
    }
    else if(colorBackground === 2){
        colorCode = '#69144F'
    }
    else if(colorBackground === 3){
        colorCode = '#c96929'
    }
    else if(colorBackground === 4){
        colorCode = '#707117'
    }
    return(
        <div>
            <div className="con fl-p mb-4">
                <div className="media">
                    <img className="d-flex  ml-3 rounded-circle" src={Image}
                         style={{height:60 , width:60 , backgroundColor:colorCode}}/>
                    <div className="media-body">
                        <h5 className="name">{props.freelancerDetail.first_name + ' ' + props.freelancerDetail.last_name} </h5>
                        <h6 className="s-discript">{props.freelancerDetail.title}</h6>
                        <div className="divider"/>
                        <span className="discript">
                                {props.freelancerDetail.bio}
                        </span>

                    </div>
                </div>

                 تحصیلات : {props.freelancerDetail.university}

                {props.showSkills ?<Tags Skills={props.Skills}/> : (null)}
            </div>
        </div>
    )
};

FreelancerInfos.PropTypes = {
    freelancerDetail : PropTypes.object.isRequired
};

export default FreelancerInfos