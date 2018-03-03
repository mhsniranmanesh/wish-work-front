import React from 'react'
import PropTypes from 'prop-types';

const ProfileInfoForHeader = (props) =>{
    return(
        <div>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="rounded-circle" src={props.profilePic} style={{height:30 , width:30 , backgroundColor:props.colorCode}}/>
                {(props.profileInfo.first_name || '') + ' ' + (props.profileInfo.last_name || '')}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarUserDropdown">
                <button className="dropdown-item" onClick={props.GoToDashboard}>پنل کاربری</button>
                <button className="dropdown-item" onClick={props.exit}>خروج</button>
            </div>
            </li>
        </div>


    )
};

ProfileInfoForHeader.PropTypes ={
  profileInfo : PropTypes.object.isRequired,

};

export default ProfileInfoForHeader;