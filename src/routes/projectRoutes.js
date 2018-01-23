import React from 'react';
import { Route } from 'react-router-dom';
import Projectsubmition from '../components/projectsubmition/Projectsubmition.js';
import Recomendedprojects from '../components/recomendedprojects/Recomendedprojects.js';
import ProjectControl from '../components/projectcontrol/ProjectControl.js';
import MyProjects from '../components/myprojects/MyProjects';

const Project = ({match}) => (
    <div>
        <Route path={`${match.url}/submit`} component={Projectsubmition}/>
        <Route path={`${match.url}/recommend`} component={Recomendedprojects}/>
        <Route path={`${match.url}/control`} component={ProjectControl}/>
        <Route path={`${match.url}/me`} component={MyProjects}/>
    </div>

);


export default Project ;