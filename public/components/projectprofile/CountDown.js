import React from 'react';
import {Button, Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import Errors from './Errors';

const CountDown = (props) => {
  return(
    <div className="con mb-4">
      <time id="count-down" dateTime="2014-01-06T00:00:00"></time>
    </div>
  )
};

export default CountDown;
