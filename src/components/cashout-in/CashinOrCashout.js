import React from 'react';

const CashinOrCashout = ({props}) => {
  return(
    <ul className="nav justify-content-center mx-auto" id="depositTab" role="tablist">
        <li className="nav-item">
            <a className="nav-link active" id="deposit-tab" data-toggle="tab" href="#deposit" role="tab" aria-controls="deposit" aria-selected="true">واریز</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" id="draw-tab" data-toggle="tab" href="#draw" role="tab" aria-controls="draw" aria-selected="false">برداشت</a>
        </li>
    </ul>
  )
};
export default CashinOrCashout;
