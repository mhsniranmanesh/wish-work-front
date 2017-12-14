import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FreelancerProfile from '../components/freelancerprofile/FreelancerProfile';
import ProjectProfile from '../components/projectprofile/ProjectProfile';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
// wishwork Technical Team

const MainPublic = () => (
    <main>
        <Switch>
            <Route path='/profiles' component={FreelancerProfile}/>
            <Route path='/projects' component={ProjectProfile}/>
        </Switch>
    </main>
);

export default MainPublic;