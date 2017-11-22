import React from 'react'
import { Route } from 'react-router-dom'
import Profileinfo from '../components/profileinfo/Profileinfo.js';
import Notifspage from '../components/notifspage/Notifspage.js';

const Profile = ({match}) => (
      <div>
          <Route path={`${match.url}/edit`} component={Profileinfo}/>
          <Route path={`${match.url}/notif`} component={Notifspage}/>
      </div>
);


export default Profile;