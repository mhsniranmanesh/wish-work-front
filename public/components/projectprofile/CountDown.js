import React from 'react';
import {Button, Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import Errors from './Errors';

const CountDown = (props) => {
  return(
    <div className="con mb-4">

      <span className="counter-circle">
          <div className="counter-numb">00</div>
          <div className="counter-char">دقیقه</div>
      </span>

      <span className="counter-circle">
          <div className="counter-numb">00</div>
          <div className="counter-char">ساعت</div>
      </span>

      <span className="counter-circle">

          <div className="counter-numb">00</div>
          <div className="counter-char">روز</div>
      </span>

    </div>
  )
};

export default CountDown;
