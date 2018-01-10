import React from 'react'
import MileStonesHorizentalTemplate from './MileStonesHorizentalTemplate';
import PropTypes from 'prop-types';

const AddBidMileStones = (props) => {
    var rows = [];
    var a = props.Length;
    for (var i = 0; i < a ; i++) {
       var x = (props.delivery_duration) / (props.number_of_milestones) + (i * (props.delivery_duration) / (props.number_of_milestones));
        // note: we add a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        rows.push(<MileStonesHorizentalTemplate i={i} key={i} x={x}/>);
    }
    return <div>{rows}</div>;
}

AddBidMileStones.PropTypes ={
  Length: PropTypes.element.isRequired
};
export default AddBidMileStones;