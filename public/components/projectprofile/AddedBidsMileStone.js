import React from 'react';
import MileStonesHorizentalTemplate from './MileStonesHorizentalTemplate';

const AddedBidsMileStone = (props) =>{
    var mileStones = [];
    var mileStonX = [];
    var x = (props.delivery_duration)/(props.number_of_milestones) ;
    for(var i = 0 ; i < props.number_of_milestones  ;i++){
        console.log(props.number_of_milestones , 'props.number_of_milestones');
        console.log(mileStones , 'mileStones');
        x = (props.delivery_duration)/(props.number_of_milestones) + (i*(props.delivery_duration)/(props.number_of_milestones));
        mileStones.push(<MileStonesHorizentalTemplate i={i} key={i} x={x}/>)
    }
    return(
        <div className="modal fade" id="accBiddingModal" tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="biddingModalLabel">اطلاعات پیشنهاد فریلنسر</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="jumbotron">
                            <div className="container">
                                <div className="row">
                                    <div className="timeline-centered">
                                        {mileStones}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary btn-rec">قبول پیشنهاد</button>
                    </div>
                </div>
            </div>
        </div>
    )    
};

export default AddedBidsMileStone;