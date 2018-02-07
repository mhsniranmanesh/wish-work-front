import React from 'react'
import MileStonesHorizentalTemplate from './MileStonesHorizentalTemplate';
import PropTypes from 'prop-types';

const AddBidMileStones = (props) => {
    var rows = [];
    var a = props.Length;
var dayNew = 0;
var pageNew = 0;

    for (var i = 0; i < a ; i++) {
      var dayRemain;
      var pageRemain;
      var pageOld;
      var dayOld;
        if(i < (a-1)) {
           var  x = Math.floor((props.delivery_duration) / (props.number_of_milestones) + (i * (props.delivery_duration) / (props.number_of_milestones)));
           dayOld = dayNew;
           dayNew = x;
           dayRemain = dayNew - dayOld;
            // note: we add a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
           var page = Math.floor((props.numberOfPages) / (props.number_of_milestones) + (i * (props.numberOfPages) / (props.number_of_milestones)));
           pageOld = pageNew;
           pageNew = page;
           pageRemain = pageNew - pageOld;
            rows.push(<MileStonesHorizentalTemplate i={i} a={a} key={i} numberOfMileStones={props.number_of_milestones}
                                                    x={x} page={page} dayRemain = {dayRemain} pageRemain={pageRemain}/>);

        }
        // else if(i === a-2){
        //     var  t = Math.floor((props.delivery_duration) / (props.number_of_milestones) + (i * (props.delivery_duration) / (props.number_of_milestones)));
        //     // note: we add a key prop here to allow react to uniquely identify each
        //     // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        //     var page2 = Math.floor((props.numberOfPages) / (props.number_of_milestones) + (i * (props.numberOfPages) / (props.number_of_milestones)));
        //     rows.push(<MileStonesHorizentalTemplate i={i} a={a} key={i} numberOfMileStones={props.number_of_milestones}
        //                                             x={t} page={page2}/>);
        // }
        else {
            var y = props.delivery_duration;
            var page1 = props.numberOfPages;
            pageRemain = page1 - pageNew;
            dayRemain = y - dayNew;
            rows.push(<MileStonesHorizentalTemplate i={i} a={a} key={i*10} numberOfMileStones={props.number_of_milestones}
                                                    x={y} page={page1} numberOfPages={props.numberOfPages} pageRemain={pageRemain} dayRemain={dayRemain}/>);

        }
    }



    return (
    <div className="row cp-box">

      {rows}

    </div>
  );
}

AddBidMileStones.PropTypes ={
  Length: PropTypes.element.isRequired
};
export default AddBidMileStones;
