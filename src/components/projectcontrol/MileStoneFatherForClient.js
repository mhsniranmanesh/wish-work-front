import React from 'react';
import MileStoneTemplateForClient from './MileStoneTemplateForClient';
//
const MileStoneFatherForClient = (props)=>{
    var clientcp = [];
    if(props.project_controller.project_controller_elements.length) {
        for (var i = 0; i < props.project_controller.project_controller_elements.length; i++) {
            if (i < (props.project_controller.project_controller_elements.length - 1)) {
                clientcp.push(<MileStoneTemplateForClient key={i}
                                                          CPClient={props.project_controller.project_controller_elements[i]}
                                                          downloadFileModal={props.downloadFileModal}
                                                          priceForCashIn={props.project_controller.project_controller_elements[i+1].price}
                                                          reviseOnChange={props.reviseOnChange}
                                                          reviseValue={props.reviseValue}
                                                          submitFeedBack={props.submitFeedBack}
                />)
            }
            else {
                clientcp.push(<MileStoneTemplateForClient key={i}
                                                          CPClient={props.project_controller.project_controller_elements[i]}
                                                          downloadFileModal={props.downloadFileModal}
                                                          reviseOnChange={props.reviseOnChange}
                                                          reviseValue={props.reviseValue}
                                                          submitFeedBack={props.submitFeedBack}
                />)
            }
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
