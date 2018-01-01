import React from 'react';
import { Route } from 'react-router-dom';
import CashOutIn from '../components/cashout-in/cashout-in.js';
import financialManagement from '../components/financialmanagement/financialManagement.js';
import AccountBill from '../components/accountbill/AccountBill.js';
import WishCoin from '../components/wishcoin/WishCoin.js';

const Account = ({match}) => (
    <div>
        <Route path={`${match.url}/cash`} component={CashOutIn}/>
        <Route path={`${match.url}/manage`} component={financialManagement}/>
        <Route path={`${match.url}/bill`} component={AccountBill}/>
        <Route path={`${match.url}/wishcoin`} component={WishCoin} />
    </div>

);


export default Account ;