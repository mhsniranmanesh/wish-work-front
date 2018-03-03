import React from 'react';
import MileStoneTemplate from './MileStoneTemplate';
import PropTypes from 'prop-types';
import arraySort from 'array-sort';

const MileStoneFatherForFreelancer = (props) =>{
    var m = [],sortM=[];
    var uploadSendToServerButton = true;
    console.log(props.project_controller.project_controller_elements , 'props.project_controller.project_controller_elements');
    sortM = arraySort(props.project_controller.project_controller_elements , 'order' );

    if(sortM.length) {
        for (var i = 0; i < sortM.length; i++) {
            if(props.mileStoneid === sortM[i].uuid ){
                uploadSendToServerButton = true;
                m.push(<MileStoneTemplate key={i}
                                          CP={sortM[i]}
                                          uploadFile={props.uploadFile}
                                          toPersianNum={props.toPersianNum}
                                          uploadSendToServerButton={uploadSendToServerButton}
                                          sendUploadedFileByFreelancer={props.sendUploadedFileByFreelancer}
                                          loading={props.loading}
                />)
            }
            else {
                m.push(<MileStoneTemplate key={i}
                                          CP={sortM[i]}
                                          toPersianNum={props.toPersianNum}
                                          uploadFile={props.uploadFile}
                                          uploadSendToServerButton={false}
                                          loading={props.loading}
                />)
            }
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
