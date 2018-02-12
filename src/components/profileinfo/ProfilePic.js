import React from 'react';
import {Button , Row , Col} from 'reactstrap';
import PropTypes from 'prop-types';
import Error from './Error';

const ProfilePic = (props) =>{
    var Image ;
    var colorBackground = -1;
    var colorCode;
    if(props.imagePreviewUrl === "") {
        if ((props.Picture != null) || (props.Picture != undefined)) {
            if (props.Picture == '/media/') {
                Image = require("../../../static/img/profile_pic/" + props.profileInfo.first_name[0].charCodeAt() + ".png");
                // Image = "http://via.placeholder.com/125x125";
                colorBackground = props.profileInfo.first_name[0].charCodeAt()%5;
                // console.log('Hello', Image);
            }
            else {
                Image = props.Picture;
                 //console.log('Hi', Image);
            }
        }
        else {
            Image = require("../../../static/img/profile_pic/" + props.profileInfo.first_name[0].charCodeAt() + ".png");
            // Image = "http://via.placeholder.com/125x125";
            colorBackground = props.profileInfo.first_name[0].charCodeAt()%5;
        }
    }
    else {
        Image = props.imagePreviewUrl
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
        <div className="dash-con dash-profile-info con-body mb-4">
          <div className="form-header-font-size">
            <span className="projectinfo">
              <i className="fa fa-camera" aria-hidden="true"/>
            </span>
            <span className="projectinfo mb-4">
                  <h5>تغییر عکس پروفایل</h5>
            </span>
          </div>
            <div className="dash-divider"/>
            <form className="" >
                <div className="media mt-3 mb-3">
                    <a href="#" className="">
                        <img className="rounded-circle d-flex ml-3" src={Image}  style={ {height:125 , width:125 , backgroundColor:colorCode} }/>

                        <i className="fa fa-camera"/>
                    </a>
                    <div className="media-body">
                        <label htmlFor="" className="col-form-label form-body-fontsize">
                            برای تغییر عکس پروفایل، روی عکس خود کلیک کنید.
                        </label>
                        <label htmlFor="" className="col-form-label sub-label">
                            <span className="quote justify form-body-fontsize">
                              <i className="fa fa-quote-left" aria-hidden="true"/> فریلنسر هایی که برای خود عکسی با ظاهری دوستانه و حرفه ای انتخاب می کنند، تا 5 برابر شانس بیشتری برای پروژه انجام دادن دارند.
                            </span>
                        </label>
                    </div>
                 </div>
                 <div>
                    <btn className="btn btn-primary btn-rec col-sm-4 mb-2" id="buttonImage">
                        انتخاب عکس
                        <input type="file" className="browse-pic" id="browse-pic"  onChange={(e)=>props.picUploader(e)}/>
                    </btn>
                    <div className="col-sm-3"></div>

                    <btn className="btn btn-primary btn-rec mb-2 upload-pic" onClick={props.sendPicToServer}>
                        <i className="fa fa-check" />آپلود عکس
                    </btn>
                  </div>

                {props.imageSizeValidation ? <Error message="اندازه ی عکس باید کمتر از ۱ مگابایت باشد"/> : (null)}
                {props.showError ? <Error message="لطفا فایل خود را عکس انتخاب کنید!"/> : (null)}
            </form>
        </div>
    )
};
ProfilePic.PropTypes ={
    picUploader : PropTypes.func.isRequired
}

export default ProfilePic;
