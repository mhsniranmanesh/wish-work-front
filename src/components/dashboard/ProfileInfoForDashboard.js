import React from 'react'

import PropTypes from 'prop-types';

const ProfileInfoForDashboard = ({profileInfo}) =>{
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
    return(
        <div className="dash-con dash-profile mb-4">
            <div className="row">
                <div className="mx-auto">

                    <img src={Image} className="rounded-circle" style={ {height:125 , width:125} }/>
                    <br/>
                    <div className="dash-client-name mb-2"> {profileInfo.first_name + ' ' + profileInfo.last_name} </div>
                    <div className="dash-balance mb-2">موجودی:   {profileInfo.balance}</div>
                    <div className="dash-coin">ویش کوین: 190</div>
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
