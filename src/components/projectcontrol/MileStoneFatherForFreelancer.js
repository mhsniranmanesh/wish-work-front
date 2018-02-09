import React from 'react';
import MileStoneTemplate from './MileStoneTemplate';
import PropTypes from 'prop-types';
import arraySort from 'array-sort';

const MileStoneFatherForFreelancer = (props) =>{
    var m = [],sortM=[];
    var uploadSendToServerButton = true;
    console.log(props.project_controller.project_controller_elements , 'props.project_controller.project_controller_elements');
    if(props.project_controller.project_controller_elements.length) {
        for (var i = 0; i < props.project_controller.project_controller_elements.length; i++) {
            if(props.mileStoneid === props.project_controller.project_controller_elements[i].uuid ){
                uploadSendToServerButton = true;
                m.push(<MileStoneTemplate key={i}
                                          CP={props.project_controller.project_controller_elements[i]}
                                          uploadFile={props.uploadFile}
                                          uploadSendToServerButton={uploadSendToServerButton}
                                          sendUploadedFileByFreelancer={props.sendUploadedFileByFreelancer}
                />)
            }
            else {
                m.push(<MileStoneTemplate key={i}
                                          CP={props.project_controller.project_controller_elements[i]}
                                          uploadFile={props.uploadFile}
                                          uploadSendToServerButton={false}
                />)
            }
        }
        if (i > 0) {
            console.log(m , 'm');
            sortM = arraySort(m , 'order');
            return (
                <div>
                <div className="container">
                    <div className="row">
                        <div className="timeline-centered">
                            {sortM}
                        </div>
                    </div>
                </div>
                </div>
            )
        }
    }
    else {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="timeline-centered">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

MileStoneFatherForFreelancer.PropTypes = {
  project_controller : PropTypes.object.isRequired
};

export default MileStoneFatherForFreelancer
