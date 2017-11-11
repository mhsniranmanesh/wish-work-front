import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard.js'
import Projectsubmition from './components/projectsubmition/projectsubmition.js'
import Recomendedprojects from './components/recomendedprojects/Recomendedprojects.js';
import Profileinfo from './components/profileinfo/Profileinfo.js';
import Notifspage from './components/notifspage/Notifspage.js';
import CashOutIn from './components/cashout-in/cashout-in.js';
import financialManagement from './components/financialmanagement/financialManagement.js';
import accountBill from './components/accountbill/accountBill.js';
import ProjectControl from './components/projectcontrol/projectcontrol.js';
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
      <Route path='/accountbill' component={accountBill}/>
      <Route path='/projectcontrol' component={ProjectControl}/>
    </Switch>
  </main>
)

export default Main;
