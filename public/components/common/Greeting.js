import React from 'react';
import RegisterPlease from './RegisterPlease';
import ProfileInfoForHeader from './ProfileInfoForHeader';

const Greeting = (props) => {
    if(props.isLoggedIn){
        return(
            <ProfileInfoForHeader profileInfo={props.profileInfo}
                                  profilePic={props.profilePic}
                                  GoToDashboard={props.GoToDashboard}
                                  colorCode={props.colorCode}
            />
        )
    }
    else{
        return(
            <RegisterPlease SignUp={props.SignUp}
            />
        )
    }
};

export default Greeting