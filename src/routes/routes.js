import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard.js'
import Messages from '../components/messages/Messages';
import Project from './projectRoutes';
import Profile from './profileRoutes';
import Account from './accountRoutes';



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/dashboard' component={Dashboard}/>
        <Route path='/project' component={Project}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/account' component={Account}/>
      <Route path='/messages' component={Messages}/>
    </Switch>
  </main>
);



export default Main;
