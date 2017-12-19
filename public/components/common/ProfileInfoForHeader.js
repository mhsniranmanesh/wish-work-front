import React from 'react'
import PropTypes from 'prop-types';

const ProfileInfoForHeader = (props) =>{
    return(
        <div>
            <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarUserDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="rounded-circle" src={props.profilePic} width="30" height="30"/>
                {(props.profileInfo.first_name || '') + ' ' + (props.profileInfo.last_name || '')}
            </a>
        </div>
    )
};

ProfileInfoForHeader.PropTypes ={
  profileInfo : PropTypes.object.isRequired,

};

export default ProfileInfoForHeader;