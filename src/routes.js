import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard.js'
import Projectsubmition from './components/projectsubmition/projectsubmition.js'
import Recomendedprojects from './components/recomendedprojects/Recomendedprojects.js';
import Profileinfo from './components/profileinfo/Profileinfo.js';
import Notifspage from './components/notifspage/Notifspage.js';
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Dashboard}/>
      <Route path='/projectsubmition' component={Projectsubmition}/>
      <Route path='/recomendedprojects' component={Recomendedprojects}/>
      <Route path='/profileinfo' component={Profileinfo}/>
      <Route path='/notifspage' component={Notifspage}/>
    </Switch>
  </main>
)

export default Main;
