import React from 'react'
import PropTypes from 'prop-types';

const ProfileInfoForDashboard = ({profileInfo}) =>{
    return(
        <div className="dash-con dash-profile mb-4">
            <div className="row">
                <div className="mx-auto">
                    <img src="http://via.placeholder.com/125x125" className="rounded-circle"/>
                    <h5> {profileInfo.first_name + ' ' + profileInfo.last_name} </h5>
                    <h6 className="dash-profile-stars">
                        <i className="fa fa-star shine-on"/>
                        <i className="fa fa-star shine-on"/>
                        <i className="fa fa-star shine-on"/>
                        <i className="fa fa-star-o shine-on"/>
                        <i className="fa fa-star-o shine-on"/>
                    </h6>
                </div>
            </div>
        </div>
    )
};

ProfileInfoForDashboard.PropTypes = {
    profileInfo : PropTypes.object.isRequired
};

export default ProfileInfoForDashboard ;