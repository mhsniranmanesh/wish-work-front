import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard.js'
import Projectsubmition from './components/projectsubmition/Projectsubmition.js'
import Recomendedprojects from './components/recomendedprojects/Recomendedprojects.js';
import Profileinfo from './components/profileinfo/Profileinfo.js';
import Notifspage from './components/notifspage/Notifspage.js';
import CashOutIn from './components/cashout-in/cashout-in.js';
import financialManagement from './components/financialmanagement/financialManagement.js';
import AccountBill from './components/accountbill/AccountBill.js';
import ProjectControl from './components/projectcontrol/projectcontrol.js';
import Messages from './components/messages/Messages';
import logoPic from '../static/img/nav-logo.png';
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
      <Route path='/cashout-in' component={CashOutIn}/>
      <Route path='/financialmanagement' component={financialManagement}/>
      <Route path='/accountbill' component={AccountBill}/>
      <Route path='/projectcontrol' component={ProjectControl}/>
      <Route path='/messages' component={Messages}/>
    </Switch>
  </main>
)

export default Main;
