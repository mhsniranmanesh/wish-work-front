import React from 'react';
import MileStoneTemplateForClient from './MileStoneTemplateForClient';
//
const MileStoneFatherForClient = (props)=>{
    var clientcp = [];
    if(props.project_controller.project_controller_elements.length) {
        for (var i = 0; i < props.project_controller.project_controller_elements.length; i++) {
            clientcp.push(<MileStoneTemplateForClient key={i} CPClient={props.project_controller.project_controller_elements[i]}/>)
        }
        if (i > 0) {
            console.log(clientcp , 'clientcp');
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="timeline-centered">
                                {clientcp}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    else {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="timeline-centered">
                        </div>
                    </div>
                </div>
            </div>         )
    }
};

export default MileStoneFatherForClient;