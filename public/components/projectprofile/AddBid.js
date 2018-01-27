import React from 'react'
import AddBidMileStones from './AddBidMileStones';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import Errors from './Errors';
import moment from 'moment-jalaali';

const AddBid = (props) => {
    var userHasBid = props.userHasBid ;
    // if(props.Bids) {
    //     console.log(props.Bids , 'props.Bids');
    //     for (var i = 0; i < props.Bids.length; i++) {
    //         console.log(props.Bids[i].username , 'props.Bids[i].username' , props.profileInfo.username , 'props.profileInfo.username');
    //         if (props.Bids[i].freelancer.username === props.profileInfo.username) {
    //             userHasBid = true;
    //         }
    //     }
    // }
    if(props.release_date) {
        moment.loadPersian({usePersianDigits: true});
        var m = moment(props.release_date, 'YYYY-M-D HH:mm:ss').format('jYYYY/jM/jD HH:mm:ss');
        console.log(props.isLoggedIn , 'props.isLoggedIn')
    }
    if (props.isLoggedIn && (userHasBid === false)) {
        return (
            <div>
                <div className="con mb-4">
                  <div>
                    <h5 className="project-title">
                        درباره پروژه
                    </h5>
                    <div className="divider"/>
                      <div className="about-sub-heading">

                        <div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div>
                        <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.budget} تومان</div>
                        <div className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {props.TimeLimit} روز</div>
                        <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m} </div>

                      </div>
                    </div>

                    <div className="modal fade" id="biddingModal" tabIndex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="biddingModalLabel">فرم پیشنهاد مناقصه</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form className="signup-form" onSubmit={(event)=> props.returnFalse(event)}>
                                        <div className="form-group">
                                            <input type="text"
                                                   className="form-control form-control-danger"
                                                   placeholder="قیمت پیشنهادی (تومان)"
                                                   value={props.bid_price}
                                                   onChange={props.BidPrice}
                                                   onBlur={props.roundBidAmount}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text"
                                                   className="form-control form-control-danger"
                                                   placeholder="زمان پیشنهادی (روز)"
                                                   value={props.delivery_duration}
                                                   onChange={props.DeliveryTime}
                                                   onBlur={props.roundDeliveryTime}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea type="text"
                                                      className="form-control"
                                                      placeholder="توضیحات"
                                                      value={props.bid_description}
                                                      onChange={props.BidDescription}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input type="text"
                                                   className="form-control"
                                                   placeholder="مهارت ها و ابزار هایی که قصد استفاده از آن ها را دارید."
                                                // value={props.skills}
                                            />
                                        </div>
                                        <label htmlFor="skillType" className="col-form-label d-block">
                                            بازه های تحویل پروژه را انتخاب کنید
                                        </label>
                                        <div className="input-group mb-1">
                                            <input type="number" className="form-control"
                                                   placeholder="تعداد موعدهای تحویل پروژه"
                                                   onChange={props.valueOfMileStones}
                                                   value={props.amountOfMileStones}/>
                                            <Button type="submit" className="btn btn-success btn-rec"
                                                    onClick={props.CheckLength}>انتخاب</Button>

                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-6 text-muted">
                                                حداقل: <span className="badge badge-success">2</span>
                                            </div>
                                            <div className="col-sm-6 text-muted">
                                                حداکثر: <span className="badge badge-danger">4</span>
                                            </div>
                                        </div>
                                    </form>
                                    {props.showError ? <Errors message={props.message}/> : (true)}
                                    <br/><br/>

                                    <div className="jumbotron">
                                        <div className="container">
                                            <div className="row">
                                                <div className="timeline-centered">

                                                    <AddBidMileStones
                                                                      numberOfPages={props.numberOfPages}
                                                                      number_of_milestones={props.amountOfMileStones}
                                                                      delivery_duration={props.delivery_duration}
                                                                      Length={props.Length}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button"
                                            className="btn btn-primary btn-rec "
                                        // data-dismiss="modal"
                                            data-dismiss={props.ModalState}
                                            onClick={props.ModalSubmit}
                                    >
                                        ثبت پیشنهاد
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="con mb-4">
                    <button type="submit" className="btn btn-primary btn-rec btn-block public-btn" data-toggle="modal"
                            data-target="#biddingModal">
                        پیشنهاد قیمت
                    </button>
                </div>
            </div>
        )
    }
    if (props.isLoggedIn && (userHasBid === true)){
        return(
            <div>
                <div className="con mb-4">
                    <h5 className="project-title">
                        درباره پروژه
                    </h5>
                    <div className="divider"/>
                    <div className="about-sub-heading">
                        <div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div>
                        <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.budget} تومان</div>
                        <div className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {props.TimeLimit} روز</div>
                        <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m}</div>
                    </div>
                </div>
                <div className="con mb-4">
                    <button  color="primary" className="btn btn-primary btn-rec btn-block public-btn">
                        شما در این مناقصه شرکت کرده اید.                   </button>
                </div>
            </div>

        )
    }
else {
    return(
        <div>
            <div className="con mb-4">
                <h5 className="project-title">
                    درباره پروژه
                </h5>
                <div className="divider"/>
                <div className="about-sub-heading">
                    <div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div>
                    <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.budget} تومان</div>
                    <div className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {props.TimeLimit} روز</div>
                    <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m}</div>
                </div>
            </div>
            <div className="con mb-4">
                <button  color="primary" className="btn btn-primary btn-rec btn-block public-btn" onClick={props.signUp}>
                   ثبت نام کنید                   </button>
            </div>
        </div>

    )
}
};

AddBid.PropTypes ={
    amountOfMileStones: PropTypes.object.isRequired,
    Length: PropTypes.element.isRequired
};

export default AddBid;
