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
      <Route exact path='/' component={Dashboard}/>
        <Route path='/project' component={Project}/>
          {/*<Route path='/project/submit' component={Projectsubmition} />*/}
          {/*<Route path='project/recomend' component={Recomendedprojects}/>*/}
          {/*<Route path='project/control' component={ProjectControl}/>*/}
        {/*</Route>*/}
      <Route path='/profile' component={Profile}/>
        {/*/!*<Route path='/profile/edit' component={Profileinfo}/>*!/*/}
        {/*/!*<Route path='/profile/notif' component={Notifspage}/>*!/*/}
      <Route path='/account' component={Account}/>
        {/*/!*<Route path='/account/cash' component={CashOutIn}/>*!/*/}
        {/*/!*<Route path='account/bill' component={AccountBill}/>*!/*/}
        {/*/!*<Route path='/account/manage' component={financialManagement}/>*!/*/}
      <Route path='/messages' component={Messages}/>
    </Switch>
  </main>
);



export default Main;
