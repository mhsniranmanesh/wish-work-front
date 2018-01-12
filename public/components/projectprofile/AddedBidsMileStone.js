import React from 'react';
import MileStonesHorizentalTemplate from './MileStonesHorizentalTemplate';
import {Button , Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import PropTypes from 'prop-types';
import ModalCashin from './ModalCashin';

const AddedBidsMileStone = ({number_of_milestones, delivery_duration, price_of_bid,
                                number, mileStoneX, goToCash, priceForCash, modalCashEnough, cashinModalState , balance,prices }) => {
    var mileStones = [];
    console.log(price_of_bid , 'price_of_bid');
    var x = (delivery_duration) / (number_of_milestones);
    for (var i = 0; i < number_of_milestones; i++) {
        x = (delivery_duration) / (number_of_milestones) + (i * (delivery_duration) / (number_of_milestones));
        mileStones.push(<MileStonesHorizentalTemplate i={i} key={i} x={x}/>);
    }
    prices[number] = price_of_bid;
    console.log(prices);
    mileStoneX[number] = mileStones;
        if ((mileStoneX[number] !== undefined)) {
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
                                        <Button color="primary" className="btn btn-rec btn-primary" data-toggle="modal" data-target={"#" + (number*20 +1) }>انتخاب پیشنهاد</Button>

                            </div>
                            <div>
                                <div className="modal fade" id={number*20 + 1} tabIndex="-1" role="dialog" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                        <div className="enough-modalbody1">
                                            برای شروع پروژه باید مبلغ <span className="enough-project-price">{prices[number]}</span> بپردازید.
                                        </div>
                                        <div className="enough-modalbody2">
                                            در صورت تأیید این مبلغ از موجودی شما کسر شده و پروژه به صورت خودکار شروع می شود
                                        </div>
                                        <btn onClick={modalCashEnough} id="enough-approve-button" className="btn btn-rec btn-primary">
                                            تأیید
                                        </btn>
                                        <btn onClick={modalCashEnough} id="enough-cancel-button" className="btn btn-rec btn-secondary">
                                            انصراف
                                        </btn>
                                </div>
                               </div>
                             </div>
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

AddedBidsMileStone.PropTypes ={
  modalCashEnough: PropTypes.func.isRequired
};

export default AddedBidsMileStone;
