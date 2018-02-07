import React from 'react'
import {Popover, PopoverHeader, PopoverBody} from 'reactstrap';
import PropTypes from 'prop-types';

const ProfileInfoForDashboard = ({profileInfo , togglePopoverWishcoin , popoverOpenWishcoin}) =>{
    let Image ;
    if((profileInfo.profile_picture != null) || (profileInfo.profile_picture != undefined)){
        if(profileInfo.profile_picture == '/media/'){
            Image = "http://via.placeholder.com/125x125";
        }
        else {
            Image = profileInfo.profile_picture;
            console.log("/media/", Image);
        }
    }
    else{
        Image = "http://via.placeholder.com/125x125";
    }


    console.log(popoverOpenWishcoin , "popOverOpenWishcoin")
    return(
        <div className="dash-con dash-profile mb-4">
            <div className="row">
                <div className="mx-auto">

                    <img src={Image} className="rounded-circle" style={ {height:125 , width:125} }/>
                    <br/>
                    <div className="dash-client-name mb-2"> {profileInfo.first_name + ' ' + profileInfo.last_name} </div>

                    <div className="dash-balance mb-2">موجودی:   {profileInfo.balance * 1000}</div>
                    <div className="dash-coin"><span className="user-inform"><i className="fa fa-question-circle fa-question-circle-dash-info " id="wishcoinGuide" onClick={togglePopoverWishcoin}/></span><span>ویش کوین: {profileInfo.wish_coins}</span></div>
                      <Popover placement="right" isOpen={popoverOpenWishcoin} target="wishcoinGuide" toggle={togglePopoverWishcoin}>
                        <PopoverBody className="beauty-text popover-beauty">ویش کوین واحد پول ماست. شما با ویش کوین ها پروژه ثبت می کنید و پیشنهاداتون رو برای هر پروژه ثبت می کنید.  </PopoverBody>
                      </Popover>
                    {/*<h6 className="dash-profile-stars">*/}
                        {/*<i className="fa fa-star shine-on"/>*/}
                        {/*<i className="fa fa-star shine-on"/>*/}
                        {/*<i className="fa fa-star shine-on"/>*/}
                        {/*<i className="fa fa-star-o shine-on"/>*/}
                        {/*<i className="fa fa-star-o shine-on"/>*/}
                    {/*</h6>*/}
                </div>
            </div>
        </div>
    )
};

ProfileInfoForDashboard.PropTypes = {
    profileInfo : PropTypes.object.isRequired
};

export default ProfileInfoForDashboard ;

//http://via.placeholder.com/125x125
