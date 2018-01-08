import React from 'react';
import MileStonesHorizentalTemplate from './MileStonesHorizentalTemplate';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import ModalCashin from './ModalCashin';

const AddedBidsMileStone = (props) => {
    var mileStones = [];

    var x = (props.delivery_duration) / (props.number_of_milestones);
    for (var i = 0; i < props.number_of_milestones; i++) {
        x = (props.delivery_duration) / (props.number_of_milestones) + (i * (props.delivery_duration) / (props.number_of_milestones));
        mileStones.push(<MileStonesHorizentalTemplate i={i} key={i} x={x}/>);
    }
    props.mileStoneX[props.number] = mileStones;
        if (props.mileStoneX[props.number] !== undefined) {
            var y = props.price_of_bid;
            console.log(props.mileStoneX[props.number] , 'props.mileStoneX[props.number]' , props.number , 'props.number');
            return (
                <div className="modal fade" id={props.number*10} tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="biddingModalLabel">{props.number}  اطلاعات پیشنهاد فریلنسر</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="jumbotron">
                                    <div className="container">
                                        <div className="row">
                                            <div className="timeline-centered">
                                                {props.mileStoneX[props.number]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                              {/*<Button color="primary" className="btn btn-primary btn-rec"
                                        onClick={(event)=>{ props.goToCash(y);}}>قبول پیشنهاد</Button>*/}
                                <Button color="primary" className="btn btn-primary btn-rec" on

                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>

                </div>
            )
        }

};

export default AddedBidsMileStone;
