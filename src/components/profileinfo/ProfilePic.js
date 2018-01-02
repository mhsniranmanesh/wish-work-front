import React from 'react';
import {Button} from 'reactstrap';

const ProfilePic = (props) =>{
    var Image ;
    if((props.Picture != null) || (props.Picture != undefined)) {

        if (props.Picture == '/media/') {
            Image = "http://via.placeholder.com/125x125";
            //console.log('Hello', Image);
        }
        else {
            Image = props.Picture;
           // console.log('Hi', Image);
        }
    }
    else {
        Image = "http://via.placeholder.com/125x125";
    }
    return(
        <div className="dash-con dash-profile-info con-body mb-4">

                        <span className="projectinfo">
                          <i className="fa fa-camera" aria-hidden="true"/>
                        </span>
            <span className="projectinfo">
                          <h5 style={{display:'inline'}}>تغییر عکس پروفایل</h5>
                        </span>

            <div className="dash-divider"/>
            <form className="" onSubmit={props.picUploader}>
                <div className="media">
                    <a href="#" className="">
                        <img className="rounded-circle d-flex ml-3" src={Image}  style={ {height:125 , width:125} }/>
                        <i className="fa fa-camera"/>
                    </a>
                    <div className="media-body">
                        <label htmlFor="" className="col-form-label">
                            برای تغییر عکس پروفایل، روی عکس خود کلیک کنید.
                        </label>
                        <label htmlFor="" className="col-form-label sub-label">
                                        <span className="quote justify">
                                          <i className="fa fa-quote-left" aria-hidden="true"/> فریلنسر هایی که برای خود عکسی با ظاهری دوستانه و حرفه ای انتخاب می کنند، تا 5 برابر شانس بیشتری برای پروژه انجام دادن دارند.
                                        </span>
                        </label>
                    </div>
                </div>
                <Button type="submit" className="btn btn-primary btn-rec" >
                    <i className="fa fa-check"/>آپلود عکس
                </Button>
            </form>
        </div>
    )
};

export default ProfilePic;