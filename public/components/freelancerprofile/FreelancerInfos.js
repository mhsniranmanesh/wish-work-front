import React from 'react';
import PropTypes from 'prop-types';
import Tags from './TranslationTags';
const FreelancerInfos = (props) =>{
    let Image ;
    let colorBackground;
    let colorCode;
    if(props.freelancerDetail.profile_picture != null || (props.freelancerDetail.profile_picture != undefined)){
        Image = props.freelancerDetail.profile_picture
    }
    else{
        console.log(props.freelancerDetail.length , 'props.freelancerDetail.length');
        if(props.freelancerDetail.first_name) {
            Image = require("../../../static/img/profile_pic/" + props.freelancerDetail.first_name[0].charCodeAt() + ".png");
            // Image = "http://via.placeholder.com/125x125";
            colorBackground = props.freelancerDetail.first_name[0].charCodeAt() % 5;
        }
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
    // console.log(props.freelancerDetail.first_name[0] , 'props.freelancerDetail.first_name[0]');
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
                <div className="freelancer-char-box ">
                      <div className="freelancer-char">
                             <span className="form-header-fontsize"> تحصیلات </span>
                             :
                             <span className="form-body-fontsize"> {props.freelancerDetail.university} </span>
                      </div>

                      <div className="freelancer-char">
                             <span className="form-header-fontsize"> دانشگاه </span>
                             :
                             <span className="form-body-fontsize"> دانشگاه تهران </span>
                      </div>

                      <div className="freelancer-char">
                             <span className="form-header-fontsize"> عنوان حرفه ای </span>
                             :
                             <span className="form-body-fontsize"> مترجم فارسی به انگلیسی </span>
                      </div>

                      <div className="freelancer-char">
                             <span className="form-header-fontsize"> در مورد من </span>
                             :
                             <span className="form-body-fontsize"> من دانشجوی مترجمی زبان انگلیسی دانشگاه تهران هستم و از بدو ورود به دانشگاه و حتی قیل از آن بدلیل علاقه فراوان به این کار به کار در این زمینه مشغول بوده ام. مدارک حرفه ای زیادی و لوح تقدیر های فراوان در این زمینه دارا می باشم </span>
                      </div>
                 </div>
                 <div>
                      <span className="form-header-fontsize">مهارت های من</span> 
                        :
                      <span>{props.showSkills ?<Tags Skills={props.Skills}/> : (null)}</span>
                 </div>
            </div>
        </div>
    )
};

FreelancerInfos.PropTypes = {
    freelancerDetail : PropTypes.object.isRequired
};

export default FreelancerInfos
