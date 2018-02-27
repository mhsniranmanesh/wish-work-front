import React from 'react'
import AddBidMileStones from './AddBidMileStones';
import {Button} from 'reactstrap';
import PropTypes from 'prop-types';
import Errors from './Errors';
import moment from 'moment-jalaali';
import Warnings from './Warnings';
import {Modal , Row , Col} from 'reactstrap';


const AddBid = (props) => {
    var userHasBid = props.userHasBid ;
    var today = new Date().getTime();
    var releaseDate = new Date(props.bidding_deadline).getTime();
    var timeDiff = releaseDate - today;
    var diffSec = Math.floor(timeDiff / 1000);
    var diffMinutes = Math.floor(diffSec / 60) % 60;
    var diffHours = Math.floor(diffSec / 3600) % 24;
    var diffDays = Math.floor(diffSec / (3600 * 24));
    console.log(userHasBid , 'userHasBid');
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
    if(diffMinutes < 0 ){
        return(
            <div>
                <div className="con mb-4">
                    <h5 className="project-title form-header-fontsize">
                        درباره پروژه
                    </h5>
                    <div className="divider"/>
                    <div className="about-sub-heading">
                        {/*<div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div>*/}
                        {/*    <div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div> */}
                        <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.toPersianNum(props.budget)} تومان</div>
                        <div className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {props.toPersianNum(props.TimeLimit)} روز</div>
                        <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m}</div>
                        <div className="not-inline"><i className="fa fa-book"/> تعداد صفحات: <strong> {props.toPersianNum(props.numberOfPages)}</strong></div>
                    </div>
                </div>
                <div className="con mb-4">
                    <div className="public-page-descript form-body-fontsize">
 مناقصه به پایان رسیده است
                    </div>
                </div>
            </div>

        )
    }
     if (diffMinutes>=0 && props.isLoggedIn && (userHasBid === false) && props.isVerified) {
        return (
            <div>
                <div className="con mb-4">
                  <div>
                    <h5 className="project-title form-header-fontsize">
                        درباره پروژه
                    </h5>
                    <div className="divider"/>
                      <div className="about-sub-heading">

                        {/*<div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div>*/}
                      {/*  <div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div> */}
                        <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.toPersianNum(props.budget)} تومان</div>
                        <div className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {props.toPersianNum(props.TimeLimit)} روز</div>
                        <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m} </div>
                          <div className="not-inline"><i className="fa fa-book"/> تعداد صفحات: <strong> {props.toPersianNum(props.numberOfPages)}</strong></div>

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
                                      <div className="row">
                                          <div className="form-group col-sm-5">
                                              <input type="text"
                                                     className="form-control form-control-danger"
                                                     placeholder="قیمت پیشنهادی (تومان)"
                                                     value={props.bid_price}
                                                     onChange={props.BidPrice}
                                                     onBlur={props.roundBidAmount}
                                              />
                                          </div>
                                          <div className="col-sm-2"></div>
                                          <div className="form-group col-sm-5">
                                              <input type="text"
                                                     className="form-control form-control-danger"
                                                     placeholder="زمان پیشنهادی (روز)"
                                                     value={props.delivery_duration}
                                                     onChange={props.DeliveryTime}
                                                     onBlur={props.roundDeliveryTime}
                                              />
                                          </div>
                                      </div>
                                        <div className="form-group">
                                            <textarea type="text"
                                                      className="form-control  add-bid-descript"
                                                      placeholder="توضیحات"
                                                      value={props.bid_description}
                                                      onChange={props.BidDescription}
                                            />
                                        </div>
                                        {/*<div className="form-group">*/}
                                            {/*<input type="text"*/}
                                                   {/*className="form-control"*/}
                                                   {/*placeholder="مهارت ها و ابزار هایی که قصد استفاده از آن ها را دارید."*/}
                                                {/*// value={props.skills}*/}
                                            {/*/>*/}
                                        {/*</div>*/}
                                        <label htmlFor="skillType" className="col-form-label d-block">
                                            در چند مرحله پروژه را تحویل می دهید؟
                                        </label>
                                          <div className="input-group mb-1">
                                                <Row className= "fields">
                                                    <Col>
                                                      <label>
                                                        <input className="btn-radio" type="radio" name="rb" id="rb1" onChange={props.is1MileStone} checked={props.stateForMileStone1}  disabled={props.DisableMileStone1}/>
                                                          <span htmlFor="rb1" className={props.ClassMileStone1}>۱</span>
                                                      </label>
                                                    </Col>
                                                    <Col>
                                                      <label>
                                                        <input className="btn-radio" type="radio" name="rb" id="rb2" onChange={props.is2MileStone}  checked={props.stateForMileStone2} disabled={props.DisableMileStone2}/>
                                                        <span htmlFor="rb2" className={props.ClassMileStone2}>۲</span>
                                                    </label>
                                                    </Col>
                                                    <Col>
                                                        <label>
                                                          <input className="btn-radio" type="radio" name="rb" id="rb3" onChange={props.is3MileStone}  checked={props.stateForMileStone3} disabled={props.DisableMileStone3}/>
                                                          <span htmlFor="rb3" className={props.ClassMileStone3}>۳</span>
                                                        </label>
                                                    </Col>
                                                    <Col>
                                                      <label>
                                                        <input className="btn-radio" type="radio" name="rb" id="rb4" onChange={props.is4MileStone}  checked={props.stateForMileStone4} disabled={props.DisableMileStone4}/>
                                                        <span htmlFor="rb4" className={props.ClassMileStone4}>۴</span>
                                                      </label>
                                                    </Col>
                                                </Row>
                                          </div>
                                          <div className="form-body-fontsize point">تذکر: اگر  می خواهید پروژه را در ۲ مرحله تحویل دهید باید زمان انجام پروژه حداقل ۱۰ روز باشد. ۳ مرحله حداقل ۱۴ روز و ۴ مرحله حداقل ۱۸ روز نیازمند می باشد.</div>

                                    </form>
                                    {props.showError ? <Errors message={props.message}/> : (true)}
                                    {props.showWarnings ? <Warnings message={props.message}/> : (true)}
                                    <br/><br/>

                                    <div>
                                        <div className="container">
                                            <div className="row">
                                                <div className="timeline-centered"  id="cp-public">

                                                    <AddBidMileStones
                                                                      toPersianNum={props.toPersianNum}
                                                                      numberOfPages={props.numberOfPages}
                                                                      number_of_milestones={props.amountOfMileStones}
                                                                      delivery_duration={props.delivery_duration}
                                                                      Length={props.amountOfMileStones}/>
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
   if (diffMinutes>=0 && props.isLoggedIn && (userHasBid === true) && !(props.freelancerIsSelected)){
        return(
            <div>
                <div className="con mb-4">
                    <h5 className="project-title form-header-fontsize">
                        درباره پروژه
                    </h5>
                    <div className="divider"/>
                    <div className="about-sub-heading">
                        {/*<div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div>*/}
                    {/*    <div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div> */}
                        <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.toPersianNum(props.budget)} تومان</div>
                        <div className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {props.toPersianNum(props.TimeLimit)} روز</div>
                        <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m}</div>
                        <div className="not-inline"><i className="fa fa-book"/> تعداد صفحات: <strong> {props.toPersianNum(props.numberOfPages)}</strong></div>
                    </div>
                </div>
                <div className="con mb-4">
                    <div className="public-page-descript form-body-fontsize">
                        شما در این مناقصه شرکت کرده اید.
                    </div>
                </div>
            </div>

        )
    }
    if(props.isLoggedIn && (userHasBid === true) && (props.freelancerIsSelected)){
       return(
           <div>
               <div className="con mb-4">
                   <h5 className="project-title form-header-fontsize">
                       درباره پروژه
                   </h5>
                   <div className="divider"/>
                   <div className="about-sub-heading">
                       {/*<div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div>*/}
                       {/*    <div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div> */}
                       <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.toPersianNum(props.budget)} تومان</div>
                       <div className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {props.toPersianNum(props.TimeLimit)} روز</div>
                       <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m}</div>
                       <div className="not-inline"><i className="fa fa-book"/> تعداد صفحات: <strong> {props.toPersianNum(props.numberOfPages)}</strong></div>
                   </div>
               </div>
               <div className="con mb-4">
                   <div className="public-page-descript form-body-fontsize">
شما این مناقصه را برنده شده اید. به قسمت کنترل پروژه بروید                   </div>
               </div>
           </div>
       )
    }
    if(!props.isVerified ){
       return(
           <div>
               <div className="con mb-4">
                   <h5 className="project-title form-header-fontsize">
                       درباره پروژه
                   </h5>
                   <div className="divider"/>
                   <div className="about-sub-heading">
                       {/*<div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div>*/}
                       {/*    <div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div> */}
                       <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.toPersianNum(props.budget)} تومان</div>
                       <div className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {props.toPersianNum(props.TimeLimit)} روز</div>
                       <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m}</div>
                       <div className="not-inline"><i className="fa fa-book"/> تعداد صفحات: <strong> {props.toPersianNum(props.numberOfPages)}</strong></div>

                   </div>
               </div>
               <div className="con mb-4">
                   <div className="public-page-descript form-body-fontsize">
پروژه در انتظار تایید می باشد.
                   </div>
               </div>
           </div>
       )
    }
else {
    return(
        <div>
            <div className="con mb-4">
                <h5 className="project-title form-header-fontsize">
                    درباره پروژه
                </h5>
                <div className="divider"/>
                <div className="about-sub-heading">
                {/*    <div className="not-inline"><i className="fa fa-user"/> <strong>امتیاز کارفرما:</strong> <a href="#">4/5</a></div> */}
                    <div className="not-inline"><i className="fa fa-usd"/> <strong>بودجه:</strong> {props.toPersianNum(props.budget)} تومان</div>
                    <div className="not-inline"><i className="fa fa-calendar-o"/> <strong>مهلت:</strong> {props.toPersianNum(props.TimeLimit)} روز</div>
                    <div className="not-inline"><i className="fa fa-clock-o"/> <strong>زمان ثبت:</strong> {m}</div>
                    <div className="not-inline"><i className="fa fa-book"/> تعداد صفحات: <strong> {props.toPersianNum(props.numberOfPages)}</strong></div>

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
    is1MileStone: PropTypes.func.isRequired,
    is2MileStone: PropTypes.func.isRequired,
    is3MileStone: PropTypes.func.isRequired,
    is4MileStone: PropTypes.func.isRequired,
    amountOfMileStones: PropTypes.object.isRequired,
    Length: PropTypes.element.isRequired
};

export default AddBid;
