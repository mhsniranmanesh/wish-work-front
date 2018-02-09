import React from 'react';
import MileStoneTemplateForClient from './MileStoneTemplateForClient';
import arraySort from 'array-sort';
//
const MileStoneFatherForClient = (props)=>{
    var clientcp = [] , clientCpSort =[];
    if(props.project_controller.project_controller_elements.length) {
        clientCpSort = arraySort(props.project_controller.project_controller_elements , 'order');
        console.log('clientCpSortclientCpSortclientCpSort' , clientCpSort);
        for (var i = 0; i < clientCpSort.length; i++) {
            if (i < (clientCpSort.length - 1)) {
                clientcp.push(<MileStoneTemplateForClient key={i}
                                                          CPClient={clientCpSort[i]}
                                                          downloadFileModal={props.downloadFileModal}
                                                          priceForCashIn={clientCpSort[i+1].price}
                                                          reviseOnChange={props.reviseOnChange}
                                                          reviseValue={props.reviseValue}
                                                          submitFeedBack={props.submitFeedBack}
                />)
            }
            else {
                clientcp.push(<MileStoneTemplateForClient key={i}
                                                          CPClient={clientCpSort[i]}
                                                          downloadFileModal={props.downloadFileModal}
                                                          reviseOnChange={props.reviseOnChange}
                                                          reviseValue={props.reviseValue}
                                                          submitFeedBack={props.submitFeedBack}
                />)
            }
        }
        if (i > 0) {
            console.log(clientcp , 'clientcp');
            // clientcpSort = arraySort(clientcp , 'project_controller_elements.order');
            return (
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="timeline-centered">
                                {clientcp}
                                {/*{clientcpSort}*/}
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
