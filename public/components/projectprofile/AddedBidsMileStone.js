import React from 'react';
import MileStonesHorizentalTemplate from './MileStonesHorizentalTemplate';
import {Button , Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import PropTypes from 'prop-types';
import ModalCashin from './ModalCashin';

const AddedBidsMileStone = ({number_of_milestones, delivery_duration, price_of_bid, priceOfMileStoneForCash,
                                number, mileStoneX, goToCash, priceForCash, modalCashEnough,numberOfPages,
                                cashinModalState , balance,prices, acceptBid , id ,numberOfMileStonesOfEachFreelancer}) => {
    var mileStones = [];
    for (var i = 0; i < number_of_milestones; i++) {
        var  x = Math.floor((delivery_duration) / (number_of_milestones) + (i * (delivery_duration) / (number_of_milestones)));
        var page = Math.floor((numberOfPages) / (number_of_milestones) + (i * (numberOfPages) / (number_of_milestones)));
        mileStones.push(<MileStonesHorizentalTemplate i={i} key={i} x={x} page={page}/>);
    }
    numberOfMileStonesOfEachFreelancer[number] = number_of_milestones;
    prices[number] = price_of_bid * 1000;
    priceOfMileStoneForCash[number] = prices[number]/numberOfMileStonesOfEachFreelancer[number];
    mileStoneX[number] = mileStones;
        if ((mileStoneX[number] !== undefined)) {
            var y = price_of_bid * 1000;
            if ((balance*1000) >= priceOfMileStoneForCash[number]) {
                return (
                <div>
                    <div className="modal fade" id={number * 10} tabIndex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="biddingModalLabel">{number} اطلاعات پیشنهاد
                                        فریلنسر</h5>
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
                                    <Button color="primary" className="btn btn-rec btn-primary" data-toggle="modal"
                                            data-target={"#" + (number * 20 + 1)} onClick={disMiss}  data-dismiss="modal">انتخاب
                                        پیشنهاد</Button>

                                </div>
                              </div>
                            </div>
                          </div>

                                <div>
                                    <div className="modal fade" id={number * 20 + 1} tabIndex="-1" role="dialog"
                                         aria-hidden="true" data-dismiss="modal" data-keyboard="false" data-backdrop="static">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="enough-modalbody1">
                                                    <p>موجودی حساب شما {balance *1000}تومان می باشد </p>
                                                    برای شروع پروژه باید مبلغ <span
                                                    className="enough-project-price">{priceOfMileStoneForCash[number]}</span>تومان
                                                    بپردازید.
                                                </div>
                                                <div className="enough-modalbody2">
                                                    در صورت تأیید این مبلغ از موجودی شما کسر شده و پروژه به صورت خودکار
                                                    شروع می شود
                                                </div>
                                                <div className="modal-footer">

                                                    <btn onClick={(event)=>{acceptBid(id)}} id="enough-approve-button"
                                                         className="btn btn-rec btn-primary" data-dismiss="modal">
                                                        تأیید
                                                    </btn>


                                                    <btn onClick={modalCashEnough} id="enough-cancel-button"
                                                         className="btn btn-rec btn-secondary" data-dismiss="modal">
                                                        انصراف
                                                    </btn>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                      </div>

                )
            }

            else if ((balance*1000) < priceOfMileStoneForCash[number]) {
                return (
                    <div>
                        <div className="modal fade" id={number * 10} tabIndex="-1" role="dialog" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="biddingModalLabel">{number} اطلاعات پیشنهاد
                                            فریلنسر</h5>
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
                                        <Button color="primary" className="btn btn-rec btn-primary" data-toggle="modal"
                                                data-target={"#" + (number * 20 + 1)} onClick={(event)=>{disMiss}}>انتخاب
                                            پیشنهاد</Button>

                                    </div>
                                    <div>
                                        <div className="modal fade" id={number * 20 + 1} tabIndex="-1" role="dialog"
                                             aria-hidden="true" data-dismiss="modal">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="enough-modalbody1">
                                                        <p>موجودی حساب شما {balance * 1000}تومان می باشد </p>
                                                        برای شروع پروژه باید مبلغ <span
                                                        className="enough-project-price">{priceOfMileStoneForCash[number]}</span>تومان
                                                        بپردازید.
                                                    </div>
                                                    <div className="enough-modalbody2">
                                                    موجودی حساب شما کافی نمی باشد، برای افزایش موجودی بر روی کلید افزایش موجودی کلیک کنید
                                                    </div>
                                                    <btn  id="enough-approve-button"
                                                         className="btn btn-rec btn-primary"
                                                          onClick={(event)=>{ goToCash(priceOfMileStoneForCash[number]);}}>
                                                        افزایش موجودی
                                                    </btn>
                                                    <btn onClick={modalCashEnough} id="enough-cancel-button"
                                                         className="btn btn-rec btn-secondary" data-dismiss="modal">
                                                        انصراف
                                                    </btn>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }

};
const disMiss = ()=>{

};
AddedBidsMileStone.PropTypes ={
  modalCashEnough: PropTypes.func.isRequired,
  goToCash : PropTypes.func.isRequired
};

export default AddedBidsMileStone;
