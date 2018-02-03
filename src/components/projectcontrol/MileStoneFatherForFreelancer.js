import React from 'react';
import MileStoneTemplate from './MileStoneTemplate';
import PropTypes from 'prop-types';
const MileStoneFatherForFreelancer = (props) =>{
    var m = [];
    console.log(props.project_controller.project_controller_elements , 'props.project_controller.project_controller_elements');
    if(props.project_controller.project_controller_elements.length) {
        for (var i = 0; i < props.project_controller.project_controller_elements.length; i++) {
            m.push(<MileStoneTemplate key={i} CP={props.project_controller.project_controller_elements[i]}/>)
        }
        if (i > 0) {
            console.log(m , 'm');
            return (
                <div>
                <div className="container">
                    <div className="row">
                        <div className="timeline-centered">
                            {m}
                        </div>
                    </div>
                </div>
                </div>
            )
        }
    }
    else {
        return(
            <div></div>
        )
    }
};

MileStoneFatherForFreelancer.PropTypes = {
  project_controller : PropTypes.object.isRequired
};

export default MileStoneFatherForFreelancer
