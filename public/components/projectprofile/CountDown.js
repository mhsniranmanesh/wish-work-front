import React from 'react';
// import {Button, Row, Col} from 'reactstrap';
// import PropTypes from 'prop-types';
import moment from 'moment-jalaali';
const CountDown = (props) => {
    if(props.start_date) {
        // var year = props.release_date.split().map(function(item) {
        //     return parseInt(item, 10);
        // });
        // var month = props.release_date.slice(5).split().map(function(item) {
        //     return parseInt(item, 10);
        // });
        // var date = props.release_date.slice(8 , 10).split().map(function(item) {
        //     return parseInt(item, 10);
        // });
        // var hours = props.release_date.slice(11 , 13).split().map(function(item) {
        //     return parseInt(item, 10);
        // });
        // var minutes =  props.release_date.slice(14 , 17).split().map(function(item) {
        //     return parseInt(item, 10);
        // });

        var today = new Date().getTime();
        var releaseDate = new Date(props.start_date).getTime();
        var timeDiff = releaseDate - today;
        var diffSec = Math.floor(timeDiff / 1000 );
        var diffMinutes = Math.floor(diffSec/60) % 60;
        var diffHours = Math.floor(diffSec/3600) % 24;
        var diffDays = Math.floor(diffSec/(3600*24));
        console.log(diffHours , 'diffHours');
        // var date = releaseDate.getDate(),
        //      minutes = releaseDate.getMinutes(),
        //      hours = releaseDate.getHours();
        // console.log(release , 'Hours Release!');
        // console.log(nowHours , 'nowHours');
        // console.log(nowMinutes , 'nowMinutes');
        // console.log(nowDate , 'nowDate');
        // console.log(now , 'NOW');
        // console.log(date , 'date');
        // console.log(year , 'year');
        // console.log(minutes , 'minutes');
        // console.log(hours , 'hours');
        // console.log(month , 'month');
        // var diffDate = date - nowDate + props.BidDuration,
        //     diffHours = hours - nowHours,
        //     diffMinutes = minutes - nowMinutes;
        // console.log( diffDate, 'diffDate' , diffHours , 'diffHours' , diffMinutes , 'diffMinutes');

        // var m = moment(props.release_date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss');
        // console.log(props.isLoggedIn , 'props.isLoggedIn')
        // console.log(m, 'This is just m');
        // console.log(m+1, 'This is m +1')
    }

  return(
    <div className="con mb-4">

      <span className="counter-circle">
          <div className="counter-numb">{diffMinutes}</div>
          <div className="counter-char">دقیقه</div>
      </span>

      <span className="counter-circle">
          <div className="counter-numb">{diffHours}</div>
          <div className="counter-char">ساعت</div>
      </span>

      <span className="counter-circle">

          <div className="counter-numb">{diffDays}</div>
          <div className="counter-char">روز</div>
      </span>

    </div>
  )
};

export default CountDown;
