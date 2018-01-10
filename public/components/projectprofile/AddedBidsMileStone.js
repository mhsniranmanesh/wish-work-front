import React from 'react';
import MileStonesHorizentalTemplate from './MileStonesHorizentalTemplate';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import ModalCashin from './ModalCashin';

const AddedBidsMileStone = ({number_of_milestones, delivery_duration, price_of_bid, key, number, mileStoneX, goToCash, priceForCash, modalCashEnough, cashinModalState}) => {
    var mileStones = [];

    var x = (delivery_duration) / (number_of_milestones);
    for (var i = 0; i < number_of_milestones; i++) {
        x = (delivery_duration) / (number_of_milestones) + (i * (delivery_duration) / (number_of_milestones));
        mileStones.push(<MileStonesHorizentalTemplate i={i} key={i} x={x}/>);
    }
    mileStoneX[number] = mileStones;
        if (mileStoneX[number] !== undefined) {
            var y = price_of_bid;
            console.log(mileStoneX[number] , 'props.mileStoneX[props.number]' , number , 'props.number');
            return (
                <div className="modal fade" id={number*10} tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="biddingModalLabel">{number}  اطلاعات پیشنهاد فریلنسر</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="jumbotron">
                                    <div className="container">
                                        <div className="row">
                                            <div className="timeline-centered">
                                                {mileStoneX[number]}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                              {/*<Button color="primary" className="btn btn-primary btn-rec"
                                        onClick={(event)=>{ props.goToCash(y);}}>قبول پیشنهاد</Button>*/}
                                        <Button color="primary" className="btn btn-rec btn-primary" onClick={modalCashEnough}>کیر</Button>

                            </div>
                            <ModalCashin
                              modalCashEnough={modalCashEnough}
                              cashinModalState={cashinModalState}
                              />
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

AddedBidsMileStone.PropTypes ={
  modalCashEnough: PropTypes.func.isRequired
};

export default AddedBidsMileStone;
