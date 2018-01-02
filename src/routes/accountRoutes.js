import React from 'react';
import { Route } from 'react-router-dom';
import CashOutIn from '../components/cashout-in/CashInOut.js';
import financialManagement from '../components/financialmanagement/FinancialManagement.js';
import AccountBill from '../components/accountbill/AccountBill.js';

const Account = ({match}) => (
    <div>
        <Route path={`${match.url}/cash`} component={CashOutIn}/>
        <Route path={`${match.url}/manage`} component={financialManagement}/>
        <Route path={`${match.url}/bill`} component={AccountBill}/>
    </div>

);


export default Account ;